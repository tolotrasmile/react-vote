import React, { useRef } from 'react';
import List from 'antd/lib/list';
import Avatar from 'antd/lib/avatar';
import data from '../../api/list';
import Icon from 'antd/lib/icon/';
import Expendable from '../Expandable'

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

function ListItem ({ item }) {
  const contentRef = useRef(null);
  return (
    <Expendable
      contentRef={contentRef}
      content={
        <h1 ref={contentRef} style={{ padding: 10, backgroundColor: 'red' }}>
          {item.title}
        </h1>
      }>
      {(toggle, open) => (
        <div
          style={{
            ...flex,
            ...{
              marginBottom: 2,
              padding: 20,
              backgroundColor: 'white',
              justifyContent: 'space-between',
              flexGrow: 2,
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
            <h4 style={{ margin: '0 0 0 10px' }}>{item.title} {JSON.stringify(open)}</h4>
          </div>
          <div>
            <LeftButton>B</LeftButton>
            <LeftButton>C</LeftButton>
            <LeftButton onClick={toggle}>
              <Icon size="large" type={open ? 'caret-up' : 'caret-down'} />
            </LeftButton>
          </div>
        </div>
      )}
    </Expendable>
  );
}

function ListComponent () {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => <ListItem className="list" item={item} />}
    />
  );
}

export default ListComponent;
