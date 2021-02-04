import { Button, Form, Input } from 'antd';
import React from 'react';
import axios from 'axios';
import { API } from 'utils/api';
import { Link, useHistory } from 'react-router-dom';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const SignUpPage = () => {
  const history = useHistory();

  const onFinish = async (values: any) => {
    try {
      history.push('/login');
      await axios.post(`${API.backendApiUrl}/auth/register`, {
        email: values.username,
        password: values.password,
        confirmPassword: values.passwordConfirm,
      });
      history.push('/login');
    } catch (err) {
      alert('Failed to sign up');
    }
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

      <Form.Item
        label="PasswordConfirm"
        name="passwordConfirm"
        rules={[
          { required: true, message: 'Please input your password again!' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('Passowrds do not match');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Link to="/login" children={'Login'} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Signup
        </Button>
      </Form.Item>
    </Form>
  );
};
