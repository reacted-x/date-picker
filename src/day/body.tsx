import React, { useMemo } from 'react';
import { SCCalendarBody, SCDayWeekItemWrap, SCDayDateWrap} from '../dayAsBase.st';
import useMonthDay from '../hooks/useMonthDay';
import {Dayjs} from 'dayjs';
import { TCallback, TRenderDayProps } from '../interfaces';
import DayItem from './dateItem';

const DayContent: React.FunctionComponent<{
  date: Dayjs; //日历当前显示的月分
  onSelect?: TCallback;
  renderCell? : TRenderDayProps;
  weekText: string[];
  start: Dayjs;
  end: Dayjs;
}> = ({ date, onSelect, renderCell, weekText, start, end }) => {
  const { start:CalStart, end:CalEnd } = useMonthDay(date);
  let displayDate = CalStart;
  const dayListEls = useMemo(() => {
    let els: JSX.Element[] = weekText.map((item, index) => {
      return <SCDayWeekItemWrap key={`w${index}`}>{item}</SCDayWeekItemWrap>;
    });
    while (displayDate.isBefore(CalEnd)) {
      els.push(
        <SCDayDateWrap key={displayDate.unix()}>
        <DayItem
          itemDate={displayDate}
          date={date}
          onClick={onSelect}
          renderCell={renderCell}
          start={start}
          end={end}
        />
        </SCDayDateWrap>
      );
      displayDate = displayDate.add(1, 'day');
    }
    return els;
  }, [displayDate, start, end, renderCell, displayDate, date, onSelect, weekText]);
  return <SCCalendarBody>{dayListEls}</SCCalendarBody>;
};

export default DayContent;
