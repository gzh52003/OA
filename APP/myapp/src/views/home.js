import React from 'react'
import { withRouter } from 'react-router-dom';
import { Grid, NavBar, Icon, TabBar,List, WhiteSpace,Card } from 'antd-mobile';
import {
  UserOutlined,
  TeamOutlined,
  ReadFilled,
  HomeOutlined,
  FormOutlined,
  AuditOutlined,
  FileDoneOutlined,
  AppstoreAddOutlined,
  CheckCircleTwoTone,
  BarChartOutlined
} from '@ant-design/icons';

const Item = List.Item;
const Brief = Item.Brief;
const menu = [
  {
    icon: <FormOutlined />,
    text: `待办`,
  },{
    icon: <AuditOutlined />,
    text: `已办`,
  },{
    icon: <FileDoneOutlined />,
    text: `OA审批`,
  },{
    icon: <AppstoreAddOutlined />,
    text: `更多`,
  }
]
const data = Array.from(menu).map((_val, i) => ({
  icon:_val.icon,
  text:_val.text
}));
function goto({props},path){
        // console.log("12345",this.props);
        props.history.push(path);
    }
function Home(props){
    console.log("props",props);
    // render(){
        return (
            <div>
                <div className="silder">欢迎进入移动门户</div>
                {/* 宫格导航 */}
                <Grid onClick={()=>goto(props,'todolist')} data={data} hasLine={false} itemStyle={{color:'#FA8258'}}/>
                <div>
                    <WhiteSpace size="lg" />
                    <Card full>
                    <Card.Header
                        title="我的待办"
                        thumb={<FormOutlined /> }
                        style={{background:'#FAFAFA'}}
                    />
                    <Card.Body>
                    {/* <List className="my-list"> </List>*/}
                        <Item arrow="horizontal" align="top" thumb={<CheckCircleTwoTone twoToneColor="#52c41a" />} multipleLine  onClick={() => {console.log('打开待办')}}>
                        Title <Brief>subtitle</Brief>
                        </Item>
                        <Item arrow="horizontal" align="top" thumb={<CheckCircleTwoTone twoToneColor="#52c41a" />} multipleLine  onClick={() => {console.log('打开待办')}}>
                        Title <Brief>subtitle</Brief>
                        </Item>
                    </Card.Body>
                    <Card.Footer extra={<div style={{height:'1.5rem',lineHeight: '1.5rem',color:'#FA8258'}}>查看更多<span style={{color:'#FF0000'}}>(1)</span></div>}>
                    </Card.Footer>
                    </Card>
                </div>  
            </div>
            
            
        )
    // }
    
}
export default Home