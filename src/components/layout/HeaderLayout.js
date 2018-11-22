import React from 'react';
import Layout from 'antd/lib/layout/layout';
import Menu from 'antd/lib/menu';

const { Header } = Layout;

function HeaderLayout() {
  return (
    <Header
      className="header"
      style={{
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 0
      }}
    >
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <div
        style={{
          float: 'right',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >

      </div>
    </Header>
  );
}

export default HeaderLayout;
