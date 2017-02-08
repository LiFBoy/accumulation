import React, {Component, PropTypes} from 'react';
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';

import MapIndex from './Component/map'; //首页首页
import Camera from './Component/Camera'; //首页首页
import demo from './Component/demo'; //首页首页



/**
 * (路由根目录组件，显示当前符合条件的组件)
 * 
 * @class Roots
 * @extends {Component}
 */
class Roots extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}


var history = hashHistory;

const RouteConfig = (
    <Router history={history}>
        <Route path="/" component={Camera}>
            <Route path="/map/:sid" component={MapIndex} />
            <Route path="/Camera" component={Camera} />
            <Route path="/demo" component={demo} />
        </Route>
    </Router>
);

export default RouteConfig;

// var history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;