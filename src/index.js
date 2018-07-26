import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import './styles/css/index.css';
import { Layout } from 'antd';
import SliderBar from './components/sliderBar/sliderBar.js';
import RelateArea from './components/relateArea/relateArea.js';

import { data } from './data/data.js';

const { Header, Footer, Sider, Content } = Layout;

let select = data[0];

ReactDOM.render(
    <Layout className="box">
        <Sider className="leftSlider">
            <SliderBar data={data} clickSliderBar={clickSliderBar}></SliderBar>
        </Sider>
        <Layout className="rightCon">
            <Header className="header">Header</Header>
            <Content className="content">
                <RelateArea now={select}></RelateArea>
            </Content>
            <Footer className="footer">Footer</Footer>
        </Layout>
    </Layout>, document.getElementById('root'));

function clickSliderBar(info) {
    // 选中了哪个
    debugger;
    select = data[info.key];
}

// registerServiceWorker();