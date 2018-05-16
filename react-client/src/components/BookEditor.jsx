import React from 'react';
import { Input, InputNumber, Form, Select, Button, message } from 'antd';
import AutoComplete from '../components/AutoComplete';
import request, { get } from '../utils/request';

const Option = AutoComplete.Option;
const FormItem = Form.Item;

const formLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  }
};

class BookEditor extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      recommendUsers: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    const {editTarget, form} = this.props;
    if (editTarget) {
      form.setFieldsValues(editTarget);
    }
  }

  handleSubmit (e) {
    e.preventDefault();

    const {form, editTarget} = this.props;
    
    form.validateFields((err, values) => {
      if (err) {
        message.warn(err);
        return;
      }

      let editType = '追加';
      let apiUrl = 'http://localhost:32704/book';
      let method = 'post';
      if (editTarget) {
        editType = '編集';
        apiUrl += '/' + editTarget.id;
        method = 'put';
      }

      request(method, apiUrl, values)
        .then((res) => {
          if (res.id) {
            message.success('書籍'+ editType +'しました');
            this.context.router.push('/book/list');
          } else {
            message.error(editType + '失败');
          }
        })
        .catch((err) => console.error(err));
    });
  }


  getRecommendUsers (partialUserId) {
    get('http://localhost:32704/user?id_like=' + partialUserId)
      .then((res) => {
        if (res.length === 1 && res[0].id === partialUserId) {
          return;
        }

        this.setState({
          recommendUsers: res.map((user) => {
            return {
              text: `${user.id}（${user.name}）`,
              value: user.id
            };
          })
        });
      });
  }

  timer = 0;
  handleOwnerIdChange (value) {
    this.props.onFormChange('owner_id', value);
    this.setState({recommendUsers: []});

    if (this.timer) {
      clearTimeout(this.timer);
    }

    if (value) {
      this.timer = setTimeout(() => {
        this.getRecommendUsers(value);
        this.timer = 0;
      }, 200);
    }
  }

  render () {
    const {recommendUsers} = this.state;
    const {form} = this.props;
    const {getFieldDecorator} = form;
    return (
      <Form onSubmit={this.handleSubmit} style={{width: '400px'}}>
        <FormItem label="タイトル：" {...formLayout}>
          {getFieldDecorator('title', {
            rules: [
              {
                required: true,
                message: '本のタイトルを入力してください！'
              }
            ]
          })(<Input type="text"/>)}
        </FormItem>
        <FormItem label="作者：" {...formLayout}>
          {getFieldDecorator('author', {
            rules: [
              {
                required: true,
                message: '作者の名前を入力してください！',
                type: 'number'
              }
            ]
          })(<Input type="text"/>)}
        </FormItem>
        <FormItem label="出版社：" {...formLayout}>
          {getFieldDecorator('publisher', {
            rules: [
              {
                required: true,
                message: '出版社の宛名を入力してください！'
              }
            ]
          })(<Input type="text"/>)}
        </FormItem>
         <FormItem label="フォーマット：" {...formLayout}>
            {getFieldDecorator('format', {
              rules: [
                {
                  required: true,
                  message: '書籍のフォーマットを選択してください！'
                }
              ]
            })(
              <Select placeholder="選択してください！">
                <Select.Option value="paper">紙</Select.Option>
                <Select.Option value="electronic">電子書籍</Select.Option>
              </Select>
            )}
          </FormItem>
          <FormItem label="感想：" {...formLayout}>
          {getFieldDecorator('impressions', {
            rules: [
              {
                required: false,
              }
            ]
          })(<Input type="textarea" rows={8} />)}
        </FormItem>
        <FormItem wrapperCol={{span: formLayout.wrapperCol.span, offset: formLayout.labelCol.span}}>
          <Button type="primary" htmlType="submit">保存</Button>
        </FormItem>
      </Form>
    );
  }
}


BookEditor.contextTypes = {
  router: React.PropTypes.object.isRequired
};

BookEditor = Form.create()(BookEditor);

export default BookEditor;
