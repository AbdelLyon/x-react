import { InputProps as InputRootProps } from '@nextui-org/react';
type InputProps = InputRootProps & {
    containerClasses?: string;
    customValidation?: (value: string) => boolean | string;
};
export declare const Input: import('react').ForwardRefExoticComponent<Omit<InputProps, "ref"> & import('react').RefAttributes<HTMLInputElement>>;
export {};