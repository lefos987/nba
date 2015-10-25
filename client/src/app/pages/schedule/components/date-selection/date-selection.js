import React from 'react';

class DateSelection extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        //let {src, alt} = this.props.logo;

        return (
            <div className="date-selection row">
                <div>Today</div>
                <div>Yesterday</div>
            </div>
        );
    }
}

export default DateSelection;