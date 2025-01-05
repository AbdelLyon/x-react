import { ForwardRefExoticComponent } from 'react';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';
import { SliderProps } from '@nextui-org/react';

declare interface FormatConfig {
    formatOptions?: Intl.NumberFormatOptions;
    formatValue?: (value: number[]) => string;
    renderLabel?: (value: number[]) => ReactNode;
}

export declare const RangeSlider: ForwardRefExoticComponent<RangeSliderProps & RefAttributes<HTMLDivElement>>;

declare interface RangeSliderProps extends FormatConfig, StyleProps {
    sliderProps?: Omit<SliderProps, "value" | "onChange">;
    initialValue?: number[];
    label?: string;
    labelPosition?: "top" | "bottom" | "none";
    onChange?: (value: number[]) => void;
}

declare interface StyleProps {
    containerClassName?: string;
    labelClassName?: string;
}

export { }
