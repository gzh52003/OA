import React, { Suspense, lazy } from 'react';
import logo from './logo.svg';
import './Login/Login.scss';
import { HashRouter, BrowserRouter, Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
// @withRouter

//引入页面组件

const Login = lazy(() => import("./Login/Login"));


class LoginApp extends React.PureComponent {
    state = {
        /* 一级菜单 */
        menu: [{
            text: "登录",
            name: "Login",
            path: '/Login',
        }
        ],
        collapsed: false,
    }



    render() {
        // console.log('App.props', this.props)
        const { menu, secmenu } = this.state;
        // const { currentUser, logout } = this.props;
        return (
            <div className="loginAppContent">
                <div className="LoginApp">
                    <Layout>
                        <Layout>
                            <Content>
                                <Suspense fallback={<div>loading...</div>}>
                                    <Switch>
                                        <Route path="/Login" component={Login} />
                                        <Route path="/notfound" render={() => <div>404</div>} />
                                        <Redirect from="/" to="/Login" exact />
                                    </Switch>
                                </Suspense>
                            </Content>
                        </Layout>
                    </Layout>
                </div >
            </div>

        );
    }

}

//LoginApp = withRouter(LoginApp);
export default LoginApp;