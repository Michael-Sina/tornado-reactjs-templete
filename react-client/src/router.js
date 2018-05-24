import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Login from './routes/Login';
import Products from './routes/Products';
import Home from './routes/Home';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/products" exact component={Products} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
