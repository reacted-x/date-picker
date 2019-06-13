import React, { useCallback, memo } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { TCallback, TRenderDayProps } from '../interfaces';
import { $M5, $S3 } from '@beisen-phoenix/style-token';
import { SCMonthItem } from './styled.st';
import {CNNumber} from '../const';

const MonthItem: React.FunctionComponent<{
  itemDate: Dayjs;
  date: Dayjs;
  onClick?: TCallback;
  renderCell?: TRenderDayProps;
  start: Dayjs;
  end: Dayjs;
}> = ({ itemDate, date, onClick, renderCell, start, end }) => {
  const today = dayjs();
  let style: React.CSSProperties = {};
  let isDisabled = itemDate.isAfter(end, 'month') || itemDate.isBefore(start, 'month');

  if (isDisabled) {
    style.color = $M5;
  } else {
    style.cursor = 'pointer';
  }

  if (itemDate.isSame(today, 'month')) {
    style.border = `solid 1px ${$S3}`;
  }

  const handleClick = useCallback(() => {
    if (typeof onClick === 'function' && !isDisabled) {
      onClick(itemDate);
    }
  }, [onClick, itemDate]);

  let defaultElement = (
    <SCMonthItem onClick={handleClick} style={style}>
      {`${CNNumber[itemDate.month()]}月`}
    </SCMonthItem>
  );

  if (typeof renderCell === 'function') {
    return renderCell({
      itemDate,
      handleClick,
      defaultEl: defaultElement,
      date
    });
  }

  return defaultElement;
};

export default memo(MonthItem);
