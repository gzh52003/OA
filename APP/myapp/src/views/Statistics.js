import React from 'react';
import { Tabs,Card } from 'antd-mobile';
import {
    TagOutlined,
    ClockCircleOutlined,
    DashboardOutlined
  } from '@ant-design/icons';
import "@/css/statistics.scss"
const tabs = [
    { title: '我的统计' },
    { title: '团队统计' }
  ];

function Statistics(){
    return (
        <div style={{borderTop:'1px solid #E6E6E6'}}>
            <Tabs tabs={tabs} animated={false} useOnPan={false}>
            <div>
                <Card id="business">
                    <Card.Header
                    title="出差"
                    thumb={<TagOutlined />}
                    />
                    <Card.Body>
                        <div className="content-tab">0</div>
                        <div className="content-tab">0</div>
                    </Card.Body>
                    <Card.Footer content="有效提交次数" extra="出差天数" />
                </Card> 
                <Card id="business">
                    <Card.Header
                    title="加班"
                    thumb={<ClockCircleOutlined />}
                    />
                    <Card.Body>
                        <div className="content-tab">1</div>
                        <div className="content-tab">1</div>
                    </Card.Body>
                    <Card.Footer content="有效提交次数" extra="时长" />
                </Card>
                <Card id="business">
                    <Card.Header
                    title="休假"
                    thumb={<DashboardOutlined />}
                    />
                    <Card.Body>
                        <div className="content-tab">0</div>
                        <div className="content-tab">0</div>
                    </Card.Body>
                    <Card.Footer content="有效提交次数" extra="Duration" />
                </Card>  
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                Content of second tab
            </div>
            
            </Tabs>
            
        </div>
    )
}
export default Statistics;