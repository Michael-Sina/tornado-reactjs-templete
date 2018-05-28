import React from 'react';
import { Router, Route, Switch, IndexRoute } from 'dva/router';
import Login from './routes/Login';
import Welcome from './routes/Welcome';
import UserList from './routes/UserList';
import UserEditor from './routes/UserEditor';
import BookList from './routes/BookList';
import BookEditor from './routes/BookEditor';
import Products from './routes/Products';
import HomeLayout from './routes/HomeLayout';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/products" component={Products} />
        <Route path="/welcome" component={Welcome} />      
        <Route path="/" component={HomeLayout}>
            <IndexRoute component={Welcome} />
            <Route path="user/list" component={UserList} />
            <Route path="user/add" component={UserEditor} />
            <Route path="book/list" component={BookList} />
            <Route path="book/add" component={BookEditor} />
        </Route>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
