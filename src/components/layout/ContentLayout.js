import React from 'react';
import Layout from 'antd/lib/layout/layout';
const { Content } = Layout;

function ContentLayout({ children }) {
  return (
    <Layout
      style={{
        overflow: 'auto',
        height: 'calc(100vh - 84px)',
        background: '#fff'
      }}
    >
      <Content style={{ padding: 24, margin: 0, minHeight: 1280 }}>
        {children}
      </Content>
    </Layout>
  );
}

export default ContentLayout;
