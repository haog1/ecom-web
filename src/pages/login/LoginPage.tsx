import { Button, Checkbox, Form, Input } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { useSelector } from 'redux/hooks';
import { requestLogin } from 'redux/slices/login';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const LoginPage: React.FC = props => {
  const loginPageData = useSelector(state => state.userLoginReducer);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (loginPageData.token) {
      history.push('/');
    }
  }, [loginPageData]);

  const onFinish = (values: any) => {
    dispatch(
      requestLogin({
        email: values.username,
        password: values.password,
      }),
    );
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Link to="/signup" children={'Singup'} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button
          type="primary"
          htmlType="submit"
          loading={loginPageData.loading}
        >
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};
