import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { HomeOutlined, FileAddOutlined, ReadOutlined, AudioOutlined } from '@ant-design/icons';
import './Login.scss';

const { Search } = Input;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 8,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 8,
    },
};


function Login() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return <div className="header">
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="用户名"
                name="用户名"
                rules={[
                    {
                        required: true,
                        message: '请输入用户名',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="密码"
                name="密码"
                rules={[
                    {
                        required: true,
                        message: '请输入密码',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Search
                    className="sea"
                    placeholder="请输入验证码"
                    enterButton="验证码"
                    size="middle"
                />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    登录
        </Button>
            </Form.Item>
        </Form>
    </div >
}




export default Login;