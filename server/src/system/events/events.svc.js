import request from 'superagent';
import q from 'q';

import { API_CONFIG } from '../../constants/constants';
import ExternalApiProvider from '../../core/externalApiProvider';
import DbService from '../../core/db.svc';
import { formatDate } from '../../core/utils';

class EventsService extends DbService{

    getEventsFromApi(date) {

        let deferred = q.defer();
        let config = {
            host: API_CONFIG.host,
            method: API_CONFIG.endpoints.events,
            urlParams: ['nba']
        };
        let XmlStatsApiProvider = new ExternalApiProvider(config);
        let url = XmlStatsApiProvider.constructUrl();

        date = formatDate(date);

        request
            .get(url)
            .set('Authorization', 'Bearer ' + API_CONFIG.api_key)
            .set('User-Agent', API_CONFIG.user_agent)
            .query({ date })
            .end((err, data) => {
                if (err) {
                    deferred.reject(err);
                }
                else {
                    let result = {
                        date,
                        data: data.res.body
                    };

                    deferred.resolve(result);
                }
            });

        return deferred.promise;
    }

    eventIdsForDate(date) {

        return this.getFromDb(this.key(date))
            .then((data) => {
                let events = data.event;
                return events.map((event) => event.event_id);
            });
    }

    key(date) {
        date = formatDate(date);
        return 'events_' + date;
    }

}

let _EventsService = new EventsService();

export default _EventsService;