import React from 'react';
import SystemCommand from './components/system-command/system-command';
import SystemConsole from './components/system-console/system-console';

class SystemPage extends React.Component {

    render() {

        return (
            <div className="system container">
                <div className="column">
                    <div className="row">
                        <div className="column">
                            <SystemConsole type="events"/>
                        </div>
                        <div className="column">
                            <SystemConsole type="boxscores"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <SystemCommand />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SystemPage;