import React from 'react';
import './App.css';
import Layout from 'antd/lib/layout/layout';
import Form from 'antd/lib/form/Form';
import Input from 'antd/lib/input/Input';
import Button from 'antd/lib/button/button';
import Icon from 'antd/lib/icon';
import FormItem from 'antd/lib/form/FormItem';
import DatePicker from 'antd/lib/date-picker';
import 'antd/lib/date-picker/style/css';

import SiderLayout from './components/layout/SiderLayout';
import HeaderLayout from './components/layout/HeaderLayout';
import ContentLayout from './components/layout/ContentLayout';

function App() {
  return (
    <Layout>
      <HeaderLayout />
      <Layout>
        <SiderLayout />
        <ContentLayout>
          <Form layout="vertical">
            <FormItem>
              <Input
                size="large"
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Username"
              />
            </FormItem>
            <FormItem>
              <Input
                size="large"
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Username"
              />
            </FormItem>
            <FormItem>
              <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
            </FormItem>
            <FormItem>
              <Button
                size="large"
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
              >
                Submit
              </Button>
            </FormItem>
          </Form>
        </ContentLayout>
      </Layout>
    </Layout>
  );
}

export default App;
