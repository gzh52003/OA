import * as React from 'react';
import { Route,Redirect,withRouter } from 'react-router-dom';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'
import request from '@/utils/request';
import {Toast } from 'antd-mobile';
import { connect } from 'react-redux';


@withRouter
@connect((state)=>{
    return {
        isLogin:state.user.authorization,
        currentUser:state.user
    }
})
export class FrontendAuth extends React.Component{

    async verification(authorization){
        //发起ajax请求，确定token是正确的
        const data = await request.get('jwtverify',{
            authorization
        });
        if(data.code === 0){
            this.props.dispatch({type:'logout'})
        }
    }
    async componentDidMount(){
        const {currentUser} = this.props
        console.log(currentUser)
        await this.verification(currentUser.authorization)
        
    }
    async componentWillUnmount(){
        console.log(1);
        // const isLogin = localStorage.getItem('authorization')
        // await this.verification(isLogin)
        
    }
    render(){
        
        // return <div>hello</div>
        const { location,config,isLogin} = this.props;
        
        const { pathname } = location;
        
        
        // 如果该路由不用进行权限校验，登录状态下登陆页除外
        // 因为登陆后，无法跳转到登陆页
        // 这部分代码，是为了在非登陆状态下，访问不需要权限校验的路由
        // const targetRouterConfig = config.find((v) => {
            
        //     // v.path === pathname
        //     return v.path.replace(/\/:.{1,}/,"") === pathname.slice(pathname.indexOf("/"),pathname.lastIndexOf("/"))
            
        // });
        
        let targetRouterConfig = config.find((v) =>v.path === pathname)
        console.log("hiiiii",config,pathname);
        if(!targetRouterConfig){
            targetRouterConfig = config.find((v) => v.path.replace(/\/:.{1,}/,"") === pathname.slice(pathname.indexOf("/"),pathname.lastIndexOf("/")))
        }
        // const targetRouterConfig = config.find((v) => v.path.replace(/\/:.{1,}/,"") === pathname.slice(pathname.indexOf("/"),pathname.lastIndexOf("/")))
        if(targetRouterConfig && !targetRouterConfig.auth && !isLogin){
            
            const { component,type } = targetRouterConfig;
            return type==="CacheRoute"?(<CacheRoute path={pathname} component={component}/>):(<Route path={pathname} component={component} />)
        }

        if(isLogin){
            
                // 如果是登陆状态，想要跳转到登陆，重定向到主页
                if(pathname === '/login'){
                    return <Redirect to='/' />
                }else{
                    // 如果路由合法，就跳转到相应的路由
                    
                    if(targetRouterConfig){
                        const { component,type } = targetRouterConfig;
                        return type==="CacheRoute"?(<CacheRoute path={pathname} component={component}/>):(<Route path={pathname} component={component} />)
                    }else{
                        // 如果路由不合法，重定向到 404 页面
                        return <Redirect to='/404' />
                    }
                }
            // },function(){
            //     return Toast.fail('登录失败');
            // })
        }else{
            
            // 非登陆状态下，当路由合法时且需要权限校验时，跳转到登陆页面，要求登陆
            if(targetRouterConfig && targetRouterConfig.auth){
                // localStorage.removeItem('authorization')
                return <Redirect to='/login' />
            }else{
                // 非登陆状态下，路由不合法时，重定向至 404
                return <Redirect to='/404' />
            }
        }
    }
}