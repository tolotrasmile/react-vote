import React from 'react';

import Sider from 'antd/lib/layout/Sider';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon/';

import { Link } from '@reach/router';

function SiderLayout() {
  return (
    <Sider width={250} style={{ background: '#fff', marginRight: 2 }}>
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
        <Menu.SubMenu
          key="lists"
          title={
            <span>
              <Icon type="bank" />
              Lists
            </span>
          }
        >
          <Menu.Item key="persons">
            <Link to="persons">
              <span>
                <Icon size="large" type="user" />
                Persons
              </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="confirmed">
            <Link to="confirmed">
              <span>
                <Icon size="large" type="user" />
                Confirmed
              </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="christened">
            <Link to="christened">
              <span>
                <Icon size="large" type="user" />
                Christened
              </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="deacons">
            <Link to="deacons">
              <span>
                <Icon size="large" type="user" />
                Deacon
              </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="families">
            <Link to="families">
              <span>
                <Icon size="large" type="user" />
                Families
              </span>
            </Link>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Sider>
  );
}

export default SiderLayout;
