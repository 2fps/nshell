import React from 'react';

import JSONViewer from '../JSONViewer/JSONViewer.js';
import Ping from '../Ping/ping.js';

class RelateArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.now.name
        };
    }
    componentWillReceiveProps(newProps) {
        debugger;
    }
    shouldComponentUpdate() {
        debugger;
    }
    componentWillUpdate() {
        debugger;
    }
    render() {
        if ('JSON Viewer' === this.state.name) {
            return (
                <JSONViewer></JSONViewer>
            );
        } else if ('PING' === this.state.name) {
            return (
                <Ping></Ping>
            );
        }
    }
}

export default RelateArea;