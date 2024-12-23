import { CircularProgressProps as CircularProgressRootProps } from '@nextui-org/react';
interface AdditionalCircularProgressProps {
    autoIncrement?: boolean;
    incrementInterval?: number;
    incrementStep?: number;
    onValueChange?: (value: number) => void;
}
interface CircularProgressProps extends Omit<CircularProgressRootProps, "classNames">, AdditionalCircularProgressProps {
    classNames?: CircularProgressRootProps["classNames"];
}
export declare const CircularProgress: import('react').ForwardRefExoticComponent<Omit<CircularProgressProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export {};
