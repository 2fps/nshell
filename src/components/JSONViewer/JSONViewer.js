import React from 'react';
import {message, Button } from 'antd';
import ObjectTree from '../JSONViewer/objectTree.js';

class JSONViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: {}
        };
    }
    transToJSON = () => {
        var textValue = this.refs.jvTextArea.value,
            json = null;

        if ('' === textValue) {
            message.error('请输入内容');

            return;
        }

        try {
            json = new Function("return" + textValue)();
        } catch (e) {
            message.error('字符串有问题');
            return;
        }
        this.setState({
            result: json
        }, function() {
            message.success('处理成功');
        });
    }

    render() {
        return (
            <div>
                <textarea className="jv-textarea" ref="jvTextArea"></textarea>
                <Button type="primary" onClick={this.transToJSON}>转化</Button>
                <div className="tree-box">
                    <ObjectTree object={this.state.result}></ObjectTree>
                </div>
            </div>
        );
    }
}

export default JSONViewer;