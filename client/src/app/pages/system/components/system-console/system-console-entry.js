import React from 'react';
import { formatDate } from '../../../../common/utils';
import { capitalize } from '../../../../common/utils';

class SystemConsoleEntry extends React.Component {

    constructor(props) {
        super(props);
        this._getLogEntryInfo = this._getLogEntryInfo.bind(this);
        this._mapOperation    = this._mapOperation.bind(this);
    }
    
    _getLogEntryInfo(entry) {
        console.log('entry ->', entry);
        let entryType = capitalize(entry.data.type);
        let entryDate = formatDate(entry.data.date, 'ddd DD MMM YYYY');
        let entryOperation = this._mapOperation(entry.data.operation);
        let message = `${entryOperation} *${entryType}* for ${entryDate}`;
        let status = entry.data.status;
        return {
            message,
            status
        };
    }

    _mapOperation(operation) {
        switch (operation) {
            case 'insert':
                return 'Saving';
        }
    }

    render() {

        let logEntryDate = formatDate(this.props.entry.date, 'DD/MM/YYYY @ HH:mm');
        let {message, status} = this._getLogEntryInfo(this.props.entry);
        return (
            <li className="console-entry">
                <span>[{ logEntryDate }]</span>
                <span>:</span>
                <span>{ message }</span>
                <span>|</span>
                <span>{ status }</span>
            </li>
        );
    }
}

export default SystemConsoleEntry;