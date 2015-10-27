import Boom from 'boom';

import Route from '../../core/models/route';
import Response from '../../core/models/response';
import { INTERNAL_API } from '../../constants/constants';
import SystemService from '../system.svc';

class EventsGetRoute extends Route {

    constructor (method = 'GET', path = INTERNAL_API.system.events) {
        super({method, path});
    }

    handler (request, reply) {

        let response = {};

        SystemService.getSystemLogEntriesOfType('events')

            .then((entries) => {

                response = {
                    success: true,
                    data: {
                        log: {
                            type: 'events',
                            entries
                        }
                    }
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

export default EventsGetRoute;