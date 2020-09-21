import React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined,ScheduleOutlined, ContactsOutlined } from '@ant-design/icons';


function VacDays(){
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
            <Breadcrumb.Item href="/#VacDays">
            <ContactsOutlined />
            <span>本月休假天数</span>
            </Breadcrumb.Item>
        </Breadcrumb>
    </div>
}




export default VacDays;