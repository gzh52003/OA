import React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined,FileAddOutlined, ProfileOutlined } from '@ant-design/icons';


function vacMan(){
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
            <ProfileOutlined />
            <span>假勤管理</span>
            </Breadcrumb.Item>
        </Breadcrumb>
    </div>
}




export default vacMan;