import React from 'react';
import Game from '../game/game';
import ScheduleStore from '../../stores/schedule.store';
import ScheduleActions from '../../actions/schedule.actions';


let getScheduleState = () => ({
    schedule: ScheduleStore.getSchedule(),
    selectedDate: ScheduleStore.getSelectedDate()
});

class GameList extends React.Component {

    constructor() {
        super();
        this.state = getScheduleState();
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        ScheduleStore.addChangeListener(this._onChange);
        ScheduleActions.getSchedule(this.state.selectedDate);
    }

    componentWillUnmount() {
        ScheduleStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState(getScheduleState());
    }

    render() {

        let gameListItems = (this.state.schedule) ? this.state.schedule.map((gameListItem) => {
            return <Game key={gameListItem.id} game={gameListItem}/>;
        }) : [];

        return (
            <div>
                <ul>
                    {gameListItems}
                </ul>
            </div>
        );
    }
}

export default GameList;