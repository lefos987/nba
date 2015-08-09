import q from 'q';
import Boom from 'boom';
import Route from '../../core/route';
import { INTERNAL_API } from '../../constants/constants';
import SystemService from '../system.svc';
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
                return q.all(saveToDbPromises).then((dbResults) => {
                    return dbResults.map((result) =>
                        SystemService.saveToDb(SystemService.key(result), SystemService.transformData('boxscores', result)));
                });
            })

            .catch((error) => {
                reply(Boom.wrap(new Error(error)));
            });
    }
}

export default BoxscoreRoute;