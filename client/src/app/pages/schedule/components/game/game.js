import React from 'react';

class Game extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let game = this.props.game;

        return (
            <li className="game row">
                <div className="team column">{game.awayTeam}</div>
                <div className="team column">{game.homeTeam}</div>
                <div className="rating column">{game.rating}</div>
            </li>
        );
    }
}

export default Game;