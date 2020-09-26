import React,{Suspense, lazy } from 'react';
import { withRouter ,Route,  Switch} from 'react-router-dom';
import {  NavBar, Icon ,List , NoticeBar} from 'antd-mobile';

// const IQ = lazy(() => import("./IQ.js"));

@withRouter



class HomeList extends React.PureComponent {
  state = {
    menu:[
      {
        id:9,
        type:"事假",
        color:"orange",
        tips:"按小时请假",
      },
      {
        id:1,
        type:"调休",
        color:"blue",
        tips:"按小时请假",
      },
      {
        id:2,
        type:"病假",
        color:"red",
        tips:"按小时请假",
      },
      {
        id:3,
        type:"年假",
        color:"orange",
        tips:"按小时请假",
      },
      {
        id:3,
        type:"产假",
        color:"yellow",
        tips:"按天请假",
      },
      {
        id:4,
        type:"陪产假",
        color:"blue",
        tips:"按天请假",
      },
      {
        id:5,
        type:"婚假",
        color:"green",
        tips:"按天请假",
      },
      {
        id:6,
        type:"例假",
        color:"orange",
        tips:"按半天请假",
      },
      {
        id:7,
        type:"丧假",
        color:"green",
        tips:"按天请假",
      },
      {
        id:8,
        type:"哺乳假",
        color:"yellow",
        tips:"按小时请假",
      }
    ],
    disabled: false,
  
  }
  goto = (id)=>{
      console.log("12121212");
    this.props.history.push('/iq/'+ id)
}


  
  render() {
    console.log('HomeList.props',this.props)
    const { menu, sec} = this.state;
    console.log(menu)
    const Item = List.Item;
    
    return (

      
      <div className="HomeList">

       <NavBar
          mode="light"
          icon={<Icon type="left" color="#000"/>}
          onLeftClick={() => console.log('onLeftClick')}
          leftContent={[
            <Icon key="0" type="cross" color="#000" style={{ marginRight: '16px' }} />,
          ]}>请假
        </NavBar>

        {/* <WhiteSpace size="lg" /> */}
        <NoticeBar  icon={null}>请选择请假类型</NoticeBar>

      {/* 列表 */}
        {
          menu.map((item,index) => 
            <List className="my-list" key={index}>
              <Item arrow="horizontal" multipleLine onClick={this.goto.bind(this,item.id)}>
              <i style={{backgroundColor:item.color}}></i><span>{item.type}</span><b>{item.tips}</b>
              </Item>
            </List>


          )
        }

      </div>
    );
  }
}

export default HomeList;
