import Hapi from 'hapi';
import Good from 'good';
import GoodConsole from 'good-console';

import Index from './index/index.route';
import EventsService from './system/events/events.svc';

var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 3000
});

server.route(new Index());

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

//EventsService.getEvents('2014-12-25T00:00:00-05:00');
//EventsService.saveEvents();

server.start(() => {
    console.log('* Server running at :', server.info.uri);
});