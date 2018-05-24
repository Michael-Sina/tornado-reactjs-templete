import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Form, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

const LoginFormInput = ({ onDelete, products }) => {
  const columns = [{
    field: 'account',
    required: true,
    message: 'メールアドレスを入力してください！',
    type: 'string',
    input_type: "text",
    placeholder: "メールアドレス"

  },{
    field: 'password',
    required: true,
    message: 'パスワードを入力してください！',
    type: 'string'

  }];
  return(
    <FormItem>
      { 
        getFieldDecorator('account', {
          rules: [{
            required: true,
            message: 'メールアドレスを入力してください！',
            type: 'string'
          }]
        })
      (
        <Input type="text" addonBefore={<Icon type="user"/>} placeholder="メールアドレス"/>
      )}
    </FormItem>
};

LoginFormInput.proptypes = {
};

export default LoginFormInput;