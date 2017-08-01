import React from 'react';
import { message, Table, Button, Popconfirm } from 'antd';
import HomeLayout from '../layouts/HomeLayout';
import { get, del } from '../utils/request';

class UserListPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      userList: []
    };
  }

  componentWillMount () {
    var jwt = localStorage.getItem('jwt'); 
    fetch('http://localhost:32704/api/auth/admin',{
      method: 'GET',
      mode:'cors',
      headers: {
        'authorization': "bearer "+jwt
      }
      }).then(res => {
        return res.json()
      }).then(json => {
        this.setState({
          userList: json.data
        });
      })
  }


  handleEdit (user) {
    this.context.router.push('/user/edit/' + user.id);
  }


  handleDel (user) {
      del('http://localhost:32704/user/' + user.id)
        .then(res => {
          this.setState({
            userList: this.state.bookList.filter(item => item.id !== user.id)
          });
          alert('删除用户成功');
        })
        .catch(err => {
          console.error(err);
          alert('删除用户失败');
        });
  }

  render () {
    const {userList} = this.state;

    const columns = [
      {
        title: 'アカワントId',
        dataIndex: 'id'
      },
      {
        title: '氏名',
        dataIndex: 'name'
      },
      {
        title: 'メールアドレス',
        dataIndex: 'email'
      },
      {
        title: '操作',
        render: (text, record) => {
          return (
            <Button.Group type="ghost">
              <Button size="small" onClick={() => this.handleEdit(record)}>編集</Button>
              <Popconfirm title="削除しますか？" onConfirm={() => this.handleDel(record)}>
                <Button size="small">削除</Button>
              </Popconfirm>
            </Button.Group>
          );
        }
      }
    ];

    return (
      <HomeLayout title="アカワント一覧">
        <Table columns={columns} dataSource={userList} rowKey={row => row.id}/>
      </HomeLayout>
    );
  }
}

UserListPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default UserListPage;
