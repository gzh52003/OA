import React from 'react';
import { withRouter } from 'react-router-dom';
import {  NavBar, Icon,List,NoticeBar,Checkbox, Flex } from 'antd-mobile';

import request from '@/utils/request';
import '../../css/Select.scss';




const Item = List.Item;
const Brief = Item.Brief;
const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

class Select extends React.Component {
  state = {
    disabled: false,
    number:'',
    leaveRecList:[],
  }
  componentDidMount() {
  
    
  }
  onRevoke = async (id) =>{
    console.log(id)
    const data = await request.remove('/leaveRec/'+ id);
    this.setState({
      leaveRecList:this.state.leaveRecList.filter(item=>item._id !== id),
      number:this.state.leaveRecList.filter(item=>item._id !== id).length
    })
  }


  onChange = (val) => {
    console.log(val);
  }



  

  render() {
    const data = [
        { value: 0, label: '李周周' },
        { value: 1, label: '老韦' },
        { value: 2, label: '老李' },
      ];
    return (
      
      <div className="Select">
        {/* 导航栏 */}
        <NavBar
          mode="light"
          icon={<Icon type="left" color="#000"/>}
          onLeftClick={() => {this.props.history.goBack()}}
          >请选择
        </NavBar>

        {/* 内容 */}
        <div className="leaveRec">
        <NoticeBar  icon={null}>请选择审批人和发送人</NoticeBar>
            {/* <List renderHeader={() => 'Basic Style'} className="my-list">
                <Item extra={'extra content'}>

                </Item>
            </List> */}
            <div>
                <List>
                    {data.map(i => (
                    <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
                        {i.label}
                    </CheckboxItem>
                    ))}
                    
                </List>
            </div>
        </div>

        

      </div>
    );
  }
}

export default Select;



