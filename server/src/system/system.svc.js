import moment from 'moment';
import DbService from '../core/db.svc';

class SystemService extends DbService {

    key(type) {
        return 'system_' + type;
    }

    transformData(data) {
        for (let d in data) {
            data[d] = (data[d] === 'OK') ? 1 : 0;
        }
        return {
            data,
            date: moment.utc().format()
        };
    }

    getSystemLogEntriesOfType(type) {
        let list = this.key(type);
        return this.getFromListOfDb(list);
    }
}

let _SystemService = new SystemService();
export default _SystemService;