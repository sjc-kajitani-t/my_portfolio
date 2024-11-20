import dayjs, { Dayjs } from 'dayjs';

export const calculatePeriod = (startDate: Dayjs, endDate: Dayjs) => {
  const duration = dayjs.duration(endDate.diff(startDate));
  const years = duration.years();
  const months = duration.months();
  return `${years}年${months}ヵ月`;
};

export const formtDateAsYYYYMM = (date: Dayjs) => {
  return date.format('YYYY年MM月');
};
