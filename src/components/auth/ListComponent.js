import React, { useState } from 'react';
import List from 'antd/lib/list';
import Avatar from 'antd/lib/avatar';
import data from '../../api/list';
import Icon from 'antd/lib/icon/';

const flex = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
};

const LeftButton = ({ onCLick, children, ...props }) => {
  return (
    <Avatar style={{ marginLeft: 5 }} size="small" onClick={onCLick} {...props}>
      {children}
    </Avatar>
  );
};

function ListItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        style={{
          ...flex,
          ...{
            marginBottom: 2,
            padding: 20,
            backgroundColor: 'white',
            justifyContent: 'space-between',
            flexGrow: 2,
            borderLeft: open ? '5px solid #25a' : 'none',
            transition: 'border 0.3s ease-in',
            boxShadow: 'inset 0 -1px 0 0 rgba(255,255,255,0.12)'
          }
        }}
      >
        <div
          style={{
            ...flex,
            ...{ justifyContent: 'flex-start' }
          }}
        >
          <Avatar
            size="small"
            src="https://randomuser.me/api/portraits/men/78.jpg"
          />
          <h4 style={{ margin: '0 0 0 10px' }}>{item.title}</h4>
        </div>
        <div>
          <LeftButton>B</LeftButton>
          <LeftButton>C</LeftButton>
          <LeftButton onClick={() => setOpen(!open)}>
            <Icon size="large" type={open ? 'caret-up' : 'caret-down'} />
          </LeftButton>
        </div>
      </div>
      {open && (
        <div
          style={{
            padding: 20,
            opacity: open ? 1 : 0
          }}
        >
          <h1>{item.title}</h1>
        </div>
      )}
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
