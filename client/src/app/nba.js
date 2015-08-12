import React from 'react';
import Router from 'react-router';

import Layout from './components/layout/layout';
import SchedulePage from './pages/schedule/schedule.page';
import SystemPage from './pages/system/system.page';

let DefaultRoute = Router.DefaultRoute;
let Route = Router.Route;

let routes = (
    <Route name="layout" path="/" handler={Layout}>
        <DefaultRoute name="schedule" handler={SchedulePage} />
        <Route name="system" handler={SystemPage} />
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});