import React from 'react';
import HomeLayout from '../layouts/HomeLayout';
import UserEditor from '../components/UserEditor';

class UserEditPage extends React.Component {
  render () {
    return (
      <HomeLayout title="添加用户">
        <UserEditor/>
      </HomeLayout>
    );
  }
}

export default UserEditPage;
