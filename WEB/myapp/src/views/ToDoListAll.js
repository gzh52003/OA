import React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined,ScheduleOutlined, FieldTimeOutlined } from '@ant-design/icons';


function ToDoListAll(){
    return <div>
        <Breadcrumb style={{marginBottom:'10px'}}>
            <Breadcrumb.Item href="">
            <HomeOutlined />
            <span>我的首页</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
            <ScheduleOutlined />
            <span>待办事件</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/#ToDoListAll">
            <FieldTimeOutlined />
            <span>待办事项总数</span>
            </Breadcrumb.Item>
        </Breadcrumb>
    </div>
}




export default ToDoListAll;