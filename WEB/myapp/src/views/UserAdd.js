import React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined,UserOutlined, UserAddOutlined } from '@ant-design/icons';


function UserAdd(){
    return <div>
        <Breadcrumb style={{marginBottom:'10px'}}>
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
            <span>用户列表</span>
            </Breadcrumb.Item>
        </Breadcrumb>
    </div>
}




export default UserAdd;