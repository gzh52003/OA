import React, { Suspense, lazy } from 'react';
import { HashRouter, BrowserRouter, Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom'
import { NavBar, Icon } from 'antd-mobile';

import App from './App'
import TodoList from '~/TodoList'
import Approval from '~/approval/Approval'
import Performan from '~/Performan'




@withRouter
class main extends React.Component {

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