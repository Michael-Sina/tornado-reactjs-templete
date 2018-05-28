import React from 'react';
import { Form, Input, Button, Select } from 'antd';

const FormItem = Form.Item;
const SelectOption = Select.Option;
const { TextArea } = Input;

class BookEditor extends React.Component {
  state = {
    confirmDirty: false,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
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

    return (
      <Form onSubmit={this.handleSubmit}  style={{width: '100%', padding: '80px'}}>
        <FormItem
          {...formItemLayout}
          label={(
            <span>タイトル</span>
          )}
        >
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'タイトルを入力してください!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>出版社</span>
          )}
        >
          {getFieldDecorator('publisher', {
            rules: [{ required: true, message: '出版社を入力してください!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>作者</span>
          )}
        >
          {getFieldDecorator('author', {
            rules: [{ required: true, message: '作者を入力してください!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="フォーマット"
        >
          {getFieldDecorator('format', {
            rules: [{
              required: true, message: 'フォーマットを選択してください!',
            }],
          })(
            <Select
              placeholder="フォーマットを選択する"
              onChange={this.handleProvinceChange}>
              <SelectOption value="紙">紙</SelectOption>
              <SelectOption value="電子書籍">電子書籍</SelectOption>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>感想</span>
          )}
        >
          {getFieldDecorator('thought', {
            rules: [{ required: true, message: '感想を入力してください!', whitespace: true }],
          })(
            <TextArea rows={15} />
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