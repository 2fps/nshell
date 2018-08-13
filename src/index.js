import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Layout } from 'antd';
import SliderBar from './components/sliderBar/sliderBar.js';
import RelateArea from './components/relateArea/relateArea.js';
import 'antd/dist/antd.css';
import './styles/css/index.css';

import { data } from './data/data.js';

const { Header, Footer, Sider, Content } = Layout;

let select = data[0];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nowDirName : 'JSON Viewer'
        };
    }
    clickSliderBar = (info) => {
        this.setState({
            nowDirName: data[info.key].name
        });
    }
    render() {
        return (
            <HashRouter
            basename="/"
            forceRefresh={false}
            keyLength={12}
            >
                <Layout className="box">
                    <Sider className="leftSlider">
                        <SliderBar data={data} clickSliderBar={this.clickSliderBar}></SliderBar>
                    </Sider>
                    <Layout className="rightCon">
                        <Header className="header">{this.state.nowDirName}</Header>
                        <Content className="content">
                            <RelateArea now={select}></RelateArea>
                        </Content>
                        <Footer className="footer">Footer</Footer>
                    </Layout>
                </Layout>
            </HashRouter>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('root'));
