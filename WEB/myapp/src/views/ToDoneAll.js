import React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined,ScheduleOutlined, FileOutlined } from '@ant-design/icons';


function ToDoneAll(){
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
            <Breadcrumb.Item href="/#ToDoneAll">
            <FileOutlined />
            <span>已办事项总数</span>
            </Breadcrumb.Item>
        </Breadcrumb>
    </div>
}

export default ToDoneAll;