import React from 'react';
import { Form, Input, Button, AutoComplete } from 'antd';

const FormItem = Form.Item;
const AutoCompleteOption = AutoComplete.Option;

class BookEditor extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('パスワード同じではない!');
    } else {
      callback();
    }
  }
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }
  handleEmailSearch = (value) => {
    let autoCompleteResult;
    if (!value || value.indexOf('@') >= 0) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
    }
    this.setState({ autoCompleteResult });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const EmailOptions = autoCompleteResult.map((email) => {
      return <AutoCompleteOption key={email}>{email}</AutoCompleteOption>;
    });

    return (
      <Form onSubmit={this.handleSubmit}  style={{width: '100%', padding: '80px'}}>
        <FormItem
          {...formItemLayout}
          label={(
            <span>氏名</span>
          )}
        >
          {getFieldDecorator('name', {
            rules: [{ required: true, message: '氏名を入力してください!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="メールアドレス"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'メールアドレスを入力してください!',
            }],
          })(
            <AutoComplete
            dataSource={EmailOptions}
            onChange={this.handleEmailSearch}
            placeholder="メールアドレス"
            >
              <Input />
            </AutoComplete>   
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="パスワード"
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'パスワードを入力してください!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
              <Input type="password" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="パスワード確認"
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'パスワードを確認してください!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">保存</Button>
        </FormItem>
      </Form>
    );
  }
}

BookEditor.PropTypes = {
};

BookEditor = Form.create()(BookEditor);
export default BookEditor;