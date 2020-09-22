import React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined,DatabaseOutlined, TableOutlined } from '@ant-design/icons';


function DepartmentList(){
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
            <TableOutlined />
            <span>部门列表</span>
            </Breadcrumb.Item>
        </Breadcrumb>
    </div>
}


export default DepartmentList;