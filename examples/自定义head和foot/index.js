import React, { useState, Fragment, useMemo, useCallback } from 'react';
import DayPicker from '../../src';
import {$D6, $D4, $D10} from '@beisen-phoenix/style-token';
import './style.css'
import StatusTip from './statusTips'

export const dayTips = [
  { text: '补交', color: $D6 },
  { text: '未交', color: $D4 },
  { text: '已交', color: $D10 }
];
const weekText=['Sun', 'Mon','Thu', 'Wen', 'Thi', 'Fri','Sat']

export default () => {
  const [tip, setTip] = useState('你啥也没点呢');
  const [date, setDate] = useState();
  const handleDateClick = function(dt) {
    setTip(`${dt.year()}-${dt.month() + 1}-${dt.date()}`);
  };


  const renderFoot = useCallback(()=>{
    return dayTips.map(item => {
      return <StatusTip key={item.color} color={item.color} text={item.text} />
    })
  },[])

  const renderHead = useCallback((dt) => {
    return <Fragment>
      {`${dt.year()}/${dt.month()}`}
    </Fragment>
  },[])


  return (
    <Fragment>
      <div>自定义渲染Head和foot</div>
      <br/>
      <DayPicker
        onSelect={handleDateClick}
        value={date}
        onChange={setDate}
        renderFoot={renderFoot}
        renderHead={renderHead}
        showCurrent={false}
        weekText={weekText}
      />
      <br />
      <div>
        <span>{tip}</span>
      </div>
    </Fragment>
  );
};
