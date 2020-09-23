import React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined,ScheduleOutlined, FieldTimeOutlined } from '@ant-design/icons';
//导入列表
import ListItem from '~/ListItem/ListItem'


class ToDoListAll extends React.Component{
    constructor(props){
        super(props);
        
        // this.state = {
        //     IsTodo:this.props.match.params.ShowType === "todo"?true:false
        // }
        
    }
    state = {
        IsTodo:this.props.match.params.ShowType === "todo"?true:false
    }
    updataIsTodo = ()=>{
        this.setState({IsTodo: this.props.match.params.ShowType === "todo"?true:false});
    }
    
    render(){
        // 
        const IsTodo = this.props.match.params.ShowType === "todo"?true:false
        
        return <div>
                <Breadcrumb style={{marginBottom:'10px'}}>
                    <Breadcrumb.Item href="">
                    <HomeOutlined />
                    <span>我的首页</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                    <ScheduleOutlined />
                    <span>我的{IsTodo?"待办":"已办"}</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <ListItem IsTodo={IsTodo}/>
            </div>
    }
}




export default ToDoListAll;