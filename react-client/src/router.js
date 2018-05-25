import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Login from './routes/Login';
import UserList from './routes/UserList';
import UserEditor from './routes/UserEditor';
import BookList from './routes/BookList';
import BookEditor from './routes/BookEditor';
import Products from './routes/Products';
import Home from './routes/Home';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/user/list" exact component={UserList} />
        <Route path="/user/add" exact component={UserEditor} />
        <Route path="/book/list" exact component={BookList} />
        <Route path="/book/add" exact component={BookEditor} />
        <Route path="/products" exact component={Products} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
