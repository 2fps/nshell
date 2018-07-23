import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import './styles/css/index.css';
import { Layout } from 'antd';
import SliderBar from './components/sliderBar/sliderBar.js';

import { data, select } from './data/data.js';

const { Header, Footer, Sider, Content } = Layout;

ReactDOM.render(
    <Layout className="box">
        <Sider className="leftSlider">
            <SliderBar></SliderBar>
        </Sider>
        <Layout className="rightCon">
            <Header className="header">Header</Header>
            <Content className="content">Content</Content>
            <Footer className="footer">Footer</Footer>
        </Layout>
    </Layout>, document.getElementById('root'));


// registerServiceWorker();