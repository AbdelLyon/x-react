import { CircularProgressProps as CircularProgressProps_2 } from '@nextui-org/react';
import { ForwardRefExoticComponent } from 'react';
import { ProgressProps as ProgressProps_2 } from '@nextui-org/react';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';

declare type AdditionalCircularProgressProps = {
    autoIncrement?: boolean;
    incrementInterval?: number;
    incrementStep?: number;
    onValueChange?: (value: number) => void;
};

declare type AdditionalProgressProps = {
    label?: ReactNode;
    labelPosition?: "top" | "bottom" | "none";
    containerClassName?: string;
    labelClassName?: string;
};

export declare const CircularProgress: ForwardRefExoticComponent<Omit<CircularProgressProps, "ref"> & RefAttributes<HTMLDivElement>>;

declare type CircularProgressProps = Omit<CircularProgressProps_2, "classNames"> & AdditionalCircularProgressProps & {
    classNames?: CircularProgressProps_2["classNames"];
};

export declare const Progress: ForwardRefExoticComponent<Omit<ProgressProps, "ref"> & RefAttributes<HTMLDivElement>>;

declare type ProgressProps = {
    classNames?: ProgressProps_2["classNames"];
} & Omit<ProgressProps_2, "classNames"> & AdditionalProgressProps;

export { }
