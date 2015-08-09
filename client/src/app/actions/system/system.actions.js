import Api from '../../api/system/system.api';
import NbaDispatcher from '../../dispatcher/nba.dispatcher';
import { ACTION_TYPES } from '../../constants/nba.constants';

class SystemActions {

    saveBoxscores() {
        NbaDispatcher.handleViewAction({
            type: ACTION_TYPES.SYSTEM.SAVE_BOXSCORES
        });

        Api.saveBoxscores();
    }

    saveBoxscoresResponse(err, response) {
        NbaDispatcher.handleServerAction({
            type: ACTION_TYPES.SYSTEM.SAVE_BOXSCORES_RESPONSE,
            err,
            response
        });
    }

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

let _SystemActions = new SystemActions();
export default _SystemActions;