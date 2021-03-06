import React from 'react';
import { capitalize } from '../../../../common/utils';
import SystemConsoleEntry from './system-console-entry';
import SystemConsoleError from './system-console-error';
import SystemStore from '../../stores/system.store';
import SystemActions from '../../actions/system.actions';

let getConsoleState = (type) => ({
    entries: SystemStore.getLogEntries(type),
    errors: SystemStore.getErrors(type)
});

class SystemConsole extends React.Component {

    constructor(props) {
        super(props);
        this.state = getConsoleState(this.props.type);
        this._getTitle = this._getTitle.bind(this);
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        SystemStore.addChangeListener(this._onChange);
        SystemActions.getLogEntries(this.props.type);
    }

    componentWillUnmount() {
        SystemStore.removeChangeListener(this._onChange);
    }

    _getTitle() {
        let type = this.props.type;
        return capitalize(type);
    }

    _onChange() {
        this.setState(getConsoleState(this.props.type));
    }

    render() {

        let entries = this.state.entries.map((entry, index) => {
            return <SystemConsoleEntry key={index} entry={entry} />;
        });

        let errors = this.state.errors.map((error, index) => {
            return <SystemConsoleError key={index} error={error} />;
        });

        return (
            <div className="console">
                <h3 className="console-title">{this._getTitle()}</h3>
                <ul className="console-entries">
                    {errors}
                    {entries}
                </ul>
            </div>
        );
    }
}

export default SystemConsole;