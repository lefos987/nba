import React from 'react';
import { formatDate } from '../../../../common/utils';

class SystemConsoleError extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let error = this.props.error;
        let logEntryDate = formatDate(error.body.date, 'DD/MM/YYYY @ HH:mm');
        let {message, status} = error;

        return (
            <li className="console-entry error">
                <p className="console-entry-main-info">
                    <span className="console-entry-date">[{ logEntryDate }]</span>
                    <span>:</span>
                    <span className="console-entry-message">{ message }</span>
                    <span>|</span>
                    <span>{ status }</span>
                </p>
            </li>
        );
    }
}

export default SystemConsoleError;