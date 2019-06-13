import React, { useCallback, memo } from 'react';
import { SCDayDateWrap } from '../dayAsBase.st';
import dayjs, { Dayjs } from 'dayjs';
import { TCallback, TRenderDayProps } from '../interfaces';
import { $M5, $S3 } from '@beisen-phoenix/style-token';
import { DefaultCell } from '../dayAsBase.st';

const DateItem: React.FunctionComponent<{
  itemDate: Dayjs;
  date: Dayjs;
  onClick?: TCallback;
  renderCell?: TRenderDayProps;
  start: Dayjs;
  end: Dayjs;
}> = ({ itemDate, date, onClick, renderCell, start, end }) => {
  const today = dayjs();
  let style: React.CSSProperties = {};
  let itemClickable =
    itemDate.isSame(date, 'month') &&
    !itemDate.isAfter(end, 'day') &&
    !itemDate.isBefore(start, 'day');

  if (!itemClickable) {
    style.color = $M5;
  } else {
    style.cursor = 'pointer';
  }

  if (itemDate.isSame(today, 'day')) {
    style.border = `solid 1px ${$S3}`;
  }

  const handleClick = useCallback(() => {
    if (typeof onClick === 'function' && itemClickable) {
      onClick(itemDate);
    }
  }, [onClick, itemDate]);

  let defaultElement = (
    <DefaultCell onClick={handleClick} style={style}>
      {itemDate.date()}
    </DefaultCell>
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

export default memo(DateItem);
