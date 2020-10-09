import React,{Component, lazy} from 'react';
import {Switch,withRouter,Route} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import {routes} from './router';

const ERROR = lazy(() =>  import('~/err/error'));

class ContentMain extends Component{
    render(){
        return(
            <div className="routeWrap">
                <Switch>
                    {
                        routes.map(item=>{
                            return (
                                item.path?<PrivateRoute IsCacheRoute={item.CacheRoute} path={item.path} exact component={item.component}/>:<Route component={ERROR}/>
                            )
                        })
                    }
                    
                </Switch>
            </div>
        )
    }
}
export default withRouter(ContentMain);