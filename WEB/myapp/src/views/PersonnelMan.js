import React from 'react';
import { Breadcrumb,Divider,Row,Col, } from 'antd';
import { HomeOutlined,FileAddOutlined,DashboardOutlined,
    FormOutlined,
    AuditOutlined,
    FileDoneOutlined,
    SnippetsOutlined,
    CalendarOutlined,
    CarOutlined,
    HistoryOutlined,
    NodeExpandOutlined,
    UserAddOutlined,
    UserDeleteOutlined,
    UserSwitchOutlined,
    EditOutlined
 } from '@ant-design/icons';

const style = { padding: '8px',textAlign:'center' };
const com = { fontSize:'3rem',color:'#0092ff'}

function PersonnelMan(){
    const list = [
        { title: '假勤管理',content:[
            {
                icon: <FormOutlined  style={com}/>,
                text: `补卡申请`
            },
            {
                icon: <SnippetsOutlined  style={com}/>,
                text: `请假`
            },
            {
                icon: <CalendarOutlined  style={com}/>,
                text: `外出`
            },
            {
                icon: <CarOutlined  style={com}/>,
                text: `出差`
            },
            {
                icon: <HistoryOutlined  style={com}/>,
                text: `加班`
            },
            {
                icon: <NodeExpandOutlined  style={com}/>,
                text: `换班`
            }
        ] },
        { title: '人事管理',content:[
            {
                icon: <UserAddOutlined  style={com}/>,
                text: `入职审批`
            },
            {
                icon: <UserSwitchOutlined  style={com}/>,
                text: `转正`
            },
            {
                icon: <UserDeleteOutlined  style={com}/>,
                text: `离职`
            }
        ] },
        { title: '其他',content:[
            {
                icon: <EditOutlined  style={com}/>,
                text: `绩效自评`
            }
        ] }
      ];
    return <div>
            <Breadcrumb style={{marginBottom:'10px'}}>
                <Breadcrumb.Item href="">
                <HomeOutlined />
                <span>我的首页</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                <FileAddOutlined />
                <span>发起事件</span>
                </Breadcrumb.Item>
            </Breadcrumb>

        {
            list.map((item)=>{
                return (
                    <div key={item.title}>
                        <Divider orientation="left">{item.title}</Divider>
                        <Row gutter={[16, 24]}>
                        {
                            item.content.map(it=>(
                                <Col key={it.text} className="gutter-row" span={4}>
                                    <div style={style} className="personnelMan">
                                        {it.icon}
                                        <h4>{it.text}</h4>
                                    </div>
                                </Col>
                            ))
                        }
                        </Row>

                    </div>
                )
            })
        }
    </div>
}




export default PersonnelMan;