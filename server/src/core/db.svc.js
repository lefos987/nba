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
            else {
                deferred.resolve(JSON.parse(data));
            }
        });

        return deferred.promise;
    }

    saveToDb(key, data) {

        let deferred = q.defer();

        data = JSON.stringify(data);

        this.client.set(key, data, (err, data) => {
            if (err) {
                deferred.reject(err);
            }
            else {
                deferred.resolve(data);
            }
        });

        return deferred.promise;
    }

}

export default DbService;