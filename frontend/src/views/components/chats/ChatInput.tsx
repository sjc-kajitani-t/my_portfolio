import React from 'react';
import { TextArea, Button } from 'antd-mobile';

interface ChatInputProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  handleSend: () => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ inputValue, setInputValue, handleSend }) => {
  return (
    <div
      style={{
        width: '100%',
        padding: '10px',
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
      }}
    >
      <TextArea
        value={inputValue}
        onChange={(val) => setInputValue(val)}
        placeholder="メッセージを入力"
        style={{
          flex: 1,
          marginRight: '10px',
          boxSizing: 'border-box',
          borderRadius: '30px',
          padding: '10px',
          border: '1px solid #5d8db6',
          height: 'auto',
        }}
        autoSize={{ minRows: 1, maxRows: 1 }}
      />
      <Button color="primary" onClick={handleSend}>
        送信
      </Button>
    </div>
  );
};
