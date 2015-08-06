import Route from '../core/route';

class Index extends Route {

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

export default Index;