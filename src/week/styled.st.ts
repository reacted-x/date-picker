import styled from 'styled-components';
import {$Sp5, $Sp6, $Ra3, $Sp2, $Sp3, $S3, $Fs1, $S2, $M3, $S5, $M5} from '@beisen-phoenix/style-token';
import {} from '../const';
import {CSSWrap, nsp6} from '../dayAsBase.st';


export const SCWeekItemWeek = styled.span`
  
`;

export const SCWeekItemDate = styled.span`
  margin-left: ${$Sp6}
`;

export const SCWeekItem = styled.div<{current: boolean, disabled:boolean}>`
  height: 30px;
  box-sizing: border-box;
  text-align: center;
  border-radius: ${$Ra3};
  color: ${props => props.disabled ? $M5 : $M3};
  ${$Fs1};
  line-height: 30px;
  border: solid 1px ${props=>props.current ? $S5 : 'transparent'};
  ${SCWeekItemWeek} {
    color: ${props=>props.current ? $S2 : 'inherit'};
  }
  ${SCWeekItemDate} {
    color: ${props=>props.current ? $S3 : 'inherit'};
  }
`;


export const SCWeekItemWrap = styled.div`
  margin-bottom: ${$Sp2};
  :last-child {
    margin-bottom: ${$Sp3};
  }
`;

export const WeekWrap = styled.div<{ width: number }>`
  ${CSSWrap}
  width: ${props => props.width - nsp6 * 2 }px;
  padding: ${$Sp5} ${$Sp6};
  ${SCWeekItemWrap} {
    width: ${props => props.width - nsp6 * 2}px;
  }
`;

