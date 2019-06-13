import dayjs from 'dayjs';
import { useMemo } from 'react';

export default function useYearMonth(day:dayjs.Dayjs): {start: dayjs.Dayjs, end: dayjs.Dayjs}{
  const result = useMemo(() => {
    let start = day.startOf('year');
    let end = day.endOf('year');
    return {start, end};
  }, [day.year(), day.month()])
  return result;
}