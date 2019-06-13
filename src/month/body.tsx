import React, { useMemo } from 'react';
import { SCCalendarBody } from '../dayAsBase.st';
import useYearMonth from '../hooks/useYearMonth';
import { Dayjs } from 'dayjs';
import { TCallback, TRenderDayProps } from '../interfaces';
import MonthItem from './monthItem';
import {SCMonthItemWrap} from './styled.st';

const DayContent: React.FunctionComponent<{
  date: Dayjs; //日历当前显示的月分
  onSelect?: TCallback;
  renderCell?: TRenderDayProps;
  start: Dayjs;
  end: Dayjs;
}> = ({ date, onSelect, renderCell, start, end }) => {
  const { start: CalStart, end: CalEnd } = useYearMonth(date);
  let displayDate = CalStart;
  const dayListEls = useMemo(() => {
    let els: JSX.Element[] = [];
    while (displayDate.isBefore(CalEnd)) {
      els.push(
        <SCMonthItemWrap key={displayDate.unix()}>
          <MonthItem
            itemDate={displayDate}
            date={date}
            onClick={onSelect}
            renderCell={renderCell}
            start={start}
            end={end}
          />
        </SCMonthItemWrap>
      );
      displayDate = displayDate.add(1, 'month');
    }
    return els;
  }, [displayDate, start, end, renderCell, onSelect, displayDate, date]);
  return <SCCalendarBody>{dayListEls}</SCCalendarBody>;
};

export default DayContent;
