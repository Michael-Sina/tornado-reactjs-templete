import React from 'react';
import { Icon, Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'dva/router';
import style from './Login.less';

const FormItem = Form.Item;

class Login extends React.Component {

  handleSubmit (e) {
    e.preventDefault();
 
    this.props.form.validateFields((err, values) => {
      if (!err) {
      }
    });
  }

  render () {
    const { getFieldDecorator } = this.props.form;
    return (

      <div className={style.container}>
        <div className={style.wrapper}>

          <div className={style.body}>
            <header className={style.header}>
              ログイン
            </header>

            <section className={style.form}>
              <Form onSubmit={this.handleSubmit}>
                <FormItem>
                  {getFieldDecorator('account', {
                    rules: [{
                        required: true,
                        message: 'メールアドレスを入力してください！',
                        type: 'string'
                    }]
                  })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="メールアドレス"/>
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{
                        required: true,
                        message: 'パスワードを入力してください！',
                        type: 'string'
                    }]
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="パスワード"/>
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                  })(
                    <Checkbox>自動ログインする</Checkbox>
                  )}
                  <a className={style.forgot} href=""> パスワードを忘れた場合 </a>
                    <Button className={style.btn} type="primary" htmlType="submit">
                      <Link to="/home">ログイン</Link>
                    </Button>
                  <a href="">新規取得</a>
                </FormItem>
              </Form>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

Login.PropTypes = {
};

Login = Form.create()(Login);
export default Login;