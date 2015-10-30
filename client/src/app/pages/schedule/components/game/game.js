import React from 'react';

class Game extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let game = this.props.game;

        return (
            <li className="game row">
                <div className="column">
                    <div className="team row">
                        <img className="team-logo" src={game.awayTeam.logo} alt=""/>
                        <p>{game.awayTeam.name}</p>
                    </div>
                </div>
                <div className="column">
                    <div className="team row">
                        <p>{game.homeTeam.name}</p>
                        <img className="team-logo" src={game.homeTeam.logo} alt=""/>
                    </div>
                </div>
                <div className="rating column">{game.rating}</div>
            </li>
        );
    }
}

export default Game;