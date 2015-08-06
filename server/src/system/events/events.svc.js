import request from 'superagent';

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

    getEvents(date) {

        date = formatDate(date);
        request
            .get(this.url)
            .set('Authorization', 'Bearer ' + API_CONFIG.api_key)
            .set('User-Agent', API_CONFIG.user_agent)
            .query({ date })
            .end((err, data) => {
                if (err) {
                    console.log('err ->', err);
                }
                else {
                    this.saveEvents(date, JSON.stringify(data.res.body));
                }
            });
    }

    saveEvents(date, events) {
        redisClient.set(date, events);
    }
}

let _EventsService = new EventsService();

export default _EventsService;