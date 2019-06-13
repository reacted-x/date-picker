import React, { useCallback, useMemo, Fragment } from 'react';
import { SCHeader } from '../dayAsBase.st';
import { Left, DoubleLeft, Right, DoubleRight } from '@beisen-phoenix/icon';
import { iconClassName, disabledClass } from '../const';
import { TCallback, TRenderLayoutProps } from '../interfaces';
import { OpUnitType, Dayjs } from 'dayjs';

const DayHead: React.FunctionComponent<{
  onChange?: TCallback;
  date: Dayjs;
  start: Dayjs;
  end: Dayjs;
  renderHead?:TRenderLayoutProps
}> = ({ onChange, date, start, end, renderHead }) => {
  const reduceMonthClickable = date.isAfter(start,'month');
  const reduceYearClickable = date.isAfter(start,'year');
  const addMonthClickable = date.isBefore(end, 'month');
  const addYearClickable = date.isBefore(end, 'year');
  const handleChange = useCallback(
    (num: number, type: OpUnitType) => {
      if(typeof onChange === "function") {
        let newDate = date.add(num, type)
        if(newDate.isBefore(start,'month')) newDate = start;
        if(newDate.isAfter(end,'month')) newDate = end;
        onChange(newDate);
      }
    },
    [date]
  );

  const handleAddMonth = useCallback(() => {
    if (addMonthClickable) handleChange(1, 'month');
  }, [handleChange]);

  const handleAddYear = useCallback(() => {
    if (addYearClickable) handleChange(1, 'year');
  }, [handleChange]);

  const handleReduceMonth = useCallback(() => {
    if (reduceMonthClickable) handleChange(-1, 'month');
  }, [handleChange]);

  const handleReduceYear = useCallback(() => {
    if (reduceYearClickable) handleChange(-1, 'year');
  }, [handleChange]);

  let headEl = useMemo(() => {
    if(typeof renderHead === 'function') return renderHead(date);
    return <Fragment>
      <span>{`${date.year()}年`}</span>
      <span>{`${date.month() + 1}月`}</span>
    </Fragment>
  }, [renderHead, date])

  return (
    <SCHeader>
      <Left
        className={`${iconClassName.left}${
          reduceMonthClickable ? '' : ` ${disabledClass}`
        }`}
        onClick={handleReduceMonth}
      />
      <DoubleLeft
        className={`${iconClassName.dblLeft}${
          reduceYearClickable ? '' : ` ${disabledClass}`
        }`}
        onClick={handleReduceYear}
      />
      <Right
        className={`${iconClassName.right}${
          addMonthClickable ? '' : ` ${disabledClass}`
        }`}
        onClick={handleAddMonth}
      />
      <DoubleRight
        className={`${iconClassName.dblRight}${
          addYearClickable ? '' : ` ${disabledClass}`
        }`}
        onClick={handleAddYear}
      />
      {headEl}
    </SCHeader>
  );
};

export default DayHead;
