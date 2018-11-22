import React from 'react';
import './App.css';
import Layout from 'antd/lib/layout/layout';
import 'antd/lib/date-picker/style/css';

import { Router } from '@reach/router';

import SiderLayout from './components/layout/SiderLayout';
import HeaderLayout from './components/layout/HeaderLayout';
import ContentLayout from './components/layout/ContentLayout';

import Login from './components/auth/Login';
import Dashboard from './components/auth/Dashboard';
import ListComponent from './components/auth/ListComponent';

function App () {
  return (
    <Layout style={{backgroundColor: '#fff'}}>
      <HeaderLayout />
      <Layout>
        <SiderLayout />
        <ContentLayout>
          <Router>
            <Login path="login" />
            <Dashboard path="dashboard" />
            <ListComponent path="blog" />
          </Router>
        </ContentLayout>
      </Layout>
    </Layout>
  );
}

export default App;
