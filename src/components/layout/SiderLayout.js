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
        <Menu.Item key="dashboard">
          <Link to="dashboard">
            <span>
              <Icon size="large" type="user" />
              Dashboard
            </span>
          </Link>
        </Menu.Item>
        <Menu.Item key="blog">
          <Link to="blog">
            <span>
              <Icon size="large" type="user" />
              Blog
            </span>
          </Link>
        </Menu.Item>
        <SubMenu
          key="lists"
          title={
            <span>
              <Icon type="bank" />
              Lists
            </span>
          }
        >
          <Menu.Item key="persons">
            <span>
              <Icon type="user" />
              Persons
            </span>
          </Menu.Item>
          <Menu.Item key="confirmed">
            <span>
              <Icon type="user" />
              Confirmed
            </span>
          </Menu.Item>
          <Menu.Item key="christened">
            <span>
              <Icon type="user" />
              Christened
            </span>
          </Menu.Item>
          <Menu.Item key="deacon">
            <span>
              <Icon type="user" />
              Deacons
            </span>
          </Menu.Item>
          <Menu.Item key="families">
            <span>
              <Icon type="user" />
              Families
            </span>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default SiderLayout;
