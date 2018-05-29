import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import Login from './routes/Login';
import Products from './routes/Products';
import HomeLayout from './routes/HomeLayout';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={HomeLayout} />
        <Route path="/products" component={Products} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
