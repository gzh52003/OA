import React from 'react';
import { List, InputItem, WhiteSpace, Button,Toast } from 'antd-mobile';
import request from '@/utils/request';
import { createForm } from 'rc-form';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import userAction,{login} from '../store/actions/user'
import '../css/login.scss'
class Loginn extends React.Component {
    async Login(e){
        console.log("username",this.props.form.getFieldProps('username').value);
        console.log("password",this.props.form.getFieldProps('password').value);
        let username = this.props.form.getFieldProps('username').value;
        let password = this.props.form.getFieldProps('password').value;

        const data = await request.post('/login',{
            username,
            password
        });
        console.log(data);
        
        if(data.code === 1){
            
            // 把用户信息存入本地（数据持久化）
            // localStorage.setItem('currentUser',JSON.stringify(data.data));

            // store.dispatch({type:'login',user:data.data})
            // props.dispatch({type:'login',user:data.data})
            console.log(1);
            Toast.success('登录成功');
            // props.login(data.data);
            localStorage.setItem("authorization",data.data.authorization)
            // 跳转到我的页面
            this.props.history.push('/home')
        }else{
            Toast.fail('登录失败');
        }
    }
    render() {
        const { getFieldProps } = this.props.form;
        
        return (

            <div className="denglu">
                <div className="dl">
                    <InputItem
                        {...getFieldProps('username')}
                        type="text"
                        placeholder="请输入账号/手机号"

                    >登录</InputItem>

                    <InputItem
                        {...getFieldProps('password')}
                        type="password"
                        placeholder="请写入密码"
                    >密码</InputItem>
                    <Button type="primary" className="lgbtn" onClick={()=>{this.Login()}}>登录</Button>
                    <p className="wangj">忘记密码</p>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({currentUser})=>({currentUser})
const mapDispatchToProps = function(dispatch){
    // return {
    //     login(user){
    //         // dispatch({type:'login',user})
    //         dispatch(login(user))
    //     },
    //     dispatch
    // }
    return bindActionCreators(userAction,dispatch)
    // {login,logout} 等效于以下代码(bindActionCreators内部帮我们实现了以下代码)
    // {
    //     login: function(user){
    //         dispatch(login(user))
    //     },
    //     logout:function(){
    //         dispatch(logout())
    //     }
    // }
}


let Login = createForm()(Loginn);
Login = connect(mapStateToProps,mapDispatchToProps)(Login)
export default Login