class ExternalApiProvider {

    constructor(params) {

        params      = params || {};
        this.host   = params.host;
        this.method = params.method;
        this.urlParams = params.urlParams;
    }

    constructUrl() {
        let paramsUrl = this.urlParams.map((param) => '/' + param);
        return 'https://' + this.host + paramsUrl + this.method;
    }
}

export default ExternalApiProvider;