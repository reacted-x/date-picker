import styled from 'styled-components';
import {$Sp6, $Sp4, $Fs2, $Ra5, $M1, $M7, $Sp5} from '@beisen-phoenix/style-token';
import {nsp6, CSSWrap, CSSBFC, nsp5} from '../dayAsBase.st';

export const SCMonthItem = styled.div`
  ${$Fs2};
  text-align: center;
  height: 26px;
  line-height: 25px;
  border-radius: ${$Ra5};
  color: ${$M1};
  box-sizing: border-box;
`;

export const SCMonthItemWrap = styled.div`
  float: left;
  margin-right: ${$Sp6};
  margin-bottom: ${$Sp5};
  margin-top: ${nsp6 - nsp5}px;
  :nth-child(3n) {
    margin-right: 0;
  }
`;

export const SCWMonthWrap = styled.div<{ width: number }>`
  ${CSSWrap}
  width: ${props => props.width - nsp6 * 2 }px;
  padding: ${$Sp4} ${$Sp6};
  ${SCMonthItemWrap} {
    width: ${props => (props.width - nsp6 * 2 - nsp6 * 2) /3}px; 
  }
`;