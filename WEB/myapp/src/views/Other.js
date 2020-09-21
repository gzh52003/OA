import React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined,FileAddOutlined, TagsOutlined } from '@ant-design/icons';


function Other(){
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
            <TagsOutlined />
            <span>其他</span>
            </Breadcrumb.Item>
        </Breadcrumb>
    </div>
}





export default Other;