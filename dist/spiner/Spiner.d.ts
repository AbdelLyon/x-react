import { SpinnerProps as NextUISpinnerProps } from '@nextui-org/react';
type SpinnerColor = "default" | "primary" | "secondary" | "success" | "warning" | "danger";
type SpinnerSize = "sm" | "md" | "lg";
interface SpinnerProps extends Omit<NextUISpinnerProps, "label" | "labelColor"> {
    color?: SpinnerColor;
    size?: SpinnerSize;
    disableAnimation?: boolean;
    strokeWidth?: number;
}
export declare const Spinner: import('react').ForwardRefExoticComponent<Omit<SpinnerProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export {};
