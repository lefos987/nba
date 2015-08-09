import React from 'react';

import SystemActions from '../../actions/system/system.actions';
import SystemStore from '../../stores/system/system.store';

let getStatusState = () => SystemStore.getSystemStatus();

class SystemPage extends React.Component {

    constructor() {
        super();

        this.state = {
            status: getStatusState(),
            showBoxscoresLoader: false,
            showEventsLoader: false
        };

        this._updateBoxscores = this._updateBoxscores.bind(this);
        this._updateEvents    = this._updateEvents.bind(this);
        this._onChange        = this._onChange.bind(this);
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

    _updateBoxscores() {
        this.setState({ showBoxscoresLoader: true });
        SystemActions.saveBoxscores();
    }

    _updateEvents() {
        this.setState({ showEventsLoader: true });
        SystemActions.saveEvents();
    }

    render() {
        
        let boxscores = (this.state.status.boxscores) ?
            this.state.status.boxscores.map((boxscore) => {
                for (let key  in boxscore) {
                    return (<p key={key}>{key + ': ' + boxscore[key]}</p>);
                }
            }): null;
        
        let events = (this.state.status.events) ?
            this.state.status.events.map((event) => {
                for (let key  in this.state.status.events) {
                    return (<p key={key}>{key + ': ' + event[key]}</p>);
                }
            }) : null;

        return (
            <div>
                <h1>This is my system page</h1>
                { this.state.showEventsLoader ?
                    <div>
                        <p>Saving events ... </p>
                        {events}
                    </div>
                : null }

                { this.state.showBoxscoresLoader ?
                    <div>
                        <p>Saving boxscores ... </p>
                        {boxscores}
                    </div>
                    : null }

                <button onClick={this._updateEvents}>Update Events Data</button>
                <button onClick={this._updateBoxscores}>Update Boxscore Data</button>
            </div>
        );
    }
}

export default SystemPage;