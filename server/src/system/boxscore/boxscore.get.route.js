import Boom from 'boom';

import Route from '../../core/models/route';
import Response from '../../core/models/response';
import { INTERNAL_API } from '../../constants/constants';
import SystemService from '../system.svc';

class BoxscoresGetRoute extends Route {

    constructor(method='GET', path=INTERNAL_API.system.boxscores) {
        super({method, path});
    }

    handler(request, reply) {

        let response = {};

        SystemService.getSystemLogEntriesOfType('boxscores')

            .then((entries) => {

                response = {
                    success: true,
                    data: {
                        log: {
                            type: 'boxscores',
                            entries
                        }
                    }
                });
            })

            .catch((err) => {
                let error = Boom.create(500, err, {type: 'boxscores'});
                error.reformat();
                error.output.payload.type = 'boxscores';
                error.output.payload.date = new Date();
                reply(error);
            });
    }
}

export default BoxscoresGetRoute;