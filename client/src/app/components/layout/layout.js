import React from 'react';
import Router from 'react-router';
import Header from './header';

let RouteHandler = Router.RouteHandler;

class Layout extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <RouteHandler/>
            </div>
        );

    }
}

export default Layout;
