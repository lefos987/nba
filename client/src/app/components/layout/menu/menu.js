import React from 'react';
import MenuItem from './menu-item';

class Menu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let menuItems = this.props.menuItems.map((menuItem) => {
            let {key, to, label} = menuItem;
            return <MenuItem key={key} to={to} label={label} />;
        });

        return (
            <ul className="menu">
                {menuItems}
            </ul>
        );
    }
}

export default Menu;