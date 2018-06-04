import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Popconfirm, Icon, Input, Col } from 'antd';

const InputGroup = Input.Group;

const BookListTable = ({ onDelete, books }) => {
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
            dataSource={books}
            columns={columns}
            bordered
            />
          </div>
        </div>
      </div>
    );
};

BookListTable.proptypes = {
    onDelete: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
};

export default BookListTable;