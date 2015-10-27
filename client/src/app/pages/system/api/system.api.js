import request from 'superagent';

import { API_ENDPOINTS, HOST } from '../../../constants/nba.constants';
import SystemActions from '../actions/system.actions';

let Api = {

    getLogEntries(type) {

        const URL = (type === 'events') ?
            API_ENDPOINTS.SYSTEM.EVENTS :
            API_ENDPOINTS.SYSTEM.BOXSCORES;

        request
            .get(HOST + URL)
            .end((err, res) => {
                if (err) {
                    SystemActions.getLogEntriesResponse(err);
                }
                else {
                    let data = JSON.parse(res.text);
                    SystemActions.getLogEntriesResponse(null, data);
                }
            });
    },

    saveBoxscores() {
        request
            .post(HOST + API_ENDPOINTS.SYSTEM.BOXSCORES, {
                body: {
                    date: new Date()
                },
                json: true
            })
            .end((err, res) => {
                if(err) {
                    SystemActions.saveBoxscoresResponse(err);
                }
                else {
                    let data = JSON.parse(res.text);
                    SystemActions.saveBoxscoresResponse(null, data);
                }
            });
    },

    saveEvents() {
        request
            .post(HOST + API_ENDPOINTS.SYSTEM.EVENTS, {
                body: {
                    date: new Date()
                },
                json: true
            })
            .end((err, res) => {
                if(err) {
                    SystemActions.saveEventsResponse(err);
                }
                else {
                    let data = JSON.parse(res.text);
                    SystemActions.saveEventsResponse(null, data);
                }
            });
    }
};

export default Api;