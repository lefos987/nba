import React from 'react';

import NbaActions from '../actions/nbaActions';
import SystemStore from '../stores/systemStore';

let getStatusState = () => SystemStore.getSystemStatus();

class SystemPage extends React.Component {

    constructor() {
        super();
        this.state = {
            status: getStatusState(),
            showEventsLoader: false
        };
        this._onClick = this._onClick.bind(this);
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        SystemStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        SystemStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState({
            status: getStatusState()
        });
    }

    _onClick() {
        this.setState({ showEventsLoader: true });
        NbaActions.saveEvents();
    }

    render() {
        return (
            <div>
                <h1>This is my system page</h1>
                { this.state.showEventsLoader ? <p>Saving events ... {this.state.status.events}</p> : null }
                <button onClick={this._onClick}>Update Schedule Data</button>
            </div>
        );
    }
}

export default SystemPage;