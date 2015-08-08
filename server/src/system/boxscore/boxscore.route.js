import q from 'q';
import Boom from 'boom';
import Route from '../../core/route';
import { INTERNAL_API } from '../../constants/constants';
import BoxscoreService from './boxscore.svc';

class BoxscoreRoute extends Route {

    constructor(method='POST', path=INTERNAL_API.system.boxscore) {
        super({method, path});
    }

    handler(request, reply) {

        BoxscoreService.getBoxscoresFromApi('2014-12-25')

            .then((boxscorePromises) => {
                return q.all(boxscorePromises).then((boxscores) => {
                    return boxscores.map((boxscore) => BoxscoreService.saveToDb(boxscore.eventId, boxscore.data));
                });
            })

            .then((saveToDbPromises) => {
                q.all(saveToDbPromises).then((data) => {
                    reply({ data });
                });
            })

            .catch((error) => {
                reply(Boom.wrap(new Error(error)));
            });
    }
}

export default BoxscoreRoute;