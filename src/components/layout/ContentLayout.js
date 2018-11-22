import React from 'react';
import Layout from 'antd/lib/layout/layout';
const { Content } = Layout;

function ContentLayout({ children }) {
  return (
    <Layout
      style={{
        overflow: 'auto',
        height: 'calc(100vh - 64px)',
        background: '#fafafa'
      }}
    >
      <Content style={{ padding: 0, margin: 0 }}>{children}</Content>
    </Layout>
  );
}

export default ContentLayout;
