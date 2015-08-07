import React from 'react';
import Router from 'react-router';

import Layout from './components/layout/layout';
import HomePage from './components/homepage';
import SystemPage from './components/systempage';

let DefaultRoute = Router.DefaultRoute;
let Route = Router.Route;

let routes = (
    <Route name="layout" path="/" handler={Layout}>
        <DefaultRoute name="home" handler={HomePage} />
        <Route name="system" handler={SystemPage} />
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});