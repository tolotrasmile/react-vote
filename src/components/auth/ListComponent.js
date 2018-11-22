import React from 'react';
import List from 'antd/lib/list';
import Avatar from 'antd/lib/avatar'

const data = [
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 1'
  }
];

function ListItem ({ item }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', margin: 10,
      boxShadow: '0 0 20px #f0f1f2', padding: 20, borderRadius: 10 }}>
      <Avatar style={{ width: 50, height: 50 }} src="https://randomuser.me/api/portraits/men/78.jpg" />
      <h3 style={{margin: '0 0 0 10px'}}>{item.title}</h3>
    </div>
  )
}

function ListComponent () {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (<ListItem item={item} />)}
    />
  );
}

export default ListComponent;