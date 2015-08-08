import redis from 'redis';
import q from 'q';

class DbService {

    constructor(params) {

        params = params || {};
        this.client = params.client || redis.createClient();
    }

    getFromDb(key) {

        let deferred = q.defer();

        this.client.get(key, (err, data) => {
            if (err) {
                deferred.reject(err);
            }
            if (!err && !data) {
                deferred.reject({ data: [] });
            }
            else {
                deferred.resolve({ data: JSON.parse(data) });
            }
        });

        return deferred.promise;
    }

    saveToDb(key, data) {

        let deferred = q.defer();

        data = JSON.stringify(data);

        this.client.set(key, data, (err, result) => {
            if (err) {
                deferred.reject(err);
            }
            else {
                let resultObj = {};
                resultObj[key] = result;
                deferred.resolve(resultObj);
            }
        });

        return deferred.promise;
    }

}

export default DbService;