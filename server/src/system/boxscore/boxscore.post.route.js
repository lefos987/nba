import q from 'q';
import Boom from 'boom';
import Route from '../../core/models/route';
import { INTERNAL_API } from '../../constants/constants';
import SystemService from '../system.svc';
import BoxscoreService from './boxscore.svc';

class BoxscoreRoute extends Route {

    constructor(method='POST', path=INTERNAL_API.system.boxscores) {
        super({method, path});
    }

    handler(request, reply) {

        let date = request.payload.body.date;

        BoxscoreService.getBoxscoresFromApi(date)

            .then((boxscorePromises) => {
                return q.all(boxscorePromises).then((boxscores) => {
                    return boxscores.map((boxscore) => BoxscoreService.saveToDb(boxscore.eventId, boxscore.data));
                });
            })

            .then((saveToDbPromises) => {
                return q.all(saveToDbPromises).then((dbResults) => {

                    return dbResults.map((result) => {

                        let params = {
                            data: {
                                result,
                                date
                            },
                            type: 'boxscores',
                            operation: 'insert'
                        };
                        return SystemService.saveToListOfDb(SystemService.key('boxscores'), SystemService.createLogEntry(params));
                    });


                });
            })

            .then((saveLogEntriesResults) => {
                q.all(saveLogEntriesResults).then((result) => {
                    reply({ result });
                });
            })

            .catch((error) => {
                console.log('error ->', error);
                reply(Boom.wrap(new Error(error)));
            });
    }
}

export default BoxscoreRoute;