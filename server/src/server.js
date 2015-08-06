import Hapi from 'hapi';
import Good from 'good';
import GoodConsole from 'good-console';

import Homepage from './homepage/homepage';

var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 3000
});

server.route(new Homepage());

server.register({
    register: Good,
    options: {
        reporters: [{
            reporter: GoodConsole,
            events: {
                response: '*',
                log: '*'
            }
        }]
    }
}, (err) => {
    if (err) {
        throw err;
    }
});

server.start(() => {
    console.log('* Server running at :', server.info.uri);
});