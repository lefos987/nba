import request from 'superagent';
import q from 'q';

class Request {

    constructor(params) {

        params = params || {};

        this.method    = params.method || null;
        this.host      = params.host || null;
        this.endpoint  = params.endpoint  || null;
        this.urlParams = params.urlParams || null;
        this.headers   = params.headers || null;
        this.query     = params.query || null;
        this.url       = params.url || this.constructUrl();
    }

    constructUrl() {
        let paramsUrl = '';
        this.urlParams.forEach((param) => {
            paramsUrl += '/' + param;
        });
        return 'https://' + this.host + paramsUrl + '/' + this.endpoint;
    }

    send(errHandler, successHandler) {

        let deferred = q.defer();

        request(this.method, this.url)
            .set(this.headers)
            .query(this.query)
            .end((err, data) => {
                if (err) {
                    let error = (errHandler) ? errHandler(err) : err;
                    deferred.reject(error);
                }
                else {
                    let result = (successHandler) ? successHandler(data) : data;
                    deferred.resolve(result);
                }
            });

        return deferred.promise;
    }

}

export default Request;