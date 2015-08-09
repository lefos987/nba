import redis from 'redis';
import q from 'q';

class DbService {

    constructor(params) {

        params = params || {};
        this.client = params.client || redis.createClient();
    }

    /**
     * Get value of single key from Redis
     * @param key
     * @returns {Function|promise}
     */
    getFromDb(key) {

        let deferred = q.defer();

        this.client.get(key, (err, data) => {
            if (err) {
                deferred.reject(err);
            }
            if (!err && !data) {
                deferred.reject([]);
            }
            else {
                deferred.resolve(JSON.parse(data));
            }
        });

        return deferred.promise;
    }

    /**
     * Save single value to a key in redis
     * @param key
     * @param data
     * @returns {Function|promise}
     */
    saveToDb(key, data) {

        let deferred = q.defer();

        data = JSON.stringify(data);

        this.client.set(key, data, (err, result) => {
            if (err) {
                deferred.reject(err);
            }
            else {
                deferred.resolve({
                    [key]: result
                });
            }
        });

        return deferred.promise;
    }

    /**
     * Get the length of a Redis list
     * @param list
     * @returns {Function|promise}
     */
    getListLength(list) {
        let deferred = q.defer();

        this.client.llen(list, (err, result) => {
            if (err) {
                deferred.reject(err);
            }
            else {
                deferred.resolve(result);
            }
        });

        return deferred.promise;
    }

    /**
     * Get all items of a Redis list in a specific index range
     * @param list
     * @param start
     * @param end
     * @returns {*}
     */
    getFromListOfDb(list, start=0, end=null) {

        return this.getListLength(list)

            .then((length) => {

                let deferred = q.defer();

                end = end || length;

                this.client.lrange(list, start, end, (err, data) => {
                    if (err) {
                        deferred.reject(err);
                    }
                    if (!err && !data) {
                        deferred.reject([]);
                    }
                    else {
                        deferred.resolve(JSON.parse(data));
                    }
                });

                return deferred.promise;

            });

    }

    /**
     * Push an item to the left of a Redis list
     * @param list
     * @param item
     * @returns {Function|promise}
     */
    saveToListOfDb(list, item) {
        let deferred = q.defer();

        item = JSON.stringify(item);

        this.client.lpush(list, item, (err, result) => {
            if (err) {
                deferred.reject(err);
            }
            else {
                deferred.resolve({
                    [list]: result
                });
            }
        });

        return deferred.promise;
    }

}

export default DbService;