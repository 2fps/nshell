import React from 'react';
import { Input, message } from 'antd';
import { isIpv4 } from '../../lib/js/string.js';

require('fs');

const Search = Input.Search;

class Ping extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: ''
        };
    }
    pingIP = (val) => {
        // 目前只支持ipv4
        // 先检查是不是ipv4
        if (isIpv4(val)) {

        } else {
            message.error('不是ipv4地址,请重新输入!');
        }
    }
    render() {
        return (
            <div>
                <Search
                placeholder="input ipv4"
                enterButton="ping"
                size="large"
                ref="pingValue"
                onSearch={value => this.pingIP(value)}
                />
                <div className="commincationArea">{this.state.result}</div>
            </div>
        );
    }
}

export default Ping;