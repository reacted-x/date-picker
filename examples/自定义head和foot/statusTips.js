import React from 'react';
import {SCTipItem, SCTipCircle} from './styled.st';

const StatusTip = props => {
  return <SCTipItem>
    <SCTipCircle color={props.color} />{props.text}
  </SCTipItem>
}

export default StatusTip;