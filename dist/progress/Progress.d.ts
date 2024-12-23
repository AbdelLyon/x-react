import { ReactNode } from 'react';
import { ProgressProps as ProgressRootProps } from '@nextui-org/react';
interface AdditionalProgressProps {
    label?: ReactNode;
    labelPosition?: "top" | "bottom" | "none";
    containerClassName?: string;
    labelClassName?: string;
}
interface ProgressProps extends Omit<ProgressRootProps, "classNames">, AdditionalProgressProps {
    classNames?: ProgressRootProps["classNames"];
}
export declare const Progress: import('react').ForwardRefExoticComponent<Omit<ProgressProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export {};
