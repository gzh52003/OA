import React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined,FileAddOutlined, ReadOutlined } from '@ant-design/icons';


function AdminMan(){
    return <div>
        <Breadcrumb style={{marginBottom:'10px'}}>
            <Breadcrumb.Item href="">
            <HomeOutlined />
            <span>我的首页</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
            <FileAddOutlined />
            <span>发起事件</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/#ToDoListAll">
            <ReadOutlined />
            <span>行政管理</span>
            </Breadcrumb.Item>
        </Breadcrumb>
    </div>
}


export default AdminMan;