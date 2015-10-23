import Boom from 'boom';

import Route from '../../core/models/route';
import { INTERNAL_API } from '../../constants/constants';
import SystemService from '../system.svc';

class EventsGetRoute extends Route {

    constructor(method='GET', path=INTERNAL_API.system.events) {
        super({method, path});
    }

    handler(request, reply) {

        SystemService.getSystemLogEntriesOfType('events')
            .then((entries) => {
                reply({
                    log: {
                        type: 'events',
                        entries
                    }
                });
            });
    }
}

export default EventsGetRoute;