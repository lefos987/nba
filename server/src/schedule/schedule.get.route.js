import Route from '../core/models/route';
import { INTERNAL_API } from '../constants/constants';
import ScheduleService from './schedule.svc';

class ScheduleGetRoute extends Route {

    constructor(method='GET', path=INTERNAL_API.schedule) {
        super({method, path});
    }

    handler(request, reply) {

        ScheduleService
            .constructSchedule('20141225')
            .then((schedule) => {
                reply(schedule);
            });
    }
}

export default ScheduleGetRoute;