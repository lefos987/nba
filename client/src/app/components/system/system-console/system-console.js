import React from 'react';
import SystemConsoleEntry from './system-console-entry';

class SystemConsole extends React.Component {

    render() {

        return (
            <div className="row">
                <div className="console column">
                    <h3 className="console-title">Events</h3>
                    <ul className="console-entries">
                        <SystemConsoleEntry />
                    </ul>
                </div>
            </div>
        );
    }
}

export default SystemConsole;