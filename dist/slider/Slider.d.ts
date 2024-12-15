import { ReactNode } from 'react';
import { SliderProps } from '@nextui-org/react';
interface RangeSliderProps<T extends number[]> {
    sliderProps?: Omit<SliderProps, "value" | "onChange">;
    initialValue?: T;
    formatOptions?: Intl.NumberFormatOptions;
    label?: string;
    labelPosition?: "top" | "bottom" | "none";
    formatValue?: (value: T) => string;
    renderLabel?: (value: T) => ReactNode;
    onChange?: (value: T) => void;
    containerClassName?: string;
    labelClassName?: string;
}
export declare const RangeSlider: import('react').ForwardRefExoticComponent<RangeSliderProps<number[]> & import('react').RefAttributes<HTMLDivElement>>;
export {};
