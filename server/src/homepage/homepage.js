import Route from '../core/Route';

class Homepage extends Route {

    constructor(method = 'GET', path='/') {
        super({ method, path });
    }

    handler(request, reply) {
        reply('Hello 23!');
    }
}

export default Homepage;