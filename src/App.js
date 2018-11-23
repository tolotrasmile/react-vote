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
import PersonRoute from './components/person/PersonRoute';
import PersonDetail from './components/person/PersonDetail';
import PersonList from './components/person/PersonList';
import Expandable from './components/Expandable';

function App() {
  return (
    <Layout style={{ backgroundColor: '#fff' }}>
      <HeaderLayout />
      <Layout>
        <SiderLayout />
        <ContentLayout>
          <Router>
            <Login path="login" />
            <Dashboard path="dashboard" />
            <Expandable path="blog" />
            <PersonRoute path="persons">
              <PersonList path="/" />
              <PersonDetail path="/:id" />
            </PersonRoute>
            <ListComponent path="confirmed" />
            <ListComponent path="christened" />
            <ListComponent path="deacons" />
            <ListComponent path="families" />
          </Router>
        </ContentLayout>
      </Layout>
    </Layout>
  );
}

export default App;
