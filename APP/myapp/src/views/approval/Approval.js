import React from 'react';
// import { Tabs, WhiteSpace,Card } from 'antd-mobile';
import { Grid, NavBar, Icon, TabBar, List, WhiteSpace, Card } from 'antd-mobile';
import {
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
import "@/css/approval.scss"
const menu = [{
    icon: <FormOutlined path='/list/todo' />,
    text: `待处理`

}, {
    icon: <AuditOutlined path='/list/done' />,
    text: `已处理`

}, {
    icon: <FileDoneOutlined path='approval' />,
    text: `已发起`
}]
const list = [
    { title: '假勤管理',content:[
        {
            icon: <FormOutlined path='todolist' />,
            text: `补卡申请`
        },
        {
            icon: <SnippetsOutlined path='Holidays' />,
            text: `请假`
        },
        {
            icon: <CalendarOutlined path='todolist' />,
            text: `外出`
        },
        {
            icon: <CarOutlined path='todolist' />,
            text: `出差`
        },
        {
            icon: <HistoryOutlined path='todolist' />,
            text: `加班`
        },
        {
            icon: <NodeExpandOutlined path='todolist' />,
            text: `换班`
        }
    ] },
    { title: '人事管理',content:[
        {
            icon: <UserAddOutlined path='todolist' />,
            text: `入职审批`
        },
        {
            icon: <UserSwitchOutlined path='todolist' />,
            text: `转正`
        },
        {
            icon: <UserDeleteOutlined path='todolist' />,
            text: `离职`
        }
    ] },
    { title: '其他',content:[
        {
            icon: <EditOutlined path='performan' />,
            text: `绩效自评`
        }
    ] }
  ];
class Approval extends React.Component{
    goto(el){
        this.props.history.push(el.icon.props.path)
    }
    render(){
        return (
            <>
            <NavBar
              mode="light"
              icon={<Icon type="left" />}
              onLeftClick={() => {this.props.history.goBack();console.log("---------",history,this)}}
              rightContent={[
                // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                <Icon key="1" type="ellipsis" />,
              ]}
            >OA审批</NavBar>
            <div style={{borderTop:'1px solid #E6E6E6',marginBottom:'2rem',marginTop:'3rem',background:'#FAFAFA'}}>
                <Grid onClick={(el)=>this.goto(el)} data={menu} hasLine={false} columnNum="3" itemStyle={{color:'#FA8258'}}/>
                <div>
                    {list.map((item) => {
                        return <Card key={item.title}>
                                    <Card.Header
                                    title={item.title}
                                    />
                                    <Card.Body>
                                        <Grid onClick={(el)=>this.goto(el)} data={item.content} hasLine={false} itemStyle={{color:'#FA8258'}}/>
                                    </Card.Body>
                                </Card>
                    })}

                    {/* <Card id="business">
                        <Card.Header
                        title="人事管理"
                        />
                        <Card.Body>
                            
                        </Card.Body>
                    </Card>
                    <Card id="business">
                        <Card.Header
                        title="其他"
                        />
                        <Card.Body>
                            
                        </Card.Body>
                    </Card>   */}
                </div>



            </div>
            </>
        )
    }

}
export default Approval;