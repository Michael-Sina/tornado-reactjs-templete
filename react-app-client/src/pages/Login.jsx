import React from 'react';
import { Icon, Form, Input, Button, Checkbox, message } from 'antd';
import { post } from '../utils/request';
import style from '../styles/login-page.less';

const FormItem = Form.Item;

class LoginPage extends React.Component {
  constructor () {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
 
    this.props.form.validateFields((err, values) => {
      if (!err) {
        fetch('http://localhost:32704/api/auth/userlogin',{
          method: 'POST',
          mode:'cors',
          headers: {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          },
          body: JSON.stringify(values)
        }).then(res => {
          return res.json();
        }).then(json => {
            if (json.token != null) {
              localStorage.setItem('jwt',json.token);
              message.info('ログインしました');
              this.context.router.push('/book/list');
            } else if (json.data == null){
              message.info('ログイン失败しました，メールアドレスまたはパスワードを確認してください！');
            }
        });
      }
    });
  }

  render () {
    const {form} = this.props;
    const {getFieldDecorator} = form;
    return (
      <div className={style.wrapper}>

        <div className={style.body}>
          <header className={style.header}>
            ユーザーログイン
          </header>

          <section className={style.form}>

            <Form onSubmit={this.handleSubmit}>
              <FormItem>
                {getFieldDecorator('account', {
                  rules: [
                    {
                      required: true,
                      message: 'メールアドレスを入力してください！',
                      type: 'string'
                    }
                  ]
                })(
                  <Input type="text" addonBefore={<Icon type="user"/>} placeholder="メールアドレス"/>
                )}
              </FormItem>

              <FormItem>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: 'パスワードを入力してください！',
                      type: 'string'
                    }
                  ]
                })(
                  <Input type="password" addonBefore={<Icon type="lock"/>} placeholder="パスワード"/>
                )}
              </FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>自動ログインする</Checkbox>
                 )}

                <a className={style.forgot} href=""> パスワードを忘れた場合 </a>

                <Button className={style.btn} type="primary" htmlType="submit">ログイン</Button>

                <a href="">新規取得</a>

              </Form>

          </section>

        </div>

      </div>
    );
  }
}

LoginPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

LoginPage = Form.create()(LoginPage);

export default LoginPage;