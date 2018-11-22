import React from 'react';
import Form from 'antd/lib/form/Form';
import Input from 'antd/lib/input/Input';
import Icon from 'antd/lib/icon';
import FormItem from 'antd/lib/form/FormItem';
import Button from 'antd/lib/button/button';

export default function Login () {
  return (
    <Form layout="vertical">
      <FormItem>
        <Input
          size="large"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Username"
        />
      </FormItem>
      <FormItem>
        <Input
          size="large"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Username"
        />
      </FormItem>
      <FormItem>
        <div>
          <Button
            size="large"
            type="primary"
          >
            Login
          </Button>
        </div>
      </FormItem>
    </Form>
  );
}

