import React from 'react';
import List from 'antd/lib/list';

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

function ListComponent () {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <div>
          <h1>
            {item.title}
          </h1>
          <p>
            Ant Design, a design language for background applications, is refined by Ant UED Team
          </p>
        </div>
      )}
    />
  );
}

export default ListComponent;