import React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined,DatabaseOutlined, InsertRowAboveOutlined } from '@ant-design/icons';


function DepartmentAdd(){
    return <div>
        <Breadcrumb style={{marginBottom:'10px'}}>
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
    </div>
}




export default DepartmentAdd;