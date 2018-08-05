import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import JSONViewer from '../JSONViewer/JSONViewer.js';
import Ping from '../Ping/ping.js';

class RelateArea extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Switch>
                <Route exact path="/JSON Viewer" component={JSONViewer} />
                <Route path="/PING" component={Ping} />
                <Redirect path="/" to={{pathname: '/JSON Viewer'}} />
            </Switch>
        );
    }
}

export default RelateArea;