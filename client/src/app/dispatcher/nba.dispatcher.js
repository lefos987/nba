import { Dispatcher } from 'flux';

import { PAYLOAD_SOURCES } from '../constants/nba.constants';

class NbaDispatcher extends Dispatcher {

    handleServerAction (action) {

        this.dispatch({
            source: PAYLOAD_SOURCES.SERVER_ACTION,
            action
        });
    }

    handleViewAction (action) {
        this.dispatch({
            source: PAYLOAD_SOURCES.VIEW_ACTION,
            action
        });
    }
}

let _NbaDispatcher = new NbaDispatcher();
export default _NbaDispatcher;