import React,{useCallback} from 'react';
import {IWeekProps} from '../interfaces';
import {WeekWrap} from './styled.st';
import useRange from '../hooks/useRange';
import Head from '../shared/head';
import Foot from '../shared/foot';
import dayjs from 'dayjs';
import Body from './body';

export const Week: React.FunctionComponent<IWeekProps> = ({
  value,
  onSelect,
  renderCell,
  dateRange = {},
  onChange,
  renderFoot,
  renderHead,
  showCurrent=true,
  currentText="本周",
  size=260,
  renderCells
}) => {
  if(!dayjs.isDayjs(value)) value = dayjs(value);

  //重置时间为今天
  const handleReset = useCallback(() => {
    if (typeof onSelect === 'function') onSelect(dayjs(),  -1);
  }, []);

  const fixedRange = useRange(dateRange);
  return <WeekWrap width={size}>
      <Head onChange={onChange} date={value} {...fixedRange} renderHead={renderHead} />
      <Body
        date={value}
        onSelect={onSelect}
        renderCell={renderCell}
        renderCells={renderCells}
        {...fixedRange}
      />
      <Foot currentText={currentText} showCurrent={showCurrent} onReset={handleReset} date={value} renderFoot={renderFoot} />
  </WeekWrap>
}
