import { DatePickerProps as DatePickerRootProps } from '@nextui-org/react';
import { DateValue } from '@internationalized/date';
import { Color, Radius, Size } from '../types/types';
interface DatePickerProps extends DatePickerRootProps {
    value?: DateValue;
    defaultValue?: DateValue;
    minValue?: DateValue;
    maxValue?: DateValue;
    isDateUnavailable?: (date: DateValue) => boolean;
    onValueChange?: (value: DateValue | null) => void;
    color?: Color;
    radius?: Radius;
    size?: Size;
}
export declare const DatePicker: import('react').ForwardRefExoticComponent<Omit<DatePickerProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export {};
