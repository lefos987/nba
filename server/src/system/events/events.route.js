import Boom from 'boom';

import Route from '../../core/route';
import { INTERNAL_API } from '../../constants/constants';
import EventsService from './events.svc';

class EventsRoute extends Route {

    constructor(method='POST', path=INTERNAL_API.system.events) {
        super({method, path});
    }

    handler(request, reply) {

        let date = '2014-12-25T00:00:00-05:00';
        EventsService.getEventsFromApi(date)

            .then((result) => EventsService.saveToDb(EventsService.key(date), result.data))

            .then((data) => {
                reply({ data });
            })

            .catch((error) => {
                reply(Boom.wrap(new Error(error)));
            });
    }
}

export default EventsRoute;