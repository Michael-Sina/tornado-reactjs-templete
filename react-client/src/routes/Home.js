import React from 'react';
import { Link } from 'dva/router';
import { Menu, Icon } from 'antd';
import style from './Home.less';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

class Home extends React.Component {
  render () {
    // const {children} = this.props;
    return (
      <div>
        <header className={style.header}>
          <Link to="/">ダッシュボード</Link>
        </header>

        <main className={style.main}>
          <div className={style.menu}>
            <Menu mode="inline" theme="dark" style={{width: '240px'}}>
              <SubMenu key="user" title={<span><Icon type="user"/><span>アカウント管理</span></span>}>
                <MenuItem key="user-list">
                  <Link to="/user/list">アカウント一覧</Link>
                </MenuItem>
                <MenuItem key="user-add">
                  <Link to="/user/add">アカウント追加</Link>
                </MenuItem>
              </SubMenu>

              <SubMenu key="book" title={<span><Icon type="book"/><span>書籍管理</span></span>}>
                <MenuItem key="book-list">
                  <Link to="/book/list">書籍管理</Link>
                </MenuItem>
                <MenuItem key="book-add">
                  <Link to="/book/add">書籍追加</Link>
                </MenuItem>
              </SubMenu>
            </Menu>
          </div>

          <div className={style.content}>
            Welcome
          </div>
        </main>
      </div>
    );
  }
}

export default Home;