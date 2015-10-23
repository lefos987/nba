import React from 'react';
import ScheduleStore from './stores/schedule.store';
import ScheduleActions from './actions/schedule.actions';

let getScheduleState = () => ({
    schedule: ScheduleStore.getSchedule()
});

class SchedulePage extends React.Component {

    constructor() {
        super();
        this.state = getScheduleState();
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        ScheduleStore.addChangeListener(this._onChange);
        ScheduleActions.getSchedule('20141225');
    }

    componentWillUnmount() {
        ScheduleStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState(getScheduleState());
    }

    render() {

        let scheduleItems = (this.state.schedule) ? this.state.schedule.map((scheduleItem) => {
            return <li key={scheduleItem.id}>
                    <span>{scheduleItem.awayTeam} @ {scheduleItem.homeTeam}</span>
                    <span>{scheduleItem.rating}</span>
                </li>;
        }) : [];

        return (
            <div>
                <h2>This is the schedule page</h2>
                <ul>
                    {scheduleItems}
                </ul>
            </div>
        );
    }
}

export default SchedulePage;