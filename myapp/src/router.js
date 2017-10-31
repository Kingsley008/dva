import React from 'react';
import { Router, Route, Switch,routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic';

/**
 * 按需加载 Component + model
 *
 * **/
const { ConnectedRouter } = routerRedux;

function RouterConfig({ history, app}) {

  const routes = [
    {
      path: '/index',
      component: () => import('./routes/IndexPage'),
    }, {
      path: '/count',
      models: () => [import('./models/example.js')],
      component: () => import('./components/Example'),
    }
    ];
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" render={() => (<Redirect to="/index" />)} />
        {
          routes.map(({ path, ...dynamics }, key) => (
            <Route key={key}
                   exact
                   path={path}
                   component={dynamic({
                     app,
                     ...dynamics,
                   })}
            />
          ))
        }
      </Switch>
    </ConnectedRouter>
  );
}

export default RouterConfig;
