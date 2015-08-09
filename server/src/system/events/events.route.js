import Boom from 'boom';

import Route from '../../core/route';
import { INTERNAL_API } from '../../constants/constants';
import { transformToArray } from '../../core/utils';
import SystemService from '../system.svc';
import EventsService from './events.svc';

class EventsRoute extends Route {

    constructor(method='POST', path=INTERNAL_API.system.events) {
        super({method, path});
    }

    handler(request, reply) {

        let date = '2014-12-25T00:00:00-05:00';
        EventsService.getEventsFromApi(date)

            .then((result) =>
                (EventsService.areAllEventsCompleted(result.data.event)) ?
                    EventsService.saveToDb(EventsService.key(date), result.data) :
                    { [EventsService.key(date)]: 'Events are not yet completed' }
            )

            .then((data) => {
                return transformToArray(data).map((d) => {
                    return SystemService.saveToDb(SystemService.key(d), SystemService.transformData('events', data));
                });
            })

            .catch((error) => {
                reply(Boom.wrap(new Error(error)));
            });
    }
}

export default EventsRoute;