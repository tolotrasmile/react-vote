import React from 'react';

import Sider from 'antd/lib/layout/Sider';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon/';

import { Link } from '@reach/router';

const SubMenu = Menu.SubMenu;

function SiderLayout() {
  return (
    <Sider width={250} style={{ background: '#fff' }}>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="login">
          <Link to="login">
            <span>
              <Icon size="large" type="user" />
              Login
            </span>
          </Link>
        </Menu.Item>
        <Menu.Item key="dashboard">
          <Link to="dashboard">
            <span>
              <Icon size="large" type="user" />
              Dashboard
            </span>
          </Link>
        </Menu.Item>
        <SubMenu
          key="sub4"
          title={
            <span>
              <Icon size="large" type="user" />
              subnav 1
            </span>
          }
        >
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g@" title="Item 1">
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="laptop" />
              subnav 2
            </span>
          }
        >
          <Menu.Item key="5">option5</Menu.Item>
          <Menu.Item key="6">option6</Menu.Item>
          <Menu.Item key="7">option7</Menu.Item>
          <Menu.Item key="8">option8</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub3"
          title={
            <span>
              <Icon type="notification" />
              subnav 3
            </span>
          }
        >
          <Menu.Item key="9">option9</Menu.Item>
          <Menu.Item key="10">option10</Menu.Item>
          <Menu.Item key="11">option11</Menu.Item>
          <Menu.Item key="12">option12</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default SiderLayout;
