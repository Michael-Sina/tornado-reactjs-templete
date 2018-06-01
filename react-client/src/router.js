import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Login from './routes/Login';
import HomeLayout from './routes/HomeLayout';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={HomeLayout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
