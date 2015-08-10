import moment from 'moment';
import DbService from '../core/db.svc';

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
}

let _SystemService = new SystemService();
export default _SystemService;