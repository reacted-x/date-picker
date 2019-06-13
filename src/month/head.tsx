import React, { useCallback, useMemo, Fragment } from 'react';
import { SCHeader } from '../dayAsBase.st';
import { DoubleLeft, DoubleRight } from '@beisen-phoenix/icon';
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
  const reduceMonthClickable = date.isAfter(start,'year');
  const addMonthClickable = date.isBefore(end, 'year');
  const handleChange = useCallback(
    (num: number, type: OpUnitType) => {
      if(typeof onChange === "function") onChange(date.add(num, type));
    },
    [date, onChange]
  );

  const handleAddYear = useCallback(() => {
    if (addMonthClickable) handleChange(1, 'year');
  }, [handleChange, addMonthClickable]);


  const handleReduceYear = useCallback(() => {
    if (reduceMonthClickable) handleChange(-1, 'year');
  }, [handleChange, reduceMonthClickable]);

  let headEl = useMemo(() => {
    if(typeof renderHead === 'function') return renderHead(date);
    return <Fragment>
      <span>{`${date.year()}年`}</span>
    </Fragment>
  }, [renderHead, date])

  return (
    <SCHeader>
      <DoubleLeft
        className={`${iconClassName.dblLeft}${
          reduceMonthClickable ? '' : ` ${disabledClass}`
        }`}
        onClick={handleReduceYear}
      />

      <DoubleRight
        className={`${iconClassName.dblRight}${
          addMonthClickable ? '' : ` ${disabledClass}`
        }`}
        onClick={handleAddYear}
      />
      {headEl}
    </SCHeader>
  );
};

export default DayHead;