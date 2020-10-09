
import React, { useState, useEffect } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';
import { request } from '@/utils'
import '../css/User.scss';
/* for (let i = 0; i < 100; i++) {
    originData.push({
        key: i.toString(),
        name: `Edrward ${i}`,
        age: 32,
        gender: '男',
        position: `London Park no. ${i}`,
    });
}
 */
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
                            message: `请填写 ${title}!`,
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
//函数开始
const DepartReaet = ({ k }) => {
    console.log('kkkk', k);
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');

    const isEditing = (record) => record.key === editingKey;


    //渲染数据

    useEffect(function () {

        (async function () {
            let DepartmentID = k
            //拿到数据
            let { data: udata } = await request.get('/user/Department', { DepartmentID })
            console.log("执行改变数据", udata);

            udata.forEach((item, idx) => {
                item.key = idx + 1
            })
            setData(udata)
        })()

    }, [])



    //修改
    const edit = (record) => {
        form.setFieldsValue({
            Name: '',
            Age: '',
            Gender: '',
            RolesID: '',
            ...record,
        });
        setEditingKey(record.key);
    };
    //点击删除
    const Dremove = (row) => {
        let id = row._id
        console.log(3, id);
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
            title: '姓名',
            dataIndex: 'Name',
            width: '25%',
            editable: true,
        },
        {
            title: '年龄',
            dataIndex: 'Age',
            width: '15%',
            editable: true,
        },
        {
            title: '性别',
            dataIndex: 'Gender',
            width: '15%',
            editable: true,
        },
        {
            title: '职务（职位）',
            dataIndex: 'RolesID',
            width: '20%',
            editable: true,
        },
        {
            title: '操作',
            dataIndex: 'operation',
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
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
                            <a onClick={() => Dremove(record)} className="rem">
                                删除
                            </a>

                        </p>

                    );
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
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record)
            }),
        };
    });
    return (
        <Form form={form} component={false}>
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
    );
};







export default DepartReaet;