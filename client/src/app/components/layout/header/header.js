import React from 'react';

import Logo from './../logo/logo';
import Menu from './../menu/menu';

class Header extends React.Component {

    constructor() {
        super();
        this.state = {

            logo: {
                src: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png?transparent=true',
                alt: 'NBA_LOGO'
            },
            menuItems: [
                { key: 1, to: 'schedule', label: 'Schedule' },
                { key: 2, to: 'system', label: 'System' }
            ]
        };
    }

    render() {
        let {logo, menuItems} = this.state;
        return (
            <header className="header">
                <Logo logo={logo}/>
                <Menu menuItems={menuItems} />
            </header>
        );
    }
}

export default Header;