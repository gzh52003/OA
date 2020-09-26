import React from 'react';
import { List, InputItem, WhiteSpace, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import '../css/login.scss'
class Loginn extends React.Component {
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
                    <Button type="primary" className="lgbtn">登录</Button>
                    <p className="wangj">忘记密码</p>
                </div>
            </div>
        )
    }
}



const Login = createForm()(Loginn);
export default Login