import React from 'react';
import moment from 'moment';

class SystemConsoleEntry extends React.Component {

    constructor(props) {
        super(props);
        this._formatDate      = this._formatDate.bind(this);
        this._getLogEntryInfo = this._getLogEntryInfo.bind(this);
    }

    _formatDate(date) {
        return moment(date).format('DD/MM/YYYY @ HH:mm');
    }

    _getLogEntryInfo(data) {
        return {
            info: Object.keys(data),
            status: data[Object.keys(data)]
        };
    }

    render() {
        let date = this._formatDate(this.props.entry.date);
        let {info, status} = this._getLogEntryInfo(this.props.entry.data);
        return (
            <li className="console-entry">
                <span>[{ date }]</span>
                <span>:</span>
                <span>{info}</span>
                <span>|</span>
                <span>{status}</span>
            </li>
        );
    }
}

export default SystemConsoleEntry;