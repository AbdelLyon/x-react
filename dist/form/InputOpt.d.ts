import { InputOtpProps } from '@nextui-org/input-otp';
type InputOtpWrapperProps = {
    length?: number;
    label?: string;
    labelClasses?: string;
    containerClasses?: string;
} & Omit<InputOtpProps, "length">;
export declare const InputOtp: import('react').ForwardRefExoticComponent<Omit<InputOtpWrapperProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export {};
