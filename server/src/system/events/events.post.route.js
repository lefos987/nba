import Boom from 'boom';
import q from 'q';

import Route from '../../core/models/route';
import { INTERNAL_API } from '../../constants/constants';
import { transformToArray } from '../../core/services/utils.svc';
import SystemService from '../system.svc';
import EventsService from './events.svc';

class EventsPostRoute extends Route {

    constructor(method='POST', path=INTERNAL_API.system.events) {
        super({method, path});
    }

    handler(request, reply) {

        let date = request.payload.body.date;

        //1. We make a call to XML_Stats API to get the events for a specific date
        EventsService.getEventsFromApi(date)

            //2. If all events that come back have been completed we try to save them to the DB and return a promise
            //   If not we return an appropriate response
            .then((response) =>
                (EventsService.areAllEventsCompleted(response.data.event)) ?
                    EventsService.saveToDb(EventsService.key(date), response.data) :
                    q.fcall(() => ({ [EventsService.key(date)]: 'Events are not yet completed' }))
            )

            //3. We try to save a system log entry of the result of the db insert of step 2 to a redis list and return
            // a promise
            .then((saveEventsResults) => {
                return transformToArray(saveEventsResults).map((saveEventsResult) => {
                    let params = {
                        data: {
                            result: saveEventsResult,
                            date
                        },
                        type: 'events',
                        operation: 'insert'
                    };
                    return SystemService.saveToListOfDb(SystemService.key('events'), SystemService.createLogEntry(params));
                });
            })

            //4. We resolve the promises of saving the system log entry to a Redis list and we send reply to the client
            .then((saveLogEntriesResults) => {
                q.all(saveLogEntriesResults).then((result) => {
                    reply({ result });
                });
            })

            .catch((error) => {
                reply(Boom.wrap(new Error(error)));
            });
    }
}

export default EventsPostRoute;