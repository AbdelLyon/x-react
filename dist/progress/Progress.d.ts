import { ReactNode } from 'react';
import { ProgressProps as NextUIProgressProps } from '@nextui-org/react';
interface AdditionalProgressProps {
    label?: ReactNode;
    labelposition?: "top" | "bottom" | "none";
    containerClassName?: string;
    labelClassName?: string;
}
interface ProgressProps extends NextUIProgressProps, AdditionalProgressProps {
}
export declare const Progress: import('react').ForwardRefExoticComponent<Omit<ProgressProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export {};
