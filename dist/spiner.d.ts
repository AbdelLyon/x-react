import { ForwardRefExoticComponent } from 'react';
import { RefAttributes } from 'react';
import { SpinnerProps as SpinnerProps_2 } from '@nextui-org/react';

declare type BaseColor = "primary" | "secondary" | "success" | "warning" | "danger" | undefined;

declare type Color = "default" | BaseColor;

declare type Size = "sm" | "md" | "lg";

export declare const Spinner: ForwardRefExoticComponent<Omit<SpinnerProps, "ref"> & RefAttributes<HTMLDivElement>>;

declare interface SpinnerProps extends Omit<SpinnerProps_2, "label" | "labelColor"> {
    color?: Color;
    size?: Size;
    disableAnimation?: boolean;
    strokeWidth?: number;
}

export { }
