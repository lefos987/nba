import Hapi from 'hapi';
import Good from 'good';
import GoodConsole from 'good-console';

import IndexRoute from './index/index.route';
import EventsRoute from './system/events/events.route';
import BoxscoreRoute from './system/boxscore/boxscore.route';


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
server.route(new BoxscoreRoute());

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