import React from 'react';

import DateSelection from './components/date-selection/date-selection';
import GameList from './components/game-list/game-list';

class SchedulePage extends React.Component {

    render() {

        return (
            <div>
                <h2>This is the schedule page</h2>
                <DateSelection />
                <GameList />
            </div>
        );
    }
}

export default SchedulePage;