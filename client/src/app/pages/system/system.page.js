import React from 'react';
import SystemConsole from './components/system-console/system-console';

class SystemPage extends React.Component {

    render() {

        return (
            <div className="container">
                <SystemConsole type="events"/>
                <SystemConsole type="boxscores"/>
            </div>
        );
    }
}

export default SystemPage;