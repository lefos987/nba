import Boom from 'boom';

import Route from '../../core/models/route';
import { INTERNAL_API } from '../../constants/constants';
import SystemService from '../system.svc';

class BoxscoresGetRoute extends Route {

    constructor(method='GET', path=INTERNAL_API.system.boxscores) {
        super({method, path});
    }

    handler(request, reply) {

        SystemService.createSystemLogEntriesReply('boxscores', reply);
    }
}

export default BoxscoresGetRoute;