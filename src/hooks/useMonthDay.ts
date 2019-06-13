import dayjs from 'dayjs';
import { useMemo } from 'react';

export default function useMonthDay(day:dayjs.Dayjs): {start: dayjs.Dayjs, end: dayjs.Dayjs}{
  const result = useMemo(() => {
    let start = day.startOf('month').startOf('week');
    let end = day.endOf('month').endOf('week');
    return {start, end};
  }, [day.year(), day.month()])
  return result;
}