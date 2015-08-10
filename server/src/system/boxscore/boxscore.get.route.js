import Boom from 'boom';

import Route from '../../core/route';
import { INTERNAL_API } from '../../constants/constants';
import SystemService from '../system.svc';

class BoxscoresGetRoute extends Route {

    constructor(method='GET', path=INTERNAL_API.system.boxscores) {
        super({method, path});
    }

    handler(request, reply) {

        SystemService.getSystemLogEntriesOfType('boxscores')
            .then((entries) => {
                reply({
                    log: {
                        type: 'boxscores',
                        entries
                    }
                });
            });
    }
}

export default BoxscoresGetRoute;