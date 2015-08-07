import React from 'react';
import NbaActions from '../actions/nbaActions';

class SystemPage extends React.Component {

    constructor() {
        super();
        this.state = {
            lefos: 0
        };
        this._onClick = this._onClick.bind(this);
    }

    _onClick() {
        NbaActions.saveEvents();
    }

    render() {
        return (
            <div>
                <h1>This is my system page</h1>
                <p>{this.state.lefos}</p>
                <button onClick={this._onClick}>Update Schedule Data</button>
            </div>
        );
    }
}

export default SystemPage;