import React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined,ScheduleOutlined, FileOutlined } from '@ant-design/icons';


function ToDoneAllYes(){
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
            <Breadcrumb.Item href="/#ToDoneAllYes">
            <FileOutlined />
            <span>昨日已办总数</span>
            </Breadcrumb.Item>
        </Breadcrumb>
    </div>
}




export default ToDoneAllYes;