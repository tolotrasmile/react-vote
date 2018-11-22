import React from 'react';
import Layout from 'antd/lib/layout/layout';
import Button from 'antd/lib/button/button';

const { Header } = Layout;

function HeaderRightItem ({ children }) {
  const baseStyle = {
    alignItems: 'center',
    display: 'flex',
    flexBasis: 'auto',
    flexGrow: 0,
    flexShrink: 0,
    justifyContent: 'center',
    marginRight: 20,
    fontSize: 18
  };
  return (
    <div style={{ ...baseStyle }}>
      {children}
    </div>
  )
}

function HeaderLayout () {
  return (
    <Header
      className="header"
      style={{
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 0,
        marginBottom: 0,
        zIndex: 9999,
        boxShadow: '0 2px 8px #f0f1f2'
      }}
    >
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <div
        style={{
          float: 'right',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}
      >
        <HeaderRightItem active={true}>
          Tolotra Raharison
        </HeaderRightItem>
        <HeaderRightItem>
          <Button type="primary" shape="circle" icon="poweroff" size="large" />
        </HeaderRightItem>
      </div>
    </Header>
  );
}

export default HeaderLayout;
