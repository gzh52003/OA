import React,{Suspense, lazy } from 'react';
import { SearchBar, Button, WhiteSpace, WingBlank,List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;
import '../../../css/ViewData.scss';
class ViewData extends React.PureComponent {
    

    render(){
       
        return(
          <div className="ViewData">
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
        )
    }
}

export default ViewData;