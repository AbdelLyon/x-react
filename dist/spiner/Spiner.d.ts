import { ReactNode } from 'react';
import { SpinnerProps as NextUISpinnerProps } from '@nextui-org/react';
type SpinnerColor = "default" | "primary" | "secondary" | "success" | "warning" | "danger";
type SpinnerSize = "sm" | "md" | "lg";
type SpinnerLabelPosition = "left" | "right" | "bottom" | "top";
interface SpinnerProps extends Omit<NextUISpinnerProps, "label" | "labelColor"> {
    label?: ReactNode;
    labelPosition?: SpinnerLabelPosition;
    labelColor?: SpinnerColor | "foreground";
    color?: SpinnerColor;
    size?: SpinnerSize;
    containerClassName?: string;
    labelClassName?: string;
    disableAnimation?: boolean;
    strokeWidth?: number;
}
export declare const Spinner: import('react').ForwardRefExoticComponent<Omit<SpinnerProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export {};
