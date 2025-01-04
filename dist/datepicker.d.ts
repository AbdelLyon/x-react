import { DatePickerProps as DatePickerProps_2 } from '@nextui-org/react';
import { DateRangePickerProps as DateRangePickerProps_2 } from '@nextui-org/react';
import { DateValue } from '@nextui-org/react';
import { ForwardRefExoticComponent } from 'react';
import { RefAttributes } from 'react';

declare type BaseProps = {
    containerClasses?: string;
    variant?: "bordered" | "flat" | "faded" | "underlined";
    color?: string;
    size?: string;
    radius?: string;
    labelPlacement?: string;
    fullWidth?: boolean;
    isRequired?: boolean;
    isReadOnly?: boolean;
    isDisabled?: boolean;
};

export declare const DatePicker: ForwardRefExoticComponent<Omit<DatePickerProps, "ref"> & RefAttributes<HTMLDivElement>>;

declare type DatePickerProps = DatePickerProps_2 & BaseProps & {
    customValidation?: (value: Date | null) => boolean | string;
};

export declare const DateRangePicker: ForwardRefExoticComponent<Omit<DateRangePickerProps, "ref"> & RefAttributes<HTMLDivElement>>;

declare type DateRangePickerProps = DateRangePickerProps_2 & BaseProps;

export { DateValue }

export { }
