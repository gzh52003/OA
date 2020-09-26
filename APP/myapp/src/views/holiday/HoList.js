import React,{Suspense, lazy } from 'react';
import { withRouter ,Route,  Switch} from 'react-router-dom';
import {  NavBar, Icon ,List , NoticeBar} from 'antd-mobile';
import '../../css/homeLIst.scss';
// const IQ = lazy(() => import("./IQ.js"));

@withRouter
class HoList extends React.PureComponent {
  state = {
    menu:[
      {
        id:"compassLea",
        type:"事假",
        color:"orange",
        tips:"按小时请假",
      },
      {
        id:"CompenLea",
        type:"调休",
        color:"blue",
        tips:"按小时请假",
      },
      {
        id:"sickLea",
        type:"病假",
        color:"red",
        tips:"按小时请假",
      },
      {
        id:"annualLea",
        type:"年假",
        color:"orange",
        tips:"按小时请假",
      },
      {
        id:"maternityLea",
        type:"产假",
        color:"yellow",
        tips:"按天请假",
      },
      {
        id:"PaternityLea",
        type:"陪产假",
        color:"blue",
        tips:"按天请假",
      },
      {
        id:"marriageLea",
        type:"婚假",
        color:"green",
        tips:"按天请假",
      },
      {
        id:"PeriodLea",
        type:"例假",
        color:"orange",
        tips:"按半天请假",
      },
      {
        id:"BereavementLea",
        type:"丧假",
        color:"green",
        tips:"按天请假",
      },
      {
        id:"LactationLea",
        type:"哺乳假",
        color:"yellow",
        tips:"按小时请假",
      }
    ],
    disabled: false,
  
  }
  goto = (id)=>{
    // console.log("12121212",this.props.history);
    this.props.history.push('/Holidays/'+ id)
  }
  render() {
    console.log('HoList.props',this.props)
    const { menu } = this.state;
    const Item = List.Item;
    return (
      <div className="HoList">
       <NavBar
          mode="light"
          icon={<Icon type="left" color="#000"/>}
          onLeftClick={() => {this.props.history.goBack()}}
          leftContent={[
            <Icon key="0" type="cross" color="#000" style={{ marginRight: '16px' }} />,
          ]}>请假
        </NavBar>

        {/* <WhiteSpace size="lg" /> */}
        <NoticeBar  icon={null}>请选择请假类型</NoticeBar>

      {/* 列表 */}
        {
          menu.map((item,index) => 
            <List className="my-list hoList" key={index}>
              <Item arrow="horizontal" multipleLine onClick={this.goto.bind(null,item.id)}>
              <i style={{backgroundColor:item.color}}></i><span>{item.type}</span><b>{item.tips}</b>
              </Item>
            </List>
          )
        }
      </div>
    );
  }
}

export default HoList;
