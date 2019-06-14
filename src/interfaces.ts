import { Dayjs, ConfigType } from 'dayjs';
import { ReactElement } from 'react';

export type TCallback = (dt: Dayjs) => void;
export type TWeekCallback = (dt: Dayjs, index: number) => void;
// export type TOnClick = (dt: Dayjs) => void;
export type DPickerDataType = ConfigType;

interface TRenderCellProps {
  itemDate: Dayjs;
  date: Dayjs;
  handleClick: () => void;
  defaultEl: ReactElement;
}

export type TRenderDayProps = (params: TRenderCellProps) => ReactElement;

export type TRenderWeekProps = (params: TRenderCellProps & {index: number}) => ReactElement;

export type TRenderLayoutProps = (currentDate:Dayjs) => ReactElement;

export type TRenderAllCellProp = (dt: Dayjs) => JSX.Element[];

export interface TDateRange {
  //日期范围
  start?: DPickerDataType; //可选的最早日期
  end?: DPickerDataType; //可选的最晚日期
}

interface IBaseProps {
  value?: DPickerDataType;
  renderFoot?: TRenderLayoutProps;
  renderHead?: TRenderLayoutProps;
  onChange?: TCallback;
  showCurrent?: boolean;
  currentText?: string;
  size?: number;
  dateRange?: TDateRange;
}

export interface IDayProps extends IBaseProps {
  onSelect?: TCallback; // 点击每个时间单元的回调，返回当前日期的dayjs弘远是
  weekText?: string[];
  renderCell?: TRenderDayProps; //渲染每一项的方法，内置只做简单渲染
}
export interface IWeekProps extends IBaseProps {
  renderCells?: TRenderAllCellProp;
  onSelect?: TWeekCallback; // 点击每个时间单元的回调，返回当前日期的dayjs弘远是
  renderCell?: TRenderWeekProps; //渲染每一项的方法，内置只做简单渲染
}
