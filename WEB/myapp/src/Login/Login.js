import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { HomeOutlined, FileAddOutlined, ReadOutlined, AudioOutlined } from '@ant-design/icons';
import './Login.scss';
import { request } from '@/utils'
const { Search } = Input;
import { bindActionCreators } from 'redux';
import CryptoJS from 'crypto-js';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
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


function Login(props) {
    const onFinish = async (values) => {
        console.log('Success:', values);
        const user = values.Usename
        const Password = values.Password
        console.log('Success,username:', user, Password);
        console.log('this.props', props);

        let data = await request.get('/user/check/', {
            user,
            Password
        })
        console.log('data', data);
        let Name = data.data.Name
        let RolesID = data.data.RolesID

        console.log('Name=', Name, 'RolesID', RolesID);
        if (data.code === 1) {
            localStorage.setItem('token', JSON.stringify([Name, RolesID]));
            // console.log(123);
            props.history.replace('/Home');
        }
    };
    //表单验证失败后
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
                name="Usename"
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
                name="Password"
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
Login = withRouter(Login)

export default Login;