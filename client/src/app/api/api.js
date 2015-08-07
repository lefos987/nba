import request from 'superagent';

import { API_ENDPOINTS } from '../constants/nbaConstants';
import NbaActions from '../actions/nbaActions';

let Api = {

    saveEvents() {
        request
            .post(API_ENDPOINTS.SYSTEM.EVENTS)
            .end((err, res) => {
                if(err) {
                    NbaActions.saveEventsResponse(err);
                }
                else {
                    let data = JSON.parse(res.text);
                    NbaActions.saveEventsResponse(null, data);
                }
            });
    }
};

export default Api;