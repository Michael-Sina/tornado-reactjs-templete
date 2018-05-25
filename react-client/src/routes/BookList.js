import React from 'react';
import { Table, Button, Popconfirm, Icon, Input, Col } from 'antd';


const InputGroup = Input.Group;


class BookList extends React.Component {
  
  render () {
    const products = [{ 
      id: 1,
      publisher: '講談社',
      author: '佐木飛朗斗・所十三',
      title: '疾風伝説・特攻の拓'
    },{ 
      id: 2,
      publisher: '講談社',
      author: '藤沢とおる',
      title: '湘南純愛組'
    },{ 
      id: 3,
      publisher: '小学館',
      author: '西森博之',
      title: '今日から俺は!!'
    },{ 
      id: 4,
      publisher: '少年畫報社',
      author: '田中宏',
      title: 'BADBOYS'
    },{ 
      id: 5,
      publisher: '集英社',
      author: '森田まさのり',
      title: 'ろくでなしBLUES'
    },{ 
      id: 6,
      publisher: '白泉社',
      author: '森恒二',
      title: 'ホーリーランド'
    }];
    const columns = [{
        title: '出版社',
        dataIndex: 'publisher',
        align: 'center'
      },{
        title: '作者',
        dataIndex: 'author',
        align: 'center'
      },{
        title: 'タイトル',
        dataIndex: 'title',
        align: 'center'
      },{        
        title: '操作',
        align: 'center',
        render: (text, record) => {
          return (
            <Button.Group type="ghost">
              <Button onClick={() => this.handleEdit(record)}>
                <Icon type="edit"/>
              </Button>
              <Popconfirm title="削除？" onConfirm={() => this.handleDel(record)}>
                <Button>
                  <Icon type="delete" />
                </Button>
              </Popconfirm>
            </Button.Group>
          );
        }
    }];
    return (
      <div style= {{padding: '80px'}}>
        <div style={{padding: '20px', width: '80%'}}>
          <InputGroup size="large">
            <Col span={5}>
              <Input placeholder="出版社" />
            </Col>
            <Col span={5}>
              <Input placeholder="作者" />
            </Col>
            <Col span={5}>
              <Input placeholder="タイトル" />
            </Col>
            <Button type="primary" size="large">検索</Button>
          </InputGroup>      
        </div>
        <div style={{ padding: '20px' }}>
          <div style={{ padding: '10px', float: 'right' }}>
            <Button type="primary" size="large">書籍追加</Button>
          </div>
          <div>
            <Table
            dataSource={products}
            columns={columns}
            bordered
            />
          </div>
        </div>
      </div>
    );
  }
};

BookList.PropTypes = {
};

export default BookList;