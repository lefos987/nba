import { EventEmitter } from 'events';

import NbaDispatcher from '../../../dispatcher/nba.dispatcher';
import { ACTION_TYPES } from '../../../constants/nba.constants';

const CHANGE_EVENT = 'CHANGE_EVENT';

let _entries = [];

class SystemStore extends EventEmitter {

    getLogEntries() {
        return _entries;
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

        case ACTION_TYPES.SYSTEM.GET_LOG_ENTRIES_RESPONSE:
            _entries = action.response.log.entries;
            _SystemStore.emitChange();
            break;
    }
    return true;
});