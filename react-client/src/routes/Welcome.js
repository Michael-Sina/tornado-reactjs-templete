import React from 'react';
import style from './Welcome.less';
import { connect } from 'dva';

class Welcome extends React.Component {
  render () {
    return (
      <div className={style.content} />
    );
  }
}


export default connect()(Welcome);