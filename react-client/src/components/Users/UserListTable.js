import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Popconfirm, Icon, Input, Col } from 'antd';

const InputGroup = Input.Group;

const UserListTable = ({ onDelete, users }) => {
    const columns = [{
        title: 'アカワントId',
        dataIndex: 'id',
        align: 'center'
      },{
        title: '氏名',
        dataIndex: 'name',
        align: 'center'
      },{
        title: 'メールアドレス',
        dataIndex: 'email',
        align: 'center'
      },{
        title: '管理者',
        dataIndex: 'is_admin',
        align: 'center',
        render: (text) => {
          if (text){
            return(
              <Icon type="check-circle" style={{fontSize: 16, color: '#1890ff'}}/>
            )
          }; 
        }
      },{        
        title: '操作',
        align: 'center',
        render: (text, record) => {
          return (
            <Button.Group type="ghost">
              <Button onClick={() => this.handleEdit(record)}>
                <Icon type="edit"/>
              </Button>
              <Popconfirm title="削除する？" onConfirm={() => onDelete(record.id)}>
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
                <Input placeholder="アカワントId" />
              </Col>
              <Col span={5}>
                <Input placeholder="氏名" />
              </Col>
              <Col span={5}>
                <Input placeholder="メールアドレス" />
              </Col>
              <Button type="primary" size="large">検索</Button>
            </InputGroup>      
          </div>
          <div style={{ padding: '20px' }}>
            <div style={{ padding: '10px', float: 'right' }}>
              <Button type="primary" size="large">アカワント追加</Button>
            </div>
            <div>
              <Table
                dataSource={users}
                columns={columns}
                bordered
              />
            </div>
          </div>
        </div>
    );
};

UserListTable.proptypes = {
    onDelete: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
};

export default UserListTable;

