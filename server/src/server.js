import Hapi from 'hapi';
import Good from 'good';
import GoodConsole from 'good-console';

import IndexRoute from './index/index.route';
import EventsGetRoute from './system/events/events.get.route';
import EventsPostRoute from './system/events/events.post.route';
import BoxscoreGetRoute from './system/boxscore/boxscore.get.route';
import BoxscorePostRoute from './system/boxscore/boxscore.post.route';
import ScheduleGetRoute from './schedule/schedule.get.route';

import SystemService from './system/system.svc';

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
server.route(new BoxscoreGetRoute());
server.route(new BoxscorePostRoute());

server.route(new ScheduleGetRoute());

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

SystemService.scheduleUpdateTasks();

server.start(() => {
    console.log('* Server running at :', server.info.uri);
});