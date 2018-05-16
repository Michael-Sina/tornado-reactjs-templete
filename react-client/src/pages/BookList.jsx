import React from 'react';
import { Input, Col, message, Table, Button, Popconfirm } from 'antd';
import { get, del } from '../utils/request';
import HomeLayout from '../layouts/HomeLayout';
import style from '../styles/book-list.less';

const InputGroup = Input.Group;

class BookListPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      bookList: []
    };
  }

  componentWillMount () {
    var jwt = localStorage.getItem('jwt'); 
    fetch('http://localhost:32704/api/auth/user',{
      method: 'GET',
      mode:'cors',
      headers: {
        'authorization': "bearer "+jwt
      }
      }).then(res => {
        return res.json()
      }).then(json => {
        this.setState({
          bookList: json.data
        });
      })
  }

  handleAdd () {
     this.context.router.push('/book/add');
  }


  handleEdit (book) {
    this.context.router.push('/book/edit/' + book.id);
  }

  handleDel (book) {
      del('http://localhost:32704/book/' + book.id)
        .then(res => {
          this.setState({
            bookList: this.state.bookList.filter(item => item.id !== book.id)
          });
          alert('書籍削除を完了しました！');
        })
        .catch(err => {
          console.error(err);
          alert('書籍削除を失敗しました！');
        });
  }

  render () {
    const {bookList} = this.state ;

    const columns = [
      {
        title: '出版社',
        dataIndex: 'publisher',
        key:'publisher'
      },
      {
        title: '作者',
        dataIndex: 'author',
        key:'author'
      },
      {
        title: 'タイトル',
        dataIndex: 'title',
        key:'title'
      },
      {
        title: '操作',
        width: 110,
        render: (text, record) => (
          <Button.Group type="ghost">
            <Button size="small" onClick={() => this.handleEdit(record)}>編集</Button>
            <Popconfirm title="削除しますか？" okText="はい" cancelText="キャンセル" onConfirm={() => this.handleDel(record)}>
              <Button size="small">削除</Button>
            </Popconfirm>
          </Button.Group>
        )
      }
    ];

    return (
      <HomeLayout title="書籍一覧" >
        <InputGroup size="large">
          <Col span="4">
            <Input placeholder="出版社" />
          </Col>
          <Col span="4">
            <Input placeholder="作者" />
          </Col>
          <Col span="4">
            <Input placeholder="タイトル" />
          </Col>       
          <Col span="4">
          <Button  type="primary" size="large">検索</Button>
          </Col>  
        </InputGroup>       
        <br />
        <span className={style.addbook}>
          {/* <Button className={style.addbtn} type="primary" size="large" onClick={}>書籍追加</Button> */}
        </span>
        <br />
        <Table columns={columns} dataSource={bookList} bordered rowKey={row => row.id} />
      </HomeLayout>
    );
  }
}

BookListPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default BookListPage;