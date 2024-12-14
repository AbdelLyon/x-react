import { InputOtpProps } from '@nextui-org/react';
interface InputOtpWrapperProps extends Omit<InputOtpProps, "length"> {
    length?: number;
    label?: string;
    labelClasses?: string;
    containerClasses?: string;
}
export declare const InputOtp: import('react').ForwardRefExoticComponent<Omit<InputOtpWrapperProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export {};
