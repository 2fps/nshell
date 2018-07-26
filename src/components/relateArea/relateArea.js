import React from 'react';

import JSONViewer from '../JSONViewer/JSONViewer.js';

class RelateArea extends React.Component {

    render() {
        if ('JSON Viewer' === this.props.now.name) {
            return (
                <JSONViewer></JSONViewer>
            );
        }
    }
}

export default RelateArea;