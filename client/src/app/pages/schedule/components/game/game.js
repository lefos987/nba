import React from 'react';

class Game extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let game = this.props.game;

        return (
            <li>
                <span>{game.awayTeam} @ {game.homeTeam}</span>
                <span>{game.rating}</span>
            </li>
        );
    }
}

export default Game;