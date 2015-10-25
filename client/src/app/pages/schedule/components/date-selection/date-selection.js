import React from 'react';
import ScheduleStore from '../../stores/schedule.store';
import ScheduleActions from '../../actions/schedule.actions';

let getDateSelectionState = () => ({
    selectedDate: ScheduleStore.getSelectedDate()
});

class DateSelection extends React.Component {

    constructor() {
        super();
        this.state = getDateSelectionState();
        this._nextDate = this._nextDate.bind(this);
        this._previousDate = this._previousDate.bind(this);
    }

    _nextDate () {
        ScheduleActions.setScheduleDate('20141225');
    }

    _previousDate () {
        ScheduleActions.setScheduleDate('20141224');
    }

    render() {

        return (
            <div className="date-selection row">
                <button onClick={this._nextDate}>Next</button>
                <p></p>
                <button onClick={this._previousDate}>Previous</button>
            </div>
        );
    }
}

export default DateSelection;