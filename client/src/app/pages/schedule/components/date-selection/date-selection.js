import React from 'react';
import moment from 'moment';
import { formatDate } from '../../../../common/utils';
import ScheduleStore from '../../stores/schedule.store';
import ScheduleActions from '../../actions/schedule.actions';

let getDateSelectionState = () => ({
    selectedDate: ScheduleStore.getSelectedDate()
});

class DateSelection extends React.Component {

    constructor() {
        super();
        this.state = getDateSelectionState();
        this._showNextDateButton = this._showNextDateButton.bind(this);
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

    _showNextDateButton() {
        let yesterday = moment().subtract(1, 'days');
        return (this.state.selectedDate.isBefore(yesterday, 'day'));
    }

    render() {

        return (
            <div className="date-selection row">

                <div className="column previous">
                    <button onClick={this._previousDate}>Previous</button>
                </div>

                <div className="column selected-date">
                    <p>{formatDate(this.state.selectedDate, 'dddd, DD MMM YYYY', true)}</p>
                </div>

                <div className="column next">
                    {this._showNextDateButton() ?
                        <button onClick={this._nextDate}>Next</button> :
                        null }
                </div>

            </div>
        );
    }
}

export default DateSelection;