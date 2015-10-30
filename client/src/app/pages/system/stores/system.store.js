import { EventEmitter } from 'events';
import _ from 'lodash';
import NbaError from '../../../common/error.mdl';
import NbaDispatcher from '../../../dispatcher/nba.dispatcher';
import { ACTION_TYPES } from '../../../constants/nba.constants';

const CHANGE_EVENT = 'CHANGE_EVENT';

let _entries = [];
let _errors = [];
let _command = '';
let _result = '';

let _resetEntries = (type) => {
    _.remove(_entries, (entry) => {
        return entry.data.type === type;
    });
};

class SystemStore extends EventEmitter {

    getLogEntries(type) {
        return _entries.filter((entry) => (entry.data.type === type));
    }

    getErrors(type) {
        return _errors.filter((error) => (error.body.type === type));
    }

    getCommand() {
        return _command;
    }

    getResult() {
        return _result;
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
            if (action.err) {
                _errors.push(new NbaError(action.err));
            }
            else {
                _resetEntries(action.response.log.type);
                action.response.log.entries.forEach((entry) => {
                    _entries.push(entry);
                });
            }
            _SystemStore.emitChange();
            break;
        
        case ACTION_TYPES.SYSTEM.SAVE_EVENTS_RESPONSE:
        case ACTION_TYPES.SYSTEM.SAVE_BOXSCORES_RESPONSE:

            _result = (action.response) ?
                { success: true, error: null } :
                { success: false, error: action.err.response.body.message};
            _command = '';
            _SystemStore.emitChange();
            break;

    }
    return true;
});