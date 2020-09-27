//用户添加
import React, { useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Breadcrumb, Button, DatePicker, TimePicker, Select, Space, message } from 'antd';
import { HomeOutlined, UserOutlined, UserAddOutlined } from '@ant-design/icons';
import { request } from '@/utils'


import '../css/User.scss';
const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 12,
    },
};

//添加数据触发的函数
const tianjia = async (values) => {
    console.log('values', values);
    let data = await request.post('/user', {
        ...values
    })
    if (data.code === 1) {
        return success();
    }
    error()
    console.log('123data', data);
};
const success = () => {
    message.success('添加成功');
};
const error = () => {
    message.error('添加失败');
};
function UserAdd() {
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
        <Form {...layout} name="nest-messages" className="addxuanr"
            onFinish={tianjia}>
            <Form.Item
                label="用户名"
                name="Name"
                rules={[
                    {
                        required: true,
                        message: '请添加用户名（真实姓名）',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            {/* 电话 */}
            <Form.Item
                label="电话号码"
                name="Phone"
                rules={[
                    {
                        required: true,
                        message: '请添加电话号码',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            {/* 年龄 */}
            <Form.Item
                name="Age"
                label="年龄"
                rules={[
                    {
                        type: 'number',
                        min: 0,
                        max: 99,
                    },
                ]}
            >
                <InputNumber />
            </Form.Item>
            {/* 部门 */}
            <Form.Item
                name="DepartmentID"
                label="部门"
            >
                <Select>
                    <Select.Option value="1">财务部</Select.Option>
                    <Select.Option value="2">后勤部</Select.Option>
                    <Select.Option value="3">公关部</Select.Option>
                    <Select.Option value="4">技术部</Select.Option>
                    <Select.Option value="5">运营部</Select.Option>
                    <Select.Option value="0">其他(领导)</Select.Option>
                </Select>
            </Form.Item>
            {/* 性别 */}
            <Form.Item
                name="Gender"
                label="性别"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Select
                    placeholder="请选择性别"
                    allowClear
                >
                    <Select.Option value="男">男</Select.Option>
                    <Select.Option value="女">女</Select.Option>
                    <Select.Option value="其他">其他</Select.Option>
                </Select>
            </Form.Item>
            {/* 是否被禁用 */}
            <Form.Item
                name="StateType"
                label="是否被禁用"
            >
                <Select
                    placeholder="请选择"
                    allowClear
                >
                    <Select.Option value="true">是</Select.Option>
                    <Select.Option value="false">否</Select.Option>
                </Select>
            </Form.Item>

            {/* 职位 */}
            <Form.Item
                name='RolesID'
                label="职位"
            >
                <Select>
                    <Select.Option value="admin">管理员</Select.Option>
                    <Select.Option value="jl">部门经理</Select.Option>
                    <Select.Option value="hr">HR</Select.Option>
                    <Select.Option value="putong">普通成员</Select.Option>
                </Select>


            </Form.Item>
            <Form.Item
                label="登录名"
                name="LoginID"
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
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    添加
                </Button>
            </Form.Item>
        </Form>
    </div>
}




export default UserAdd;