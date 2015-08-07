class ExternalApiProvider {

    constructor(params) {

        params      = params || {};
        this.host   = params.host;
        this.method = params.method;
        this.urlParams = params.urlParams;
    }

    constructUrl() {
        let paramsUrl = '';
        this.urlParams.forEach((param) => {
            paramsUrl += '/' + param;
        });
        return 'https://' + this.host + paramsUrl + this.method;
    }
}

export default ExternalApiProvider;