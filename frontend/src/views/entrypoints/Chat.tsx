import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { ChatView } from '../components/chats/ChatView';
import { ChatInput } from '../components/chats/ChatInput';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { GetMyInfoDocument, GetMyInfoQuery } from '../../generated';
import { calculatePeriod, formtDateAsYYYYMM } from '../../utils/utils';
import { useTouchHandlers } from '../../hooks/useTouchHandlers';
import { useNavigate } from 'react-router-dom';
import { FloatingBubble } from 'antd-mobile';
import { DeleteOutline } from 'antd-mobile-icons';

dayjs.extend(duration);

const defaultMessages = [
  {
    position: 'left',
    content: '以下の言葉を入力してね！\n・自己紹介\n・業務経歴\n・スキル',
  },
];

export const Chat: React.FC = () => {
  const { data } = useQuery<GetMyInfoQuery>(GetMyInfoDocument);
  const navigate = useNavigate();
  const { handleTouchStart, handleTouchEnd } = useTouchHandlers(navigate, '/home');
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<{ position: string; content: string }[]>(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    return savedMessages ? JSON.parse(savedMessages) : defaultMessages;
  });

  const saveMessagesToLocalStorage = (chatMessages: { position: string; content: string }[]) => {
    localStorage.setItem('chatMessages', JSON.stringify(chatMessages));
  };

  // 自己紹介に関する情報を整形して返却する
  const formatEmployeeIntroduction = (myInfo: GetMyInfoQuery['myInfo']) => {
    return `名前: ${myInfo.name}\n年齢: ${myInfo.age}\n性別: ${myInfo.sex}`;
  };

  // 業務経歴に関する情報を整形して返却する
  const formatCareerHistory = (myInfo: GetMyInfoQuery['myInfo']) => {
    const careerPeriod = calculatePeriod(
      dayjs(myInfo.career.start_date),
      dayjs(myInfo.career.end_date)
    );
    const products = myInfo.products
      .map((product) => {
        const productDuration = `${formtDateAsYYYYMM(dayjs(product.start_date))} ~ ${formtDateAsYYYYMM(dayjs(product.end_date))}`;
        return `プロダクト名: ${product.name}\n概要: ${product.description}\n期間: ${productDuration}`;
      })
      .join('\n===\n');

    return `業務歴: ${careerPeriod}\n\n${products}`;
  };

  // 技術に関する情報を整形して返却する
  const formatSkills = (myInfo: GetMyInfoQuery['myInfo']) => {
    return myInfo.skills.map((skill) => `${skill.name}: ${skill.version}`).join(', ');
  };

  const handleSend = () => {
    // 入力メッセージをローカルストレージに保存する
    const userMessage = { position: 'right', content: inputValue };
    setMessages((prevMessages) => {
      const newMessages = [...prevMessages, userMessage];
      saveMessagesToLocalStorage(newMessages);
      return newMessages;
    });

    // 入力メッセージに応じた返答を生成する
    if (data && data.myInfo) {
      const myInfo = data.myInfo;
      let apiMessageContent = '';

      if (inputValue.includes('自己紹介')) {
        apiMessageContent = formatEmployeeIntroduction(myInfo);
      } else if (inputValue.includes('業務経歴')) {
        apiMessageContent = formatCareerHistory(myInfo);
      } else if (inputValue.includes('スキル')) {
        apiMessageContent = formatSkills(myInfo);
      } else {
        apiMessageContent = defaultMessages[0].content;
      }

      // 出力メッセージをローカルストレージに保存する
      const apiMessage = { position: 'left', content: apiMessageContent };
      setMessages((prevMessages) => {
        const newMessages = [...prevMessages, apiMessage];
        saveMessagesToLocalStorage(newMessages);
        return newMessages;
      });
    }

    setInputValue('');
  };

  const handleDeleteLogs = () => {
    localStorage.removeItem('chatMessages');
    setMessages(defaultMessages);
  };

  return (
    <div
      style={{
        backgroundColor: '#5d8db6',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <FloatingBubble
        style={{
          '--background': '#5d8db6',
          '--initial-position-top': '16px',
          '--initial-position-right': '16px',
          '--edge-distance': '16px',
        }}
        onClick={handleDeleteLogs}
      >
        <DeleteOutline fontSize={24} />
      </FloatingBubble>
      {/* チャット表示エリア */}
      <ChatView messages={messages} />

      {/* テキスト入力エリア */}
      <ChatInput inputValue={inputValue} setInputValue={setInputValue} handleSend={handleSend} />
    </div>
  );
};
