import moment from 'moment';
import q from 'q';

export let formatDate = (date) => moment(date).format('YYYYMMDD');

export let delay = (asyncFn, timerIndex, delay, errCb, successCb) => {
    let deferred = q.defer();

    setTimeout(() => {
        deferred.resolve(asyncFn(errCb, successCb));
    }, timerIndex * delay);

    return deferred.promise;
};

export let transformToArray = (obj) => {
    if (!Array.isArray(obj)) {
        return [obj];
    }
    return obj;
};