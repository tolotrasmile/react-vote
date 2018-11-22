import React from 'react';
import List from 'antd/lib/list';
import Avatar from 'antd/lib/avatar';
import styled from 'styled-components';
import data from '../../api/list';

const flex = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
};

function ListItem({ item }) {
  return (
    <div
      style={{
        ...flex,
        ...{
          marginBottom: 2,
          padding: 10,
          backgroundColor: 'white',
          justifyContent: 'space-between',
          flexGrow: 1,
          boxShadow: 'inset 0 -1px 0 0 rgba(255,255,255,0.12)'
        }
      }}
    >
      <div style={{ ...flex, ...{ justifyContent: 'flex-start' } }}>
        <Avatar src="https://randomuser.me/api/portraits/men/78.jpg" />
        <h3 style={{ margin: '0 0 0 10px' }}>{item.title}</h3>
      </div>
      <div>
        <Avatar size="small">U</Avatar>
        <Avatar size="small">U</Avatar>
        <Avatar size="small">U</Avatar>
      </div>
    </div>
  );
}

function ListComponent() {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => <ListItem className="list" item={item} />}
    />
  );
}

export default ListComponent;
