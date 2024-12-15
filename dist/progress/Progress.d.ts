import { ReactNode } from 'react';
import { ProgressProps as NextUIProgressProps } from '@nextui-org/react';
type ProgressSize = "sm" | "md" | "lg";
type ProgressColor = "default" | "primary" | "secondary" | "success" | "warning" | "danger";
type ProgressRadius = "none" | "sm" | "md" | "lg" | "full";
interface ProgressProps extends NextUIProgressProps {
    label?: ReactNode;
    labelPosition?: "top" | "bottom" | "none";
    size?: ProgressSize;
    color?: ProgressColor;
    radius?: ProgressRadius;
    value?: number;
    minValue?: number;
    maxValue?: number;
    formatOptions?: Intl.NumberFormatOptions;
    valueLabel?: ReactNode;
    showValueLabel?: boolean;
    isIndeterminate?: boolean;
    isStriped?: boolean;
    isDisabled?: boolean;
    disableAnimation?: boolean;
    containerClassName?: string;
    labelClassName?: string;
    classNames?: Partial<Record<"base" | "labelWrapper" | "label" | "track" | "value" | "indicator", string>>;
}
export declare const Progress: import('react').ForwardRefExoticComponent<Omit<ProgressProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export {};
