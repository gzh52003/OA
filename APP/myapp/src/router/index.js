import React, { Suspense, lazy } from 'react';
import { Switch,withRouter } from 'react-router-dom';
import { FrontendAuth } from './frontend-auth'
import { routerConfig } from './router'
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'

@withRouter
export class Router extends React.Component{
    render(){
        return(
            <>
            <Suspense fallback={<div>loading...</div>}>
            <CacheSwitch>
                <FrontendAuth config={routerConfig}/>
            </CacheSwitch>
            </Suspense>
            </>
        );
    }
}

export default Router;