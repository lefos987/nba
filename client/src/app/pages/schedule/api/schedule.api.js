import request from 'superagent';

import { API_ENDPOINTS, HOST } from '../../../constants/nba.constants';
import ScheduleActions from '../actions/schedule.actions';

let Api = {

    getSchedule(date) {

        request
            .get(HOST + API_ENDPOINTS.SCHEDULE)
            .query({ date })
            .end((err, res) => {
                if (err) {
                    ScheduleActions.getScheduleRespnse(err);
                }
                else {
                    let data = JSON.parse(res.text);
                    ScheduleActions.getScheduleResponse(null, data);
                }
            });
    }
};

export default Api;