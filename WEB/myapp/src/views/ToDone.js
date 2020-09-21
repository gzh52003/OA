import React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined, FileDoneOutlined } from '@ant-design/icons';


function ToDone(){
    return <div>
        <Breadcrumb style={{marginBottom:'10px'}}>
            <Breadcrumb.Item href="">
            <HomeOutlined />
            <span>我的首页</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/#ToDone">
            <FileDoneOutlined />
            <span>已办事件</span>
            </Breadcrumb.Item>
        </Breadcrumb>
    </div>
}

export default ToDone;