import React, { Suspense, lazy } from 'react';
import { HashRouter, BrowserRouter, Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom'

import App from './App'
import './assets/common/reset.scss';

const TodoList = lazy(() => import("~/TodoList"));
const Approval = lazy(() => import("~/approval/Approval"));
const Holidays = lazy(() => import("~/holiday/Holidays"));
const Performan = lazy(() => import("~/Performan"));
const Login = lazy(() => import("./views/Login"));
const HoFill = lazy(() => import("~/holiday/HoFill"));
const HoRec = lazy(() => import("~/holiday/HoRec"));
const Select = lazy(() =>  import('~/holiday/Select'));

// @withRouter
class main extends React.Component {
  render() {
    return (
      <>
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Route path="/home" component={App} />
            <Route path="/list/:isTodo" component={TodoList} />
            <Route path="/approval" component={Approval} />
            <Route path="/Holidays/compassLea/:id" component={HoRec} exact />
            <Route path="/Holidays/:id" component={HoFill} exact />
            <Route path="/Holidays" component={Holidays} />
            <Route path="/Performan" component={Performan} />
            <Route path="/Login" component={Login} />
            <Route path="/notfound" render={() => <div>404</div>} />
            <Route path="/404" exact render={() => <div>404</div>} />
            <Redirect to="/404" />
            
            <Redirect from="/" to="/home" exact />
          </Switch>
        </Suspense>
      </>
    )
  }
}
export default main