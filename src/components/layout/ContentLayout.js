import React from 'react';
import Layout from 'antd/lib/layout/layout';
const { Content } = Layout;

function ContentLayout({ children }) {
  return (
    <Layout
      style={{
        overflow: 'auto',
        height: 'calc(100vh - 64px)',
        background: '#fff'
      }}
    >
      <Content
        style={{ background: 'red', padding: 24, margin: 0, minHeight: 1280 }}
      >
        {children}
      </Content>
    </Layout>
  );
}

export default ContentLayout;
