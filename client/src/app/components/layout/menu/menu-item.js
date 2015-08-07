import React from 'react';
import Router from 'react-router';

let Link = Router.Link;

class MenuItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let {to, label} = this.props;

        return (
            <li className="menu-item"><Link to={to}>{label}</Link></li>
        );
    }
}

export default MenuItem;