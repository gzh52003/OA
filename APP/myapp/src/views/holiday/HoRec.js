import React from 'react';
import { withRouter } from 'react-router-dom';
import {  NavBar, Icon,List } from 'antd-mobile';

import request from '@/utils/request';
import '../../css/HoRec.scss';

const Item = List.Item;
const Brief = Item.Brief;



class HoRec extends React.Component {
  state = {
    disabled: false,
  }
  // async componentDidMount(){
  //   console.log(66);
  //   const data = await request.get('/leaveRec');
  //   console.log(data)
  // }
  render() {
    return (
      
      <div className="HoRec">
        {/* 导航栏 */}
        <NavBar
          mode="light"
          icon={<Icon type="left" color="#000"/>}
          onLeftClick={() => {this.props.history.goBack()}}
          leftContent={[
            <Icon key="0" type="cross" color="#000" style={{ marginRight: '16px' }} />,
          ]}>请假记录
        </NavBar>

        {/* 内容 */}
        <div className="leaveRec">
          <List className="my-list">
            <Item extra="10:30" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine className="recodeTit">
              <span className="whoPost">小李提交的请假</span><b className="time"></b>
              <Brief className="recDetailed"> 
                <p>请假类型:事假</p>
                <p>开始时间:2020-09-18</p>
                <p>结束时间:2020-09-18</p>
                <span className="apPerson"><i>李周周</i>处理中</span><b>撤销</b>
              </Brief>
            </Item>
          </List>
        </div>

        

      </div>
    );
  }
}

export default HoRec;



