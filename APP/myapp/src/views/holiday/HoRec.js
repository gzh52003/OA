import React from 'react';
import { withRouter } from 'react-router-dom';
import {  NavBar, Icon,List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;



class HoRec extends React.PureComponent {
  state = {
    disabled: false,
  }
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
        <List className="my-list">
        <Item extra="10:30" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
          小李提交的请假 
          <Brief>
            <p>请假类型:事假</p>
            <p>开始时间:2020-09-18</p>
            <p>结束时间:2020-09-18</p>
            <span>处理中</span><b>撤销</b>
          </Brief>
        </Item>
      </List>

      </div>
    );
  }
}

export default HoRec;



