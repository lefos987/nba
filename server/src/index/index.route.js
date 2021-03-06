import Route from '../core/models/route';

class IndexRoute extends Route {

    constructor(method = 'GET', path='/{param*}') {

        super({ method, path });

        this.handler = {
            directory: {
                path: 'public',
                index: true,
                listing: true
            }
        };
    }
}

export default IndexRoute;