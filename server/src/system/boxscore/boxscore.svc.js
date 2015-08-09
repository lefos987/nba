import q from 'q';
import { XML_STATS_API } from '../../constants/constants';
import { delay } from '../../core/utils';
import DbService from '../../core/db.svc';
import Request from '../../core/request';
import RequestQueue from '../../core/requestQueue.svc';
import EventsService from '../events/events.svc';

class BoxscoreService extends DbService{

    _constructBoxscoreRequests(eventIds) {

        return q.fcall(() => {
            
            return eventIds.map((eventId) => {

                return new Request({
                    method: 'GET',
                    host: XML_STATS_API.host,
                    endpoint: XML_STATS_API.endpoints.boxscore + eventId + '.json',
                    headers: XML_STATS_API.headers,
                    urlParams: ['nba', 'boxscore']
                });

            });
        });
    }

    _addBoxscoreRequestsToQueue(date) {

        return EventsService.eventIdsForDate(date)

            .then((eventIds) => this._constructBoxscoreRequests(eventIds))

            .then((boxscoreRequests) => RequestQueue.addToQueue(boxscoreRequests))

            .then((requestQueue) => requestQueue);
    }

    getBoxscoresFromApi(date) {

        return this._addBoxscoreRequestsToQueue(date)

            .then((requestQueue) => {
                let promises = [];

                let lefos = [
                    requestQueue[0],
                    requestQueue[1]
                ];
                lefos.forEach((request, index) => {
                    let send = request.send.bind(request);
                    let successHandler = (data) => ({
                        eventId: request.endpoint.split('.')[0],
                        data: data.res.body
                    });
                    promises.push(delay(send, index, 12000, null, successHandler));
                });

                return promises;
            });
    }

}

let _BoxscoreService = new BoxscoreService();
export default _BoxscoreService;