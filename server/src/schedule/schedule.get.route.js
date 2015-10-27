import Boom from 'boom';
import Route from '../core/models/route';
import Response from '../core/models/response';
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
                response = {
                    success: true,
                    data: schedule
                };
                reply(new Response(response));
            })

            .catch((error) => {
                response = {
                    success: false,
                    data: Boom.wrap(new Error(error))
                };
                reply(new Response(response));
            });
    }
}

export default ScheduleGetRoute;