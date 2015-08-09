import moment from 'moment';
import DbService from '../core/db.svc';

class SystemService extends DbService {

    key(d) {
        let k = Object.keys(d);
        if (k.length > 1) {
            throw new Error('System key can only be generated for a single object');
        }
        return 'system_' + k;
    }

    transformData(type, data) {
        return {
            type,
            data,
            date: moment.utc().format()
        };
    }
}

let _SystemService = new SystemService();
export default _SystemService;