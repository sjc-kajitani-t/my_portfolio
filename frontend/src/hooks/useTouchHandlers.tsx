import { NavigateFunction } from 'react-router-dom';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';

export const calculatePeriod = (startDate: Dayjs, endDate: Dayjs) => {
  const duration = dayjs.duration(endDate.diff(startDate));
  const years = duration.years();
  const months = duration.months();
  return `${years}年${months}ヵ月`;
};

export const formtDateAsYYYYMM = (date: Dayjs) => {
  return date.format('YYYY年MM月');
};

export const useTouchHandlers = (navigate: NavigateFunction, destination: string) => {
  const [startY, setStartY] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endY = e.changedTouches[0].clientY;
    if (startY - endY > 100) {
      navigate(destination);
    }
  };

  return { handleTouchStart, handleTouchEnd };
};
