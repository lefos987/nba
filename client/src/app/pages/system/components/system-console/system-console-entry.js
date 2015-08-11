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
        let entryType = capitalize(entry.data.type);
        let entryDate = formatDate(entry.data.date, 'ddd DD MMM YYYY');
        let entryOperation = this._mapOperation(entry.data.operation);

        let item = entry.data.item;
        let message = `${entryOperation} ${entryType} for ${entryDate}`;
        let status = entry.data.status;
        return {
            message,
            status,
            item
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
        let {message, status, item} = this._getLogEntryInfo(this.props.entry);
        return (
            <li className="console-entry">
                <p className="console-entry-main-info">
                    <span className="console-entry-date">[{ logEntryDate }]</span>
                    <span>:</span>
                    <span className="console-entry-message">{ message }</span>
                    <span>|</span>
                    <span>{ status }</span>
                </p>
                <p className="console-entry-secondary-info">DB Key: { item }</p>
            </li>
        );
    }
}

export default SystemConsoleEntry;