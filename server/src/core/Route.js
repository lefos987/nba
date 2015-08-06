class Route {

    constructor(params) {

        params = params || {};
        this.method = params.method;
        this.path = params.path;
    }

    handler(request, reply) {
        reply('Hello!');
    }
}

export default Route;