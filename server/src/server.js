import Hapi from 'hapi';
import Good from 'good';
import GoodConsole from 'good-console';

import IndexRoute from './index/index.route';
import EventsGetRoute from './system/events/events.get.route';
import EventsPostRoute from './system/events/events.post.route';
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
server.route(new EventsGetRoute());
server.route(new EventsPostRoute());
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