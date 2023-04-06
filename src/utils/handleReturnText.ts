import dayjs from 'dayjs';

export const handleReturnText = (data: any, isDate?: boolean) => {
  if (isDate) {
    if (data) {
      return dayjs(data).format('YYYY-MM-DD HH:mm:ss.SSS');
    } else {
      return '--';
    }
  }

  if (data) {
    return data;
  } else {
    return '--';
  }
};
