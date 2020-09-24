import React, { Suspense, lazy } from 'react';
import { HashRouter, BrowserRouter, Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom'

import App from './App'
import TodoList from '~/TodoList'
import Approval from '~/approval/Approval'
import Holidays from '~/holiday/Holidays'
import Performan from '~/Performan'

import './assets/common/reset.scss';
import HoFill from '~/holiday/HoFill';

@withRouter
class main extends React.Component {
    
    render() {
        
        return (
            <>
            <Suspense fallback={<div>loading...</div>}>
                <Switch>
                    <Route path="/home" component={App} />
                    <Route path="/list/:isTodo" component={TodoList} />
                    <Route path="/approval" component={Approval} />
                    <Route path="/Holidays/:id" component={HoFill} exact/>
                    <Route path="/Holidays" component={Holidays} />
                    <Route path="/notfound" render={() => <div>404</div>} />
                    <Redirect from="/" to="/home" exact />
                </Switch>
  render() {

    return (
      <>

        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Route path="/home" component={App} />
            <Route path="/todolist" component={TodoList} />
            <Route path="/approval" component={Approval} />
            <Route path="/performan" component={Performan} />

            <Route path="/notfound" render={() => <div>404</div>} />
            <Redirect from="/" to="/home" exact />
          </Switch>

        </Suspense>
      </>
    )
  }
}
export default main