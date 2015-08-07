import React from 'react';

import Router from 'react-router';

import HomePage from './components/homepage';
import SystemPage from './components/systempage';

let DefaultRoute = Router.DefaultRoute;
let Link = Router.Link;
let Route = Router.Route;
let RouteHandler = Router.RouteHandler;

let App = React.createClass({

    render() {
        return (
            <div>
                <header>
                    <ul>
                        <li><Link to="home">Home</Link></li>
                        <li><Link to="system">System</Link></li>
                    </ul>
                </header>

                {/* this is the important part */}
                <RouteHandler/>
            </div>
        );

    }
});

let routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="system" handler={SystemPage} />
        <DefaultRoute name="home" handler={HomePage} />
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});