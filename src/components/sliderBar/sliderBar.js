import React from 'react';
import { Menu, Icon } from 'antd';
import { BrowserRouter, Router, Route, Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;

class SliderBar extends React.Component {
    constructor(props){
        super(props);
    }
    // submenu keys of first level
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: ['sub1'],
    };

    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }

    toLink = (link) => {
        if (link) {
            this.props.history.push(link);
        }
    }

    mapper = (value, index) => {
        return (
            <Menu.Item key={index}>
                <Icon type="mail" />
                <Link style={{display: 'inline-block'}} to={value.path}>{value.name}</Link>
            </Menu.Item>
        );
    }

    render() {
        return (
        <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        onClick={this.props.clickSliderBar}
        defaultSelectedKeys={['0']}
        style={{ width: 200}}
        >
            {this.props.data.map(this.mapper)}
{/*             <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}></SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}></SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}></SubMenu> */}
        </Menu>
        );
    }
}

export default SliderBar;