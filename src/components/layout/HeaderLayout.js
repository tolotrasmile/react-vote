import React, { Component } from 'react';
import Layout from 'antd/lib/layout/layout';
import Menu from 'antd/lib/menu';

const { Header } = Layout;

class HeaderLayout extends Component {
  render () {
    return (
      <Header className="header" style={{
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 0
      }}>
        <div className="logo">
          <h1>LOGO</h1>
        </div>
        <div style={{ float: 'right', display: 'flex', justifyContent: 'space-between' }}>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px', backgroundColor: 'transparent' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </div>
      </Header>)
  }
}

export default HeaderLayout
