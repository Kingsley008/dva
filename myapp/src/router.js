import React from 'react';
import { Router, Route, Switch,routerRedux} from 'dva/router';
import dynamic from 'dva/dynamic';
import App from './components/app';

/**
 * 按需加载 Component + model
 *   const Users = dynamic({
    app,
    models: () => [
      import('./models/users'),
    ],
    component: () => import('./routes/Users'),
  });
  dynamic(option) option = { app:  , models:()=>{import()}, component:()=> import()}
 * **/
const { ConnectedRouter } = routerRedux;

function RouterConfig({ history, app}) {

  const routes = [
    {
      path: '/',
      component: () => import('./routes/IndexPage'),
    }, {
      path: '/count',
      models: () => [import('./models/example.js')],
      component: () => import('./components/Example'),
    },{
      path:'/todo',
      models:() => [import('./models/todos.js')],
      component: () => import('./components/todos.js')
    },
    {
      path:'/products',
      models:() => [import('./models/products.js')],
      component: () => import('./routes/products.js')
    }
    ];
  return (
    <ConnectedRouter history={history}>
      <App>
      <Switch>
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
    </App>
    </ConnectedRouter>
  );
}

export default RouterConfig;
