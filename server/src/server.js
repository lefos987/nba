import Hapi from 'hapi';
import Good from 'good';
import GoodConsole from 'good-console';

import IndexRoute from './index/index.route';
import EventsRoute from './system/events/events.route';

import Boxscore from './system/boxscore/boxscore.svc';

var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 3000,
    routes: {
        cors: true
    }
});

server.route(new IndexRoute());
server.route(new EventsRoute());

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