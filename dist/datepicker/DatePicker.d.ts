import { DatePickerProps as DatePickerRootProps, DateValue } from '@nextui-org/react';
type DatePickerProps = DatePickerRootProps & {
    containerClasses?: string;
    customValidation?: (value: Date | null) => boolean | string;
};
export declare const DatePicker: import('react').ForwardRefExoticComponent<Omit<DatePickerProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export type { DateValue };
