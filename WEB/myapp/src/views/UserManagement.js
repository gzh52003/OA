import React from 'react';
import { Breadcrumb, List, Divider } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';


const data = [
    '用户列表',
    '用户添加',
];
class UserManagement extends React.PureComponent {

    // gotoPage = ({ key }) => {
    //     this.setState({
    //         current:key
    //     })
    //     this.goto(key);
    //     // this.props.history.replace(path);
    //   }
    //   goto = (path)=>{
    //       this.props.history.push(path);
    //   }
    goto=()=>{
        this.props.history.push("/UserList");
    }
      
    render(){
        return <div>
            <Breadcrumb>
                <Breadcrumb.Item href="">
                <HomeOutlined />
                <span>我的首页</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item href="/#UserManagement">
                <UserOutlined />
                <span>用户管理</span>
                </Breadcrumb.Item>
            </Breadcrumb>

            <Divider orientation="left">用户管理统计</Divider>
            <List
            size="large"
            header={<div>Header</div>}
            bordered
            dataSource={data}
            renderItem={item => <List.Item onClick={this.goto}>{item}</List.Item>}
            />
        </div>
    }
}

export default UserManagement;