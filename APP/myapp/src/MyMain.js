import React, { Suspense, lazy } from 'react';
import { Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import App from './App'
import request from '@/utils/request';
import './assets/common/reset.scss';

const TodoList = lazy(() => import("~/TodoList"));
const Approval = lazy(() => import("~/approval/Approval"));
const Holidays = lazy(() => import("~/holiday/Holidays"));
const Performan = lazy(() => import("~/Performan"));
const Login = lazy(() => import("./views/Login"));
const HoFill = lazy(() => import("~/holiday/HoFill"));
const HoRec = lazy(() => import("~/holiday/HoRec"));
const Select = lazy(() =>  import('~/holiday/Select'));

@withRouter
@connect((state)=>{
  return {
      isLogin:state.user.authorization,
      currentUser:state.user
  }
})
class main extends React.Component {
  async verification(authorization){
    //发起ajax请求，确定token是正确的
    const data = await request.get('jwtverify',{
        authorization
    });
    if(data.code === 0){
        this.props.dispatch({type:'logout'})
    }
}
//   async shouldComponentUpdate(){
//     console.log(111);
//     const {currentUser} = this.props
//     console.log(currentUser)
//     const isgoto = await this.verification(currentUser.authorization)
//     console.log("isgoto",isgoto);
   
// }
  render() {
    const { location,config,isLogin} = this.props;
    return (
      <>
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            {/* <Route path="/home" component={App} /> */}
            <Route path="/home" render={props=>{
              return isLogin
              ?<App {...props} />
              :<Redirect to="/Login" />
            }} />
            {/* <Route path="/list/:isTodo" component={TodoList} />
            <Route path="/approval" component={Approval} />
            <Route path="/Holidays/compassLea/:id" component={HoRec} exact />
            <Route path="/Holidays/:id" component={HoFill} exact />
            <Route path="/Holidays" component={Holidays} />
            <Route path="/Performan" component={Performan} /> */}

            <Route path="/list/:isTodo" render={props=>{
              return isLogin
              ?<TodoList {...props} />
              :<Redirect to="/Login" />
            }} />
            <Route path="/approval" render={props=>{
              return isLogin
              ?<Approval {...props} />
              :<Redirect to="/Login" />
            }} />
            <Route path="/Holidays/compassLea/:id" render={props=>{
              return isLogin
              ?<HoRec {...props} />
              :<Redirect to="/Login" />
            }} />
            <Route path="/Holidays/:id" render={props=>{
              return isLogin
              ?<HoFill {...props} />
              :<Redirect to="/Login" />
            }} />
            <Route path="/Holidays" render={props=>{
              return isLogin
              ?<Holidays {...props} />
              :<Redirect to="/Login" />
            }} />
            {/* path:'/Submit/Select',
            component:Select, */}
            <Route path="/Submit/Select" render={props=>{
              return isLogin
              ?<Select {...props} />
              :<Redirect to="/Login" />
            }} />
            <Route path="/Performan" render={props=>{
              return isLogin
              ?<Performan {...props} />
              :<Redirect to="/Login" />
            }} />
            <Route path="/Login" component={Login} />
            <Route path="/notfound" render={() => <div>404</div>} />
            <Route path="/404" exact render={() => <div>404</div>} />
            <Redirect from="/" to="/home" exact />
            <Redirect to="/404" />
            
            
          </Switch>
        </Suspense>
      </>
    )
  }
}
export default main