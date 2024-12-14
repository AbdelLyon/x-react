import { InputProps as InputRootProps } from '@nextui-org/react';
interface InputWrapperProps extends Omit<InputRootProps, "children"> {
    containerClasses?: string;
    customValidation?: (value: string) => boolean | string;
    type: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
}
export declare const Input: import('react').ForwardRefExoticComponent<Omit<InputWrapperProps, "ref"> & import('react').RefAttributes<HTMLInputElement>>;
export {};
