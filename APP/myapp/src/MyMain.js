import React,{Suspense, lazy } from 'react';
import { HashRouter, BrowserRouter, Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom'
import { NavBar, Icon} from 'antd-mobile';

import App from './App'
import TodoList from '~/TodoList'
import Approval from '~/approval/Approval'

@withRouter
class main extends React.Component {
    
    render() {
        
        return (
            <>
            <NavBar
              mode="light"
              icon={<Icon type="left" />}
              onLeftClick={() => {this.props.history.goBack();console.log("---------",history,this)}}
              rightContent={[
                // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                <Icon key="1" type="ellipsis" />,
              ]}
            >移动门户</NavBar>
            <Suspense fallback={<div>loading...</div>}>
                <Switch>
                    <Route path="/home" component={App} />
                    <Route path="/list/:isTodo" component={TodoList} />
                    <Route path="/approval" component={Approval} />
                    <Route path="/notfound" render={() => <div>404</div>} />
                    <Redirect from="/" to="/home" exact />
                </Switch>

            </Suspense>
            </>
            )
    }
}
export default main