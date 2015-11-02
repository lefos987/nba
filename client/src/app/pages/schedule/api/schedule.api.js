import request from 'superagent';

import { API_ENDPOINTS } from '../../../constants/nba.constants';
import ScheduleActions from '../actions/schedule.actions';
import { formatDate } from '../../../common/utils';

let Api = {

    getSchedule(date) {

        date = formatDate(date, 'YYYYMMDD');

        request
            .get(API_ENDPOINTS.SCHEDULE)
            .query({ date })
            .end((err, res) => {
                if (err) {
                    ScheduleActions.getScheduleResponse(err);
                }
                else {
                    let data = JSON.parse(res.text);
                    ScheduleActions.getScheduleResponse(null, data);
                }
            });
    }
};

export default Api;