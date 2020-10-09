import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'
let authenticate = ()=> {
    const token = localStorage.getItem("token");
    return token ? true : false;
}
const PrivateRoute = ({ component: Component, ...rest }) => {
   
    console.log('authenticate1',authenticate())
    return (
        <CacheRoute
            {...rest}
            render={props => authenticate() ? <Component {...props} /> :
                <Redirect to={{
                    pathname: "/login",
                    state: { from: props.location }
                }} />
            }>
        </CacheRoute>
    )
}

export default PrivateRoute