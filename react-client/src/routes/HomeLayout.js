import React from 'react';
import { Link } from 'dva/router';
import { Layout, Menu, Icon } from 'antd';
import style from './HomeLayout.less';
import { connect } from 'dva';
import { Route, Switch } from 'dva/router';

import Welcome from './Welcome';
import UserList from './UserList';
import UserEditor from './UserEditor';
import BookList from './BookList';
import BookEditor from './BookEditor';

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <SubMenu
              key="home"
              title={<span><Icon type="home" /><span>ホーム</span></span>}
            >
              <Menu.Item key="home">
                <Link to="/home">ホーム</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="user"
              title={<span><Icon type="user" /><span>アカウント管理</span></span>}
            >
              <Menu.Item key="user-list">
                <Link to="/user/list">アカウント一覧</Link>
              </Menu.Item>
              <Menu.Item key="user-add">
                <Link to="/user/add">アカウント追加</Link>
              </Menu.Item>
            </SubMenu>

            <SubMenu
              key="book"
              title={<span><Icon type="book" /><span>書籍管理</span></span>}
            >
              <Menu.Item key="book-list">
                <Link to="/book/list">書籍一覧</Link>
              </Menu.Item>
              <Menu.Item key="book-add">
                <Link to="/book/add">書籍追加</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
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