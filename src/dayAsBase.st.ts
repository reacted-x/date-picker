import styled, { css } from 'styled-components';
import {
  $Fs1,
  $family,
  $Ra2,
  $M1,
  $M3,
  $M2,
  $M9,
  $Sh2,
  $Sp2,
  $Sp3,
  $Sp4,
  $Sp5,
  $Sp6,
  $M4,
  $M5,
  $M7,
  $S3,
  $FsN2,
  $FsFn,
  $LhFn
} from '@beisen-phoenix/style-token';
import { iconClassName, disabledClass } from './const';

export const iconSize = 12;
export const nsp4 = parseInt($Sp4);
export const nsp5 = parseInt($Sp5);
export const nsp6 = parseInt($Sp6);

export const CSSBFC = css`
  overflow: hidden;
`;

export const CSSWrap = css`
  background-color: ${$M9};
  border-radius: ${$Ra2};
  box-shadow: ${$Sh2};
  font-family: ${$family};
  user-select: none;
`;

const CSSDayItem = css`
  float: left;
  text-align: center;
  margin-right: ${$Sp5};
  margin-bottom: ${$Sp3};
  color: ${$M1};
  :nth-child(7n) {
    margin-right: 0;
  }
  ${$Fs1}
`;

export const SCDayDateWrap = styled.div`
  ${CSSDayItem}
`;

export const SCDayWeekItemWrap = styled.div`
  ${CSSDayItem};
  color: ${$M4};
`;

export const DayWrap = styled.div<{ width: number }>`
  ${CSSWrap}
  width: ${props => props.width - nsp4 * 2}px;
  padding: ${$Sp5} ${$Sp4};
  ${SCDayDateWrap}, ${SCDayWeekItemWrap} {
    ${props => {
      let size = (props.width - parseInt($Sp4) * 2 - nsp5 * 6) / 7;
      return `height:${size}px;width:${size}px;line-height:${size}px`;
    }}
  }
`;

export const SCToday = styled.span`
  color: ${$S3};
  float: left;
  ${$Fs1};
  cursor: pointer;
`;

export const SCHeader = styled.div`
  text-align: center;
  position: relative;
  padding-bottom: ${$Sp2};
  margin-bottom: ${$Sp3};
  height: ${$LhFn($FsN2)}px;
  border-bottom: solid 1px ${$M7};
  color: ${$M2};
  ${$FsFn($FsN2)};
  span + span {
    margin-left: ${$Sp6};
  }
  svg {
    position: absolute;
    top: ${($LhFn($FsN2) - iconSize) / 2}px;
    height: ${iconSize}px;
    width: ${iconSize}px;
    cursor: pointer;
    path:last-child {
      fill: ${$M4};
    }
    :hover {
      path:last-child {
        fill: ${$S3};
      }
    }
  }

  .${disabledClass} {
    path: last-child {
      fill: ${$M5};
    }
    :hover {
      path: last-child {
        fill: ${$M5};
      }
    }
  }

  .${iconClassName.left} {
    left: ${nsp6 + iconSize}px;
  }
  .${iconClassName.dblLeft} {
    left: 0;
  }
  .${iconClassName.right} {
    right: ${nsp6 + iconSize}px;
  }
  .${iconClassName.dblRight} {
    right: 0;
  }
`;

export const SCCalendarBody = styled.div`
  border-bottom: solid 1px ${$M7};
  ${CSSBFC};
`;

export const SCDayFootWrap = styled.div`
  padding-top: ${$Sp5};
`;

export const SCDayFootBox = styled.div`
  position: relative;
  color: ${$M3};
  ${CSSBFC}
`;

export const DefaultCell = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  box-sizing: border-box;
`;

export const SCFootSlot = styled.div`
  float: right;
`;
