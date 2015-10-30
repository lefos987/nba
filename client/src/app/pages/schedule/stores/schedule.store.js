import moment from 'moment';
import { EventEmitter } from 'events';
import NbaDispatcher from '../../../dispatcher/nba.dispatcher';
import { ACTION_TYPES } from '../../../constants/nba.constants';

const CHANGE_EVENT = 'CHANGE_EVENT';
const YESTERDAY = moment().subtract(1, 'days');

let _schedule = [];

let _selectedDate = YESTERDAY;

class ScheduleStore extends EventEmitter {

    getSchedule() {
        return _schedule;
    }

    getSelectedDate() {
        return _selectedDate;
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
            _schedule = action.response.schedule;
            _ScheduleStore.emitChange();
            break;

        case ACTION_TYPES.SCHEDULE.SET_DATE:
            _selectedDate = action.date;
            _ScheduleStore.emitChange();
            break;
    }

    return true;
});

