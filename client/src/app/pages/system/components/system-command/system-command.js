import React from 'react';
import SystemActions from '../../actions/system.actions';
import SystemStore from '../../stores/system.store';

let ENTER_KEY_CODE = 13;
let getResultState = () => SystemStore.getResult();

class SystemCommand extends React.Component {

    constructor() {
        super();
        this._onChange  = this._onChange.bind(this);
        this._onKeyDown = this._onKeyDown.bind(this);
        this.state = {
            command: '',
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
            command: (e) ? e.target.value : '',
            result: getResultState()
        });
    }
    
    _onKeyDown(e) {
        if (e.keyCode === ENTER_KEY_CODE) {
            let command = e.target.value;
            switch(command) {
                case 'update events':
                    SystemActions.saveEvents();
                    break;
                case 'update boxscores':
                    SystemActions.saveBoxscores();
                    break;
                default:
                    this.setState({ result: 'Error! This command is not supported!'});
            }
        }
    }

    render() {
        return (
            <div className="system-command column">
                <input type="text" className="system-command-input"
                       val={this.state.command}
                       onKeyDown={this._onKeyDown}
                       onChange={this._onChange}
                    />
                <p>{this.state.result}</p>
            </div>
        );
    }
}

export default SystemCommand;