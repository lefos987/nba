import Api from '../api/schedule.api';
import NbaDispatcher from '../../../dispatcher/nba.dispatcher';
import { ACTION_TYPES } from '../../../constants/nba.constants';

class ScheduleActions {

    getSchedule(date) {
        NbaDispatcher.handleViewAction({
            type: ACTION_TYPES.SCHEDULE.GET_SCHEDULE
        });
        Api.getSchedule(date);
    }

    getScheduleResponse(err, response) {
        NbaDispatcher.handleServerAction({
            type: ACTION_TYPES.SCHEDULE.GET_SCHEDULE_RESPONSE,
            err,
            response
        });
    }
}

let _ScheduleActions = new ScheduleActions();
export default _ScheduleActions;