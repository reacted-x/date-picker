import React, { useState, Fragment, useCallback } from 'react';
import DayPicker, { DPickerDataType } from '../../src';
import D51 from './51.png';
import DDw from './dw.png';
import dayjs from 'dayjs';
import './style.css';

const holiday = [
  { date: dayjs('2019-5-1'), img: D51 },
  { date: dayjs('2019-06-07'), img: DDw }
];

const timeRange = {
  start: '2000-06-01',
  end: '2020-12-01'
};

export default () => {
  const [tip, setTip] = useState('你啥也没点呢');
  const [date, setDate] = useState();
  const handleDateClick = function(dt) {
    setTip(`${dt.year()}-${dt.month() + 1}-${dt.date()}`);
  };

  const renderCell = useCallback(function({
    defaultEl,
    date,
    itemDate,
    handleClick
  }) {
    let idx = holiday.findIndex(item => item.date.isSame(itemDate, 'day'));
    if (idx === -1) {
      //如果是周未
      if (itemDate.day() === 0 || itemDate.day() === 6) {
        //如果是当前月份
        if (itemDate.isSame(date, 'month'))
          return <span style={{ color: 'red' }}>{itemDate.date()}</span>;
      }
      return defaultEl;
    }
    //如果是节日就显示成节日的图片
    return (
      <img
        onClick={handleClick}
        src={holiday[idx].img}
        style={{ height: 20, width: 20 }}
      />
    );
  },
  []);

  return (
    <Fragment>
      <div>
        通过自定义渲染，显示把今年的51和端午显示成对应的节日图片，并且，本月周末显示成红色字
      </div>
      <br />
      <DayPicker
        dateRange={timeRange}
        onSelect={handleDateClick}
        renderCell={renderCell}
        value={date}
        onChange={setDate}
        size={500}
      />
      <br />
      <div>
        <span>{tip}</span>
      </div>
    </Fragment>
  );
};
