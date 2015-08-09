import React from 'react';

import SystemActions from '../../actions/system/system.actions';
import SystemStore from '../../stores/system/system.store';
import SystemConsole from './system-console/system-console';

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

        return (
            <div className="container">
                <SystemConsole />
            </div>
        );
    }
}

export default SystemPage;