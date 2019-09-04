import React, { useMemo } from 'react';
import { SCDayFootWrap, SCToday, SCDayFootBox } from '../dayAsBase.st';
import { TRenderLayoutProps } from '../interfaces';
import { Dayjs } from 'dayjs';

const DayFoot: React.FunctionComponent<{
  onReset: () => void;
  renderFoot?: TRenderLayoutProps;
  date: Dayjs;
  showCurrent: boolean;
  currentText: string;
}> = ({ onReset, renderFoot, date, showCurrent, currentText }) => {

  const footEls = useMemo(() => {
    if (typeof renderFoot === 'function')
      return renderFoot(date);
    return null;
  }, [renderFoot, date]);

  return (
    <SCDayFootWrap>
      <SCDayFootBox hasCustomEl={!!footEls}>
        {showCurrent && <SCToday onClick={onReset}>{currentText}</SCToday>}
        {footEls}
      </SCDayFootBox>
    </SCDayFootWrap>
  );
};

export default DayFoot;
