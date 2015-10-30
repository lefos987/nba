class NbaError {

    constructor(params) {
        params = params || {};
        this.message = params.message || null;
        this.stack = params.stack || null;
        this.status = params.status || null;
        this.body = params.response.body || null;
    }
}

export default NbaError;