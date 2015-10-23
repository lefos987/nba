import { EventEmitter } from 'events';
import NbaDispatcher from '../../../dispatcher/nba.dispatcher';
import { ACTION_TYPES } from '../../../constants/nba.constants';

const CHANGE_EVENT = 'CHANGE_EVENT';

let _schedule = [];

class ScheduleStore extends EventEmitter {

    getSchedule() {
        return _schedule;
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

let _ScheduleStore = new ScheduleStore();
export default _ScheduleStore;

NbaDispatcher.register((payload) => {

    let action = payload.action;

    switch (action.type) {
        case ACTION_TYPES.SCHEDULE.GET_SCHEDULE_RESPONSE:
            _schedule = action.response;
            _ScheduleStore.emitChange();
            break;
    }
    return true;
});
