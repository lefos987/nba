import React from 'react';
import SystemConsoleEntry from './system-console-entry';
import SystemStore from '../../stores/system.store';
import SystemActions from '../../actions/system.actions';

let getConsoleState = () => ({
    entries: SystemStore.getLogEntries()
});

class SystemConsole extends React.Component {

    constructor(props) {
        super(props);
        this.state = getConsoleState(this.props.type);
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        SystemStore.addChangeListener(this._onChange);
        SystemActions.getLogEntries(this.props.type);
    }

    componentWillUnmount() {
        SystemStore.removeChangeListener(this._onChange);
    }
    
    _onChange() {
        this.setState(getConsoleState());
    }

    render() {

        let entries = this.state.entries.map((entry, index) => {
            return <SystemConsoleEntry key={index} entry={entry} />;
        });

        return (
            <div className="row">
                <div className="console column">
                    <h3 className="console-title">Events</h3>
                    <ul className="console-entries">
                        {entries}
                    </ul>
                </div>
            </div>
        );
    }
}

export default SystemConsole;