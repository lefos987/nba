import { EventEmitter } from 'events';

import NbaDispatcher from '../../dispatcher/nba.dispatcher';
import { ACTION_TYPES } from '../../constants/nba.constants';

const CHANGE_EVENT = 'CHANGE_EVENT';

let _status = {};

class SystemStore extends EventEmitter {

    getSystemStatus() {
        return _status;
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(cb) {
        this.on(CHANGE_EVENT, cb);
    }

    removeChangeListener(cb) {
        this.removeListener(CHANGE_EVENT, cb);
    }
}

let _SystemStore = new SystemStore();
export default _SystemStore;

NbaDispatcher.register((payload) => {

    let action = payload.action;

    switch (action.type) {
        case ACTION_TYPES.SYSTEM.SAVE_EVENTS_RESPONSE:
            _status.events = action.response.data;
            _SystemStore.emitChange();
            break;
    }
    return true;
});