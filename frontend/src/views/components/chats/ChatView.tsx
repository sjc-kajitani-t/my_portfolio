import React from 'react';
import { Space } from 'antd-mobile';
import { ChatText } from './ChatText';

interface ChatViewProps {
  messages: { position: string; content: string }[];
}

export const ChatView: React.FC<ChatViewProps> = ({ messages }) => {
  return (
    <Space direction="vertical" style={{ flex: 1, overflowY: 'auto', padding: '10px' }}>
      {messages.map((message, index) => (
        <ChatText key={index} content={message.content} position={message.position} />
      ))}
    </Space>
  );
};
