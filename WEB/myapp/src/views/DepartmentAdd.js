//部门成员添加
import React from 'react';
import { Breadcrumb, Form, Input, Button, Checkbox, Select, InputNumber } from 'antd';
import { HomeOutlined, DatabaseOutlined, InsertRowAboveOutlined } from '@ant-design/icons';
// import '../css/Department.scss';
const { Option } = Select;
const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

function DepartmentAdd() {
    return <div>
        <Breadcrumb style={{ marginBottom: '10px' }}>
            <Breadcrumb.Item href="">
                <HomeOutlined />
                <span>我的首页</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
                <DatabaseOutlined />
                <span>部门管理</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/#ToDoListAll">
                <InsertRowAboveOutlined />
                <span>部门添加</span>
            </Breadcrumb.Item>
        </Breadcrumb>
        {/* 数据添加 */}
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            style={{ paddingTop: '40px' }}

        >
            <Form.Item
                label="姓名"
                name="username"
                rules={[
                    {
                        required: true,
                        message: '请输入姓名',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="年龄"
                name="Age"
                rules={[
                    {
                        type: 'number',
                        min: 18,
                        max: 99,
                        message: '请输入18-99之内的数',
                    },
                ]}
            >
                <InputNumber />
            </Form.Item>

            <Form.Item
                label="性别"
                name="Gender"
            >
                <Select
                    placeholder="请选择性别"
                    allowClear
                >
                    <Option value="male">男</Option>
                    <Option value="female">女</Option>
                    <Option value="other">其他</Option>
                </Select>
            </Form.Item>
            {/* 部门 */}
            <Form.Item
                name={['user', '部门']}
                label="部门"
                rules={[
                    {
                        required: true,
                        message: '请选择部门',
                    },
                ]}
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
                rules={[
                    {
                        required: true,
                        message: '请选择职位',
                    },
                ]}
            >
                <Select>
                    <Select.Option value="zhuguan">主管</Select.Option>
                    <Select.Option value="jingli">部门经理</Select.Option>
                    <Select.Option value="hr">HR</Select.Option>
                    <Select.Option value="putong">普通成员</Select.Option>
                </Select>


            </Form.Item>
            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    添加
                </Button>
            </Form.Item>
        </Form>

    </div >
}




export default DepartmentAdd;