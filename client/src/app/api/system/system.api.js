import request from 'superagent';

import { API_ENDPOINTS } from '../../constants/nba.constants';
import SystemActions from '../../actions/system/system.actions';

const HOST = 'http://localhost:3000';

let Api = {

    saveEvents() {
        request
            .post(HOST + API_ENDPOINTS.SYSTEM.EVENTS)
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