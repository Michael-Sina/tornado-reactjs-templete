import React from 'react';
import { Link } from 'dva/router';
import { Menu, Icon } from 'antd';


const SubMenu = Menu.SubMenu;

const SiderMenu = () => {
    return(
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
    );
};

export default SiderMenu;