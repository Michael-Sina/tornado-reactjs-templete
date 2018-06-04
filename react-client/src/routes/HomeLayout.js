import React from 'react';
import { Layout, Icon } from 'antd';
import style from './HomeLayout.less';
import { connect } from 'dva';
import { Route, Switch } from 'dva/router';

import Welcome from './Welcome';
import UserList from './UserList';
import UserEditor from './UserEditor';
import BookList from './BookList';
import BookEditor from './BookEditor';
import SiderMenu from '../components/HomeLayout/SiderMenu';

const { Header, Sider, Content } = Layout;

class Home extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render () {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className={style.logo} />
          <SiderMenu />
        </Sider>

        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={style.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content className={style.content}>
            <Switch>
              <Route path="/home" exact component={Welcome} />
              <Route path="/user/list" component={UserList} />
              <Route path="/user/add" component={UserEditor} />
              <Route path="/book/list" component={BookList} />
              <Route path="/book/add" component={BookEditor} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default connect()(Home);