import { InputProps as InputRootProps } from '@nextui-org/react';
interface InputWrapperProps extends Omit<InputRootProps, "type"> {
    containerClasses?: string;
    customValidation?: (value: string) => boolean | string;
}
export declare const Input: import('react').ForwardRefExoticComponent<Omit<InputWrapperProps & {
    type?: string;
}, "ref"> & import('react').RefAttributes<HTMLInputElement>>;
export {};
