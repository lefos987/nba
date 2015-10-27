import React from 'react';
import moment from 'moment';
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
        let nextDate = moment(this.state.selectedDate).add(1, 'days');
        this.setState({
            selectedDate: nextDate
        });
        ScheduleActions.setScheduleDate(nextDate);
    }

    _previousDate () {
        let previousDate = moment(this.state.selectedDate).subtract(1, 'days');
        this.setState({
            selectedDate: previousDate
        });
        ScheduleActions.setScheduleDate(previousDate);
    }

    render() {

        return (
            <div className="date-selection row">
                <button onClick={this._previousDate}>Previous</button>
                <p>{this.state.selectedDate.format('DD/MM/YYYY')}</p>
                <button onClick={this._nextDate}>Next</button>
            </div>
        );
    }
}

export default DateSelection;