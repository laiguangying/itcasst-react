import React from 'react';
import {Layout, Menu, } from 'antd';
import {HashRouter, Route, Link} from "react-router-dom";

import About from "./components/about";
import Index from "./components/index";
import Movie from "./components/movie";

import './App.scss';
import 'antd/dist/antd.css';

const {Header, Content, Footer} = Layout;

function App(props) {
  return (
    <HashRouter>
      <Layout className="layout" style={{height:'100%'}}>
        <Header>
          <div className="logo"/>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[window.location.hash.split('/')[1]||'index']}
            style={{lineHeight: '64px'}}
          >
            <Menu.Item key="index">
              <Link to={'/index'}>首页</Link>
            </Menu.Item>
            <Menu.Item key="movie">
              <Link to={'/movie/showing/1'}>电影</Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to={'/about'}>关于</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content className='content'>
          <Route path={'/about'} component={About}/>
          <Route path={'/index'} component={Index}/>
          <Route path={'/movie'} component={Movie}/>
        </Content>
        <Footer style={{textAlign: 'center'}}>itcast ©2019 Created by Wpeng</Footer>
      </Layout>
    </HashRouter>
  );
}

export default App;
