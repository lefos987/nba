import Boom from 'boom';
import Route from '../core/models/route';
import { INTERNAL_API } from '../constants/constants';
import ScheduleService from './schedule.svc';

class ScheduleGetRoute extends Route {

    constructor(method='GET', path=INTERNAL_API.schedule) {
        super({method, path});
    }

    handler(request, reply) {

        let date = request.query.date;
        let response = {};

        ScheduleService

            .constructSchedule(date)

            .then((schedule) => {
                reply(schedule);
            })

            .catch((error) => {
                reply(Boom.wrap(new Error(error)));
            });
    }
}

export default ScheduleGetRoute;