import request from 'superagent';
import q from 'q';

import { API_CONFIG } from '../../constants/constants';
import EventsService from '../events/events.svc';
import RequestObject from '../../core/request';
import RequestQueue from '../../core/requestQueue.svc';

class BoxscoreService {

    //constructBoxscoreRequests(eventIds) {
    //    return q.fcall(() => {
    //        return eventIds.map((eventId) => {
    //
    //            let method = 'GET';
    //            let config = {
    //                host: API_CONFIG.host,
    //                method: eventId + '.json',
    //                urlParams: ['nba', 'boxscore']
    //            };
    //            let XmlStatsApiProvider = new ExternalApiProvider(config);
    //            let url = XmlStatsApiProvider.constructUrl();
    //
    //            let headers = {
    //                'Authorization': 'Bearer ' + API_CONFIG.api_key,
    //                'User-Agent': API_CONFIG.user_agent
    //            };
    //            return new RequestObject({method, url, headers});
    //        });
    //    });
    //}

    //addBoxscoreRequestsToQueue (date) {
    //
    //    EventsService.eventIdsForDate(date)
    //        .then((eventIds) => this.constructBoxscoreRequests(eventIds))
    //        .then((boxscoreRequests) => {
    //            boxscoreRequests.forEach((boxscoreRequest) => {
    //                RequestQueue.addToQueue(boxscoreRequest);
    //            });
    //        });
    //}
    
    //getBoxscoreForEventFromApi(eventId) {
    //
    //    let deferred = q.defer();
    //    let config = {
    //        host: API_CONFIG.host,
    //        method: eventId + '.json',
    //        urlParams: ['nba', 'boxscore']
    //    };
    //    let XmlStatsApiProvider = new ExternalApiProvider(config);
    //    let url = XmlStatsApiProvider.constructUrl();
    //
    //    request
    //        .get(url)
    //        .set('Authorization', 'Bearer ' + API_CONFIG.api_key)
    //        .set('User-Agent', API_CONFIG.user_agent)
    //        .end((err, data) => {
    //
    //            if(err) {
    //                deferred.reject(err);
    //            }
    //            else {
    //                let result = {
    //                    data: data.res.body
    //                };
    //
    //                deferred.resolve(result);
    //            }
    //        });
    //    return deferred.promise;
    //}
}

let _BoxscoreService = new BoxscoreService();
export default _BoxscoreService;