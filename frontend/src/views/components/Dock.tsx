import React from 'react';
import { Card } from 'antd-mobile';

interface DockProps {
  items: JSX.Element[];
}

export const Dock = ({ items }: DockProps) => {
  return (
    <Card style={{ backgroundColor: 'gray', height: '100%' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: '100%',
        }}
      >
        {items.map((item, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
            {item}
          </div>
        ))}
      </div>
    </Card>
  );
};
