import Api from '../api/api';

import NbaDispatcher from '../dispatcher/nbaDispatcher';
import { ACTION_TYPES } from '../constants/nbaConstants';

class NbaActions {

    saveEvents() {
        NbaDispatcher.handleViewAction({
            type: ACTION_TYPES.SYSTEM.SAVE_EVENTS
        });

        Api.saveEvents();
    }

    saveEventsResponse(err, response) {
        NbaDispatcher.handleServerAction({
            type: ACTION_TYPES.SYSTEM.SAVE_EVENTS_RESPONSE,
            err,
            response
        });
    }
}

let _NbaActions = new NbaActions();
export default _NbaActions;