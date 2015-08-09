import Boom from 'boom';
import q from 'q';

import Route from '../../core/route';
import { INTERNAL_API } from '../../constants/constants';
import { transformToArray } from '../../core/utils';
import SystemService from '../system.svc';
import EventsService from './events.svc';

class EventsPostRoute extends Route {

    constructor(method='POST', path=INTERNAL_API.system.events) {
        super({method, path});
    }

    handler(request, reply) {

        let date = '2014-12-25T00:00:00-05:00';

        //1. We make a call to XML_Stats API to get the events for a specific date
        EventsService.getEventsFromApi(date)

            //2. If all events that come back have been completed we try to save them to the DB and return a promise
            //   If not we return an appropriate response
            .then((response) =>
                (EventsService.areAllEventsCompleted(response.data.event)) ?
                    EventsService.saveToDb(EventsService.key(date), response.data) :
                    { [EventsService.key(date)]: 'Events are not yet completed' }
            )

            //3. We try to save a system log entry of the result of the db insert of step 2 to a redis list and return a promise
            .then((eventDbInsertPromises) => {
                return transformToArray(eventDbInsertPromises).map((eventDbInsertPromise) => {
                    return SystemService.saveToListOfDb(SystemService.key('events'), SystemService.transformData(eventDbInsertPromise));
                });
            })

            //4. We resolve the promises of saving the system log entry to a Redis list and we send reply to the client
            .then((eventListInsertPromises) => {
                q.all(eventListInsertPromises).then((result) => {
                    reply({ result });
                });
            })

            .catch((error) => {
                reply(Boom.wrap(new Error(error)));
            });
    }
}

export default EventsPostRoute;