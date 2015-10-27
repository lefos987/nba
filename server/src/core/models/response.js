class Response {

    constructor(params) {

        params = params || {};

        this.success = params.success || true;
        this.data = params.data || {};
    }


}

export default Response;