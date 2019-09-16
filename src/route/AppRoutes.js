import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import createHashHistory from 'history/createHashHistory';
import ResumeBuilder from '../builder/ResumeBuilder';

export const history = createHashHistory();

const AppRoutes = () => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route path="/" component={ResumeBuilder} />
        </Switch>
    </ConnectedRouter>
);

export default AppRoutes;
