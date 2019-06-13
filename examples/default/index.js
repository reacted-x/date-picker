import React, { Fragment, useState } from 'react';
import DayPicker, { Week, Month } from '../../src';
import dayjs from 'dayjs';

export default () => {
  const [tip, setTip] = useState('你啥也没点呢');
  const [date, setDate] = useState(dayjs());
  const handleDateClick = function(dt) {
    setTip(`${dt.year()}-${dt.month() + 1}-${dt.date()}`);
  };
  const  dateRange = { start: '2018-02-01', end: '2021-6-21' };
  return (
    <Fragment>
      <div style={{ overflow: 'hidden', padding:20 }}>
        <div style={{ float: 'left', marginRight: 20 }}>
          <DayPicker
            dateRange={dateRange}
            onSelect={handleDateClick}
            onChange={setDate}
            value={date}
          />
        </div>
        <div style={{ float: 'left', marginRight: 20 }}>
          <Week 
            dateRange={dateRange}  
            onChange={setDate}
            value={date}
            />
        </div>
        <div style={{ float: 'left' }}>
          <Month 
            dateRange={dateRange}  
            onChange={setDate}
            value={date}
            />
        </div>
      </div>
      <br />
      <div>
        <span>{tip}</span>
      </div>
    </Fragment>
  );
};
