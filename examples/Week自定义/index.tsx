import React, { useState, Fragment } from 'react';
import { Week, TRenderWeekProps, TRenderAllCellProp } from '../../src/index';
import { Dayjs } from 'dayjs';

export default function() {
  const [date, setDate] = useState<Date | Dayjs>(new Date());
  const [tip, setTip] = useState('')
  // 完全控制周日历内容的渲染
  const renderCells: TRenderAllCellProp = function(dt) {
    return [
      <div>1</div>,
      <div>2</div>,
      <div>3</div>,
      <div>4</div>,
      <div>5</div>
    ];
  };
  const renderCell: TRenderWeekProps = function({ date, index, handleClick }) {
    return <span onClick={handleClick}>{`${date.year()}年${date.month()}月 第${index + 1}周`}</span>;
  };

  const handleSelect=function(dt, index){
    setTip(`点击了第${index + 1}周`)
  }

  const renderFoot = function() {
    return <div>周日历</div>;
  };

  return (
    <Fragment>
      <div>自定义渲染整个body部分, 因为周日历的计算规则可能与业务相关</div>
      <Week
        value={date}
        onChange={setDate}
        showCurrent={false}
        renderCells={renderCells}
        renderFoot={renderFoot}
        onSelect={handleSelect}
      />
      <br />
      <div>自定义渲染每个cell部分</div>
      <Week value={date} onChange={setDate} renderCell={renderCell} onSelect={handleSelect} />
      <br />
      <span>{tip}</span>
    </Fragment>
  );
}
