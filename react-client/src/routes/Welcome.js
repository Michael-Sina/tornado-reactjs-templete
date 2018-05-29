import React from 'react';
import style from './Welcome.less';

class Welcome extends React.Component {
  render () {
    return (
      <div className={style.content} />
    );
  }
}

export default Welcome;