import { CircularProgressProps as NextUICircularProgressProps } from '@nextui-org/react';
import { Color, Size } from '../types/types';
interface CircularProgressProps extends Omit<NextUICircularProgressProps, "color" | "size"> {
    color?: Color;
    size?: Size;
    strokeWidth?: number;
    label?: string;
    valueLabel?: React.ReactNode;
    showValueLabel?: boolean;
    formatOptions?: Intl.NumberFormatOptions;
    value?: number;
    minValue?: number;
    maxValue?: number;
    isIndeterminate?: boolean;
    isStriped?: boolean;
    autoIncrement?: boolean;
    incrementInterval?: number;
    incrementStep?: number;
    className?: string;
    classNames?: Partial<Record<"base" | "svgWrapper" | "svg" | "track" | "indicator" | "label" | "value" | "labelWrapper", string>>;
    onValueChange?: (value: number) => void;
}
export declare const CircularProgress: import('react').ForwardRefExoticComponent<Omit<CircularProgressProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export {};
