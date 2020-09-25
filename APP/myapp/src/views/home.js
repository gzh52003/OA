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
  EditTwoTone,
  BarChartOutlined
} from '@ant-design/icons';

const Item = List.Item;
const Brief = Item.Brief;
const menu = [
  {
    icon: <FormOutlined path='/list/todo' />,
    text: `待处理`
    
  },{
    icon: <AuditOutlined path='/list/done'/>,
    text: `已处理`
    
  },{
    icon: <FileDoneOutlined path='approval'/>,
    text: `OA审批`
  },{
    icon: <AppstoreAddOutlined path='more'/>,
    text: `更多`
    
  }
]
const data = Array.from(menu).map((_val, i) => ({
  icon:_val.icon,
  text:_val.text
}));
function goto({props},el){
        console.log("12345",el);
        props.history.push(el.icon.props.path);
}
function Home(props){
    console.log("props",props);
    // render(){
        return (
            <div>
                <div className="silder">欢迎进入移动门户</div>
                {/* 宫格导航 */}
                <Grid onClick={(el)=>goto(props,el)} data={data} hasLine={false} itemStyle={{color:'#FA8258'}}/>
                <div>
                    <WhiteSpace size="lg" />
                    <Card full>
                    <Card.Header
                        title="我的待处理事项"
                        thumb={<FormOutlined /> }
                        style={{background:'#FAFAFA'}}
                    />
                    <Card.Body>
                    {/* <List className="my-list"> </List>*/}
                        <Item arrow="horizontal" align="top" thumb={<EditTwoTone twoToneColor="#52c41a" />} multipleLine  onClick={() => {console.log('打开待办')}}>
                        Title <Brief>subtitle</Brief>
                        </Item>
                        <Item arrow="horizontal" align="top" thumb={<EditTwoTone twoToneColor="#52c41a" />} multipleLine  onClick={() => {console.log('打开待办')}}>
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