//用户添加
import React, { useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Breadcrumb, Button, DatePicker, TimePicker, Select, Space } from 'antd';
import { HomeOutlined, UserOutlined, UserAddOutlined } from '@ant-design/icons';



import '../css/User.scss';
const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 12,
    },
};


/* const validateMessages = {
    required: '请填写数据',
    /*      types: {
            email: '${label} is not validate email!',
            number: '${label} is not a validate number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        }, */
// }; 

function UserAdd() {
    const onFinish = (values) => {
        console.log(values);
    };

    return <div>
        <Breadcrumb style={{ marginBottom: '10px' }}>
            <Breadcrumb.Item href="">
                <HomeOutlined />
                <span>我的首页</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
                <UserOutlined />
                <span>用户管理</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/#ToDoListAll">
                <UserAddOutlined />
                <span>用户添加</span>
            </Breadcrumb.Item>
        </Breadcrumb>

        {/* 渲染数据 */}
        <Form {...layout} name="nest-messages" onFinish={onFinish} className="addxuanr">
            <Form.Item
                label="登录名"
                name="Loginname"
                rules={[
                    {
                        required: true,
                        message: '请设置登录名',
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
                        message: '请设置登录密码',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                label="用户名"
                name="Username"
                rules={[
                    {
                        required: true,
                        message: '请添加用户名（真实姓名）',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            {/* 部门 */}
            <Form.Item
                name={['user', '部门']}
                label="部门"
            >

                <Select>
                    <Select.Option value="caiwu">财务部</Select.Option>
                    <Select.Option value="houqin">后勤部</Select.Option>
                    <Select.Option value="gongguan">公关部</Select.Option>
                    <Select.Option value="jishu">技术部</Select.Option>
                    <Select.Option value="yunying">运营部</Select.Option>
                    <Select.Option value="qita">其他</Select.Option>
                </Select>

            </Form.Item>
            {/* 职位 */}
            <Form.Item
                name={['user', '职位']}
                label="职位"
            >
                <Select>
                    <Select.Option value="zhuguan">主管</Select.Option>
                    <Select.Option value="jingli">部门经理</Select.Option>
                    <Select.Option value="hr">HR</Select.Option>
                    <Select.Option value="putong">普通成员</Select.Option>
                </Select>


            </Form.Item>


            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    添加
                </Button>
            </Form.Item>
        </Form>
    </div>
}




export default UserAdd;