import React, { useCallback } from 'react';
import { IDayProps } from '../interfaces';
import useRange from '../hooks/useRange';
import Head from './head';
import Body from './body';
import Foot from '../shared/foot';
import dayjs from 'dayjs';
import {SCWMonthWrap} from './styled.st';

export const Month: React.FunctionComponent<IDayProps> = ({
  value,
  onSelect,
  renderCell,
  dateRange = {},
  onChange,
  renderFoot,
  renderHead,
  showCurrent=true,
  currentText="本年",
  size=260
}) => {

  if(!dayjs.isDayjs(value)) value = dayjs(value);

  //重置时间为今天
  const handleReset = useCallback(() => {
    if (typeof onChange === 'function') onChange(dayjs());
  }, []);

  const fixedRange = useRange(dateRange);

  return (
    <SCWMonthWrap width={size}>
      <Head onChange={onChange} date={value} {...fixedRange} renderHead={renderHead}/>
      <Body
        date={value}
        onSelect={onSelect}
        renderCell={renderCell}
        {...fixedRange}
      />
      <Foot currentText={currentText} showCurrent={showCurrent} onReset={handleReset} date={value} renderFoot={renderFoot} />
    </SCWMonthWrap>
  );
};
