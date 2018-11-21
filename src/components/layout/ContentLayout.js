import React from 'react';
import Layout from 'antd/lib/layout/layout';

const { Content } = Layout;

function ContentLayout({ children }) {
  return (
    <Layout
      style={{
        padding: '24px',
        overflow: 'auto',
        height: 'calc(100vh - 64px)',
        background: '#fff'
      }}
    >
      <Content
        style={{ background: '#fff', padding: 24, margin: 0, minHeight: 1280 }}
      >
        {children}
      </Content>
    </Layout>
  );
}

export default ContentLayout;
