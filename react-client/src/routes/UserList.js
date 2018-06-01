import React from 'react';
import { connect } from 'dva';
import UserListTable from '../components/UserListTable';


const UserList = ({ dispatch, userlist }) => {
  function handleDelete(id) {
    dispatch({
      type: 'userlist/delete',
      payload: id,
    });
  }
  return (
    <UserListTable onDelete={handleDelete} users={userlist} />
  );
};

// export default Userlist 
export default connect(({ userlist }) => ({
  userlist,
}))(UserList);