import React, { useMemo } from 'react';
import { SCCalendarBody } from '../dayAsBase.st';
import { SCWeekItemWrap } from './styled.st';
import useMonthDay from '../hooks/useMonthDay';
import dayjs, { Dayjs } from 'dayjs';
import { TWeekCallback, TRenderWeekProps, TRenderAllCellProp } from '../interfaces';
import WeekItem from './weekItem';

const DayContent: React.FunctionComponent<{
  date: Dayjs; //日历当前显示的月分
  onSelect?: TWeekCallback;
  renderCell?: TRenderWeekProps;
  start: Dayjs;
  end: Dayjs;
  renderCells?: TRenderAllCellProp;
}> = ({ date, onSelect, renderCell, start, end, renderCells }) => {

  if(typeof renderCells === "function") {
    return <SCCalendarBody>{renderCells(date).map((item, index) => {
      return <SCWeekItemWrap key={index}>
        {item}
      </SCWeekItemWrap>
    })}</SCCalendarBody>;
  }

  const { start: CalStart, end: CalEnd } = useMonthDay(date);
  let displayDate = CalStart;
  const dayListEls = useMemo(() => {
    let els: JSX.Element[] = [];
    let counter = 0;
    while (displayDate.isBefore(CalEnd)) {
      els.push(
        <SCWeekItemWrap key={displayDate.unix()}>
          <WeekItem
            date={dayjs()}
            itemDate={displayDate}
            weekIndex={counter}
            start={start}
            end={end}
            renderCell={renderCell}
            onClick={onSelect}
            idx={counter}
          />
        </SCWeekItemWrap>
      );
      displayDate = displayDate.add(1, 'week');
      counter++;
    }
    return els;
  }, [displayDate, start, end, displayDate, renderCell, onSelect]);
  return <SCCalendarBody>{dayListEls}</SCCalendarBody>;
};

export default DayContent;
