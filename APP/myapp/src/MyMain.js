import React, { Suspense, lazy } from 'react';
import { HashRouter, BrowserRouter, Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom'
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'

import App from './App'
import TodoList from '~/TodoList'
import Approval from '~/approval/Approval'
import Holidays from '~/holiday/Holidays'
import Performan from '~/Performan'
import Login from './views/Login'
import './assets/common/reset.scss';
import HoFill from '~/holiday/HoFill';
import HoRec from '~/holiday/HoRec';
import Select from './views/holiday/Select';


@withRouter
class main extends React.Component {
  render() {
    return (
      <>
        <Suspense fallback={<div>loading...</div>}>
          <CacheSwitch>
            <CacheRoute path="/home" component={App} />
            <Route path="/list/:isTodo" component={TodoList} />
            <Route path="/approval" component={Approval} />
            <Route path="/Holidays/compassLea/:id" component={HoRec} exact />
            <CacheRoute  path="/Holidays/:id" component={HoFill} exact />
            <Route path="/Holidays" component={Holidays} />
            <Route path="/Performan" component={Performan} />
            <CacheRoute path="/submit/Select" component={Select} />
            <Route path="/Login" component={Login} />

            <Route path="/notfound" render={() => <div>404</div>} />
            <Redirect from="/" to="/home" exact />
          </CacheSwitch>
        </Suspense>
      </>
    )
  }
}
export default main