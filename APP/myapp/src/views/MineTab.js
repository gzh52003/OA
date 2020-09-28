// 我的页面
import React, { useState, lazy } from 'react'
import { withRouter } from 'react-router-dom';
import { Grid, NavBar, Icon, TabBar, List, WhiteSpace, Card, Flex, InputItem, Switch, Stepper, Range, Button, WingBlank } from 'antd-mobile';
import '../css/MineTa.scss'
import {
    SwapOutlined,
    UserOutlined,
    QrcodeOutlined
} from '@ant-design/icons';
const Item = List.Item;
const Brief = Item.Brief;
import { connect } from 'react-redux';
import Login from "./Login"



@connect((state) => {
    // console.log('state', state.user);
    return {
        currentUser: state.user
    }
})

class MineTab extends React.Component {
    // this.props.history.push('/home')
    state = {
        disabled: false,
    }
    render() {
        let Loginout1 = (props) => {
            localStorage.removeItem('currentUser')
            // ???????????????????????????
            console.log('hhhhhhhhhhhhhh', this.props.props.history.push('../../../login'));
            currentUser.Name = ''
            currentUser.Phone = ''
            currentUser.LoginID = ''
            // this.props.props.history.push('/Login')
            this.render()
        }
        let currentUser = this.props.currentUser
        return (
            <div style={{ fontSize: '1rem' }}>
                <div className="minebody">
                    <div className="xx">
                        <h1 className="mtitle">个人信息</h1>
                        <Icon type="check-circle-o" className="micon" />
                    </div>
                    <span>由自己编辑，部分内容展示在对外的信息，如昵称...</span>
                </div>
                <List className="my-list mineList">
                    <Item extra={<span className="qianming">{currentUser.LoginID}</span>}
                        arrow="horizontal" onClick={() => { }}>头像</Item>
                    <Item extra={currentUser.Name} arrow="horizontal" onClick={() => { }}>昵称</Item>
                    <Item extra={currentUser.Phone} arrow="horizontal" onClick={() => { }}>电话</Item>
                    <Item extra="未设置" arrow="horizontal" onClick={() => { }}>钉钉号</Item>
                    <Item extra={<QrcodeOutlined />} arrow="horizontal" onClick={() => { }}>二维码名片</Item>
                    <Item extra={<span><UserOutlined />未定义</span>} arrow="horizontal" onClick={() => { }}>个人实人认证</Item>
                    <Item arrow="horizontal" onClick={() => { }}>工作档案</Item>
                    <Item arrow="horizontal" onClick={() => { }}>更多</Item>
                </List>
                <div className="mbottom">
                    <div className="td">
                        <h1 className="qiye">企业/团队/组织</h1>
                        <span className="shiftqy"><SwapOutlined />&nbsp; 切换主企业</span>
                    </div>
                    <span className="xinxi">由管理员设置，此信息仅对相同组织内部的同事可见</span>
                </div>
                <Item
                    arrow="horizontal"
                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                    multipleLine
                    onClick={() => { }}
                    style={{ marginBottom: '10px' }}
                >
                    真开心   <Button type="ghost" inline style={{ marginRight: '4px', height: '20px', fontSize: '12px', width: '70px', lineHeight: '20px', borderBottom: '1px solid #ccc' }}>主企业</Button><Brief>我在该团队内的名字：{currentUser.Name}</Brief>
                </Item>
                <Button type="warning" className="Loginout1" onClick={Loginout1}>退出</Button><WhiteSpace />
            </div>);
    }
}
export default MineTab
