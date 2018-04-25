import React from 'react';
import { Link } from 'react-router';
import { Menu, Icon, Modal, Button } from 'antd';
import style from '../styles/home-layout.less';

class HomeLayout extends React.Component {

  render () {
    const {title, children} = this.props;
    return (
      <div>
        <header className={style.header}>
          <span className={style.title}>
            {title}
          </span>
          <span className={style.logout}>
            <Button type="primary" size='large' >ログアウト</Button>
          </span>
        </header>

        <main className={style.main}>
          <div className={style.content}>
            {children}
          </div>
        </main>
      </div>
    );
  }
}

export default HomeLayout;
