import React from 'react';
import { Avatar, Card, Space } from 'antd-mobile';

interface ChatTextProps {
  content: string;
  position: string;
}

const getPositionStyle = (position: string): React.CSSProperties => {
  return position === 'left'
    ? { display: 'flex', justifyContent: 'flex-start', width: '100%' }
    : { display: 'flex', justifyContent: 'flex-end', width: '100%' };
};

const getCardStyle = (position: string): React.CSSProperties => {
  return position === 'left' ? { backgroundColor: '#ffffff' } : { backgroundColor: '#40c003' };
};

export const ChatText = ({ content, position }: ChatTextProps) => {
  return (
    <Space style={getPositionStyle(position)}>
      {position === 'left' && <Avatar src="" style={{ '--size': '32px' }} />}
      <Card style={getCardStyle(position)}>
        {content.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </Card>
    </Space>
  );
};
