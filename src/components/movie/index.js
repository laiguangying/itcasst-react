import React from 'react';
import {Layout, Menu,} from 'antd';
import {Route, Link} from 'react-router-dom';

import MovieList from './movieList'

const { Content, Sider} = Layout;

function Movie() {

  return (
    <Layout style={{background: '#fff', height: '100%'}}>
      <Sider width={200} style={{background: '#fff', height: '100%'}}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{height: '100%'}}
        >
          <Menu.Item key="1">
            <Link to={'/movie/showing/1'}>正在热映</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={'/movie/shown_soon/1'}>即将上映</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to={'/movie/top100/1'}>Top100</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Content style={{padding: '0 24px', minHeight: 280}}>
        <Route path={'/movie/:type/:page'} component={MovieList}/>
      </Content>
    </Layout>
  );
}

export default Movie;