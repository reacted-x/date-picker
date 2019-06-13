import React, { useCallback } from 'react';
import { Dayjs } from 'dayjs';
import { TRenderWeekProps, TWeekCallback } from '../interfaces';
import {
  SCWeekItem,
  SCWeekItemWeek,
  SCWeekItemDate
} from './styled.st';
import { CNNumber } from '../const';

const WeekItem: React.FunctionComponent<{
  itemDate: Dayjs;
  date: Dayjs;
  renderCell?: TRenderWeekProps;
  weekIndex: number;
  start: Dayjs;
  end: Dayjs;
  onClick?: TWeekCallback;
  idx: number
}> = ({ itemDate, weekIndex, date, renderCell, start, end, onClick, idx }) => {
  let endOfWeek = itemDate.endOf('week');
  let isCurrent = itemDate.isSame(date.startOf('week'), 'day');
  let isDisabled = itemDate.isBefore(start.startOf('week'),'day') || itemDate.isAfter(end.endOf('week'),'day');
  const handleClick = useCallback(() => {
    if(typeof onClick==='function' && !isDisabled)
      onClick(itemDate, idx);
  },[itemDate, idx])
  const st:React.CSSProperties = {};
  if(!isDisabled) st.cursor = 'pointer';
  let defaultCell =  (
    <SCWeekItem onClick={handleClick} current={isCurrent} disabled={isDisabled} style={st}>
      <SCWeekItemWeek>{`第${CNNumber[weekIndex]}周`}</SCWeekItemWeek>
      <SCWeekItemDate>{`${itemDate.format('MM/DD')}-${endOfWeek.format(
        'MM/DD'
      )}`}</SCWeekItemDate>
    </SCWeekItem>
  );
  if(typeof renderCell === 'function'){
    return renderCell({itemDate, date, handleClick, defaultEl: defaultCell, index: idx});
  }
  return defaultCell;
};

export default WeekItem;
