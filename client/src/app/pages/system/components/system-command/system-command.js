import React from 'react';
import Spinner from 'react-spinkit';
import SystemActions from '../../actions/system.actions';
import SystemStore from '../../stores/system.store';

let ENTER_KEY_CODE = 13;
let getResultState = () => SystemStore.getResult();
let getCommandState = () => SystemStore.getCommand();

class SystemCommand extends React.Component {

    constructor() {
        super();
        this._onChange  = this._onChange.bind(this);
        this._onKeyDown = this._onKeyDown.bind(this);
        this.state = {
            command: getCommandState(),
            loading: false,
            result: getResultState()
        };
    }

    componentDidMount() {
        SystemStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        SystemStore.removeChangeListener(this._onChange);
    }

    _onChange(e) {

        this.setState({
            command: (e) ? e.target.value : getCommandState(),
            result: getResultState(),
            loading: false
        });

    }
    
    _onKeyDown(e) {
        if (e.keyCode === ENTER_KEY_CODE) {
            let command = e.target.value.toLowerCase();
            switch(command) {
                case 'update events':
                    this.setState({ loading: true });
                    SystemActions.saveEvents();
                    break;
                case 'update boxscores':
                    this.setState({ loading: true });
                    SystemActions.saveBoxscores();
                    break;
                default:
                    this.setState({ result: {
                        success: false,
                        error: 'Error! This command is not supported!'
                    }});
            }
        }
    }

    render() {

        return (
            <div className="system-command column">
                <div className="row system-command-input-wrapper">
                    <input type="text"
                           className="system-command-input"
                           value={this.state.command}
                           onKeyDown={this._onKeyDown}
                           onChange={this._onChange}
                        />
                    { this.state.loading ? <Spinner spinnerName="double-bounce" noFadeIn/> : null }
                </div>
                <div className="system-command-input-wrapper">
                    {!this.state.result.success ?
                    <p className="system-command-input-error">{this.state.result.error}</p>
                        : null }
                </div>
            </div>
        );
    }
}

export default SystemCommand;