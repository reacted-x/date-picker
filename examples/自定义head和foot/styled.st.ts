import styled from 'styled-components';
import {$Fs1, $Sp6, $LhFn, $FsN1, $Sp2} from '@beisen-phoenix/style-token';

const tipCircle = 6;
const nsp2 = parseInt($Sp2);
export const SCTipItem = styled.div`
  float: right;
  position: relative;
  padding-left: ${nsp2 + tipCircle}px;
  ${$Fs1};
  text-align:right;
  margin-left: ${$Sp6};
  :last-child {
    margin-left: 0;
  }
`;

export const SCTipCircle = styled.div<{color: string}>`
  height: ${tipCircle}px;
  width: ${tipCircle}px;
  border-radius: 50%;
  position: absolute;
  left:0;
  top: ${($LhFn($FsN1) - tipCircle)/2}px;
  background-color: ${props=>props.color};
`;