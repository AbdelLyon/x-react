import { SwitchProps as SwitchRootProp } from '@nextui-org/react';
interface SwitchProps extends SwitchRootProp {
    width?: string | number;
    height?: string | number;
}
export declare const Switch: import('react').ForwardRefExoticComponent<Omit<SwitchProps, "ref"> & import('react').RefAttributes<HTMLInputElement>>;
export {};
