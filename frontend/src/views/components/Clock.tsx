import React, { useState, useEffect } from 'react';
import { Card } from 'antd-mobile';

interface ClockProps {
  fontFamily?: string;
  fontSize?: 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'default';
  color?: string;
}

const dayOfWeekMap = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];

const fontSizeMap = {
  default: '80px',
  small: '12px',
  medium: '16px',
  large: '24px',
  'x-large': '32px',
  'xx-large': '40px',
};

export const Clock = ({
  fontFamily = 'Arial',
  fontSize = 'default',
  color = 'black',
}: ClockProps) => {
  const [time, setTime] = useState(new Date());

  const formatDate = (date: Date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayOfWeek = dayOfWeekMap[date.getDay()];
    return `${month}月${day}日（${dayOfWeek}）`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Card style={{ backgroundColor: 'transparent' }}>
      <div style={{ textAlign: 'center', fontFamily, fontSize: fontSizeMap['large'], color }}>
        {formatDate(time)}
      </div>
      <div style={{ textAlign: 'center', fontFamily, fontSize: fontSizeMap[fontSize], color }}>
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
    </Card>
  );
};
