import moment from 'moment';
import request from 'superagent';
import { CronJob } from 'cron';
import { INTERNAL_API } from '../constants/constants';
import DbService from '../core/services/db.svc';

class SystemService extends DbService {

    key(type) {
        return 'system_' + type;
    }

    createLogEntry(params) {
        let {type, operation, data} = params;
        return {
            date: moment.utc().format(),
            type,
            operation,
            data
        };
    }

    getSystemLogEntriesOfType(type) {

        let list = this.key(type);

        return this.getFromListOfDb(list).then((listItems) => {

            return listItems.map((item) => ({
                date: item.date,
                data: {
                    type: item.type,
                    operation: item.operation,
                    item: Object.keys(item.data.result)[0],
                    status: item.data.result[Object.keys(item.data.result)],
                    date: item.data.date
                }
            }));
            
        });
    }

    scheduleUpdateTasks() {

        let job = new CronJob('00 00-59 12-13 * * *', () => {

            request
                .post(INTERNAL_API.host + INTERNAL_API.system.events)
                .end((err, events) => {

                    if (events) {

                        request
                            .post(INTERNAL_API.host + INTERNAL_API.system.boxscores)
                            .end((err, boxscores) => {

                                if (boxscores) {
                                    job.stop();
                                }
                            });
                    }
                });
        }, () => {
            console.log('* job done! *');
        });
        job.start();

    }
}

let _SystemService = new SystemService();
export default _SystemService;