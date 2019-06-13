import {useMemo} from 'react';
import dayjs from 'dayjs';
import {TDateRange} from '../interfaces';

export default function useRange(dateRange:TDateRange){
  return useMemo(() => {
    let { start, end } = dateRange;
    let fixedStart = dayjs(start || '1970-01-01');
    let fixedEnd = dayjs(end);
    return { start: fixedStart, end: fixedEnd };
  }, [dateRange.start, dateRange.end]);
}