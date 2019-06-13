import React, { useCallback } from 'react';
import { IDayProps } from '../interfaces';
import { DayWrap } from '../dayAsBase.st';
import {weekDay} from '../const';
import useRange from '../hooks/useRange';
import Head from '../shared/head';
import Body from './body';
import Foot from '../shared/foot';
import dayjs from 'dayjs';

export const Day: React.FunctionComponent<IDayProps> = ({
  value,
  onSelect,
  renderCell,
  dateRange = {},
  onChange,
  renderFoot,
  renderHead,
  showCurrent=true,
  currentText="今天",
  weekText=weekDay,
  size=260
}) => {

  if(!dayjs.isDayjs(value)) value = dayjs(value);

  //重置时间为今天
  const handleReset = useCallback(() => {
    if (typeof onChange === 'function') onChange(dayjs());
  }, []);

  const fixedRange = useRange(dateRange);

  return (
    <DayWrap width={size}>
      <Head onChange={onChange} date={value} {...fixedRange} renderHead={renderHead}/>
      <Body
        date={value}
        onSelect={onSelect}
        renderCell={renderCell}
        weekText={weekText}
        {...fixedRange}
      />
      <Foot currentText={currentText} showCurrent={showCurrent} onReset={handleReset} date={value} renderFoot={renderFoot} />
    </DayWrap>
  );
};

export default Day;
