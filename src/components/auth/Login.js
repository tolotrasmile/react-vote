import React from 'react';
import Form from 'antd/lib/form/Form';
import Input from 'antd/lib/input/Input';
import Button from 'antd/lib/button/button';
import Icon from 'antd/lib/icon';
import FormItem from 'antd/lib/form/FormItem';
import DatePicker from 'antd/lib/date-picker';

export default () => {
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
        <DatePicker size="large" format="YYYY-MM-DD" />
      </FormItem>
      <FormItem>
        <Button
          size="large"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        >
          Submit
        </Button>
      </FormItem>
    </Form>
  );
};
