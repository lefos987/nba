import request from 'superagent';
import q from 'q';

import { API_CONFIG } from '../../constants/constants';
import ExternalApiProvider from '../../core/externalApiProvider';
import redisClient from '../../core/redisClient';
import { formatDate } from '../../core/utils';

class EventsService {

    constructor() {

        let config = {
            host: API_CONFIG.host,
            method: API_CONFIG.endpoints.events,
            urlParams: ['nba']
        };

        let XmlStatsApiProvider = new ExternalApiProvider(config);
        this.url = XmlStatsApiProvider.constructUrl();
    }

    getEventsFromApi(date) {

        let deferred = q.defer();

        date = formatDate(date);

        request
            .get(this.url)
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
        return this.getEventsFromDb(date)
            .then((data) => {
                let events = data.event;
                return events.map((event) => event.event_id);
            });
    }

    getEventsFromDb(date) {
        let deferred = q.defer();
        let key = 'event_' + date;

        redisClient.get(key, (err, data) => {
            if (err) {
                deferred.reject(err);
            }
            else {
                deferred.resolve(JSON.parse(data));
            }
        });

        return deferred.promise;
    }

    saveEventsToDb(date, events) {

        let deferred = q.defer();
        let key = 'event_' + date;

        events = JSON.stringify(events);

        redisClient.set(key, events, (err, data) => {
            if (err) {
                deferred.reject(err);
            }
            else {
                deferred.resolve(data);
            }
        });

        return deferred.promise;
    }
}

let _EventsService = new EventsService();

export default _EventsService;