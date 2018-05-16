import React from 'react';
import { Icon, Form, Input, Button, message } from 'antd';
import { post } from '../utils/request';
import style from '../styles/login-page.less';

const FormItem = Form.Item;

class AdminPage extends React.Component {
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
              this.context.router.push('/user/list');
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
            管理者ログイン
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
                  <Input type="text" addonBefore={<Icon type="user"/>}/>
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
                  <Input type="password" addonBefore={<Icon type="lock"/>}/>
                )}
              </FormItem>

              <Button className={style.btn} type="primary" htmlType="submit">ログイン</Button>
            </Form>

          </section>

        </div>

      </div>
    );
  }
}

AdminPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

AdminPage = Form.create()(AdminPage);

export default AdminPage;