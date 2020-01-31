import React from 'react';
import { Provider, ReactReduxContext } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './ClientStore';
import { ClientPaths } from '../shared/Enums';
import { ClientHome } from './views/ClientHome/ClientHome';

const routesData = [
  { path: String(ClientPaths.ROOT), component: ClientHome, exact: true },
];

const createRoutes = () => (
  <Provider store={configureStore({})} context={ReactReduxContext}>
    <ConnectedRouter history={history} context={ReactReduxContext}>
      <Switch>
        {routesData.map((route, index) => <Route path={route.path} component={route.component} exact={route.exact} key={index}/>)}
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export const ClientRoutes = () => (createRoutes());
