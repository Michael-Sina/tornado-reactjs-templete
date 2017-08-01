import React from 'react';
import { Form, Input, InputNumber, Select, Button, message } from 'antd';
import request from '../utils/request';

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

class UserEditor extends React.Component {
  componentDidMount () {
    const {editTarget, form} = this.props;
    if (editTarget) {
      form.setFieldsValue(editTarget);
    }
  }

  handleSubmit (e) {
    e.preventDefault();

    const {form, editTarget} = this.props;

    form.validateFields((err, values) => {
      if (!err) {
        let editType = '追加';
        let apiUrl = 'http://localhost:32704/user';
        let method = 'post';
        if (editTarget) {
          editType = '編集';
          apiUrl += '/' + editTarget.id;
          method = 'put';
        }

        request(method, apiUrl, values)
          .then((res) => {
            if (res.id) {
              message.success( 'ユーザーを'+ editType +'しました');
              this.context.router.push('/user/list');
            } else {
              message.error('ユーザーの'+ editType + 'を失败しました');
            }
          })
          .catch((err) => console.error(err));

      } else {
        message.warn(err);
      }
    });
  }

  render () {
    const {form} = this.props;
    const {getFieldDecorator} = form;
    return (
      <div style={{width: '400px'}}>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <FormItem label="氏名：" {...formLayout}>
            {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: 'ユーザーの氏名を入力してください'
                },
                {
                  pattern: /^.{1,10}$/,
                  message: '１０以内の文字を入力してください'
                }
              ]
            })(
              <Input type="text"/>
            )}
          </FormItem>
          <FormItem label="メールアドレス：" {...formLayout}>
            {getFieldDecorator('email', {
              rules: [
                {
                  required: true,
                  message: 'メールアドレスを入力してください！'
                },
                {
                  pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: '正しいメールアドレスを入力してください！'
                }
              ]
            })(
              <Input type="text"/>
            )}
          </FormItem>
          <FormItem label="パスワード：" {...formLayout}>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'パスワードを入力してください！',
                  type: 'string'
                }
              ]
            })(
              <Input type="password"/>
            )}
          </FormItem>
          <FormItem wrapperCol={{...formLayout.wrapperCol, offset: formLayout.labelCol.span}}>
            <Button type="primary" htmlType="submit">保存</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

UserEditor.contextTypes = {
  router: React.PropTypes.object.isRequired
};

UserEditor = Form.create()(UserEditor);

export default UserEditor;
