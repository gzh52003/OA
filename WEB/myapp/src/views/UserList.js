//用户列表
import React, { useState, useEffect } from 'react';
import { Breadcrumb, Input, Button, Table, Radio, Divider, InputNumber, Popconfirm, Form } from 'antd';
import { HomeOutlined, UserOutlined, SolutionOutlined, AudioOutlined } from '@ant-design/icons';
import '../css/User.scss';
import { request } from '@/utils'
const { Search } = Input;
//状态 数据源
const originData = [];

const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{
                        margin: 0,
                    }}
                    rules={[
                        {
                            required: true,
                            message: `请填写${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                    children
                )}
        </td>
    );
};
const UserList = () => {

    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');

    const isEditing = (record) => record.key === editingKey;
    //修改
    const edit = (record) => {
        form.setFieldsValue({
            LoginID: '',
            Name: '',
            RolesID: '',
            DepartmentID: '',
            ...record,
        });
        console.log('edit', record);

        setEditingKey(record.key);
        // console.log('edit');
    };

    const remove = (row) => {
        let id = row._id;
        // console.log(id);row

        (async function () {
            //拿到数据
            let data = await request.remove('/user/' + id)

            console.log("执行改变数据", data);
            if (data !== 0) {
                console.log(234);
                let { data: udata } = await request.get('/user')
                udata.forEach((item, idx) => {
                    item.key = idx + 1
                })
                setData(udata)
            }
        })()

    };

    const cancel = () => {
        setEditingKey('');
    };


    // -----------------------------------------------------------
    //渲染数据
    //获取数据

    useEffect(function () {

        (async function () {
            //拿到数据
            let { data: udata } = await request.get('/user')
            console.log("执行改变数据", udata);

            udata.forEach((item, idx) => {
                item.key = idx + 1
            })
            setData(udata)
        })()

    }, [])


    const mhsearch = (value) => {

        console.log('valuevalue', value);

    };

    // ----------------------------------------------------------------
    //保存
    const save = async (key) => {
        try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex((item) => key === item.key);

            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, { ...item, ...row });
                setData(newData);
                setEditingKey('');
                let id = newData[key - 1]._id
                console.log('newData', newData[key - 1], id);
                let { data } = await request.put('/user/' + id,
                    {
                        ...newData[key - 1]
                    })
                console.log('savedata', data);

            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const columns = [
        {
            title: '#',
            dataIndex: 'key',
            width: '10%',
            editable: true,
        },
        {
            title: '登录名',
            dataIndex: 'LoginID',
            width: '20%',
            editable: true,
        },
        {
            title: '用户名',
            dataIndex: 'Name',
            width: '25%',
            editable: true,
        },
        {
            title: '职位',
            dataIndex: 'RolesID',
            width: '15%',
            editable: true,
        },
        {
            title: '部门',
            dataIndex: 'DepartmentID',
            width: '20%',
            editable: true,
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_, record) => {
                const editable = isEditing(record);
                return (editable ? (
                    <span>
                        <a
                            // href="javascript:;"
                            onClick={() => save(record.key)}
                            style={{
                                marginRight: 8,
                            }}
                        >
                            保存
              </a>
                        <Popconfirm title="确定取消吗?" onConfirm={cancel}>
                            <a>取消</a>
                        </Popconfirm>
                    </span>
                ) : (
                        <p>
                            <a disabled={editingKey !== ''} onClick={() => edit(record)}>
                                修改
                            </a>
                            <a onClick={() => remove(record)} className="rem"> 删除</a>
                        </p>

                    ))

            },
        },
    ];
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex,
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    //输出
    return (
        <div>
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
                    <SolutionOutlined />
                    <span>用户列表</span>
                </Breadcrumb.Item>
            </Breadcrumb>
            {/* 搜索 */}

            <Search placeholder="请输入关键字" enterButton className="shuru" onClick={() => mhsearch(value)} />
            {/* 渲染的表格 */}
            <Form form={form} component={false} className="ulxr">
                <Table
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    bordered
                    dataSource={data}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{
                        onChange: cancel,
                    }}
                />
            </Form>
        </div >
    );

}
    ;


export default UserList;