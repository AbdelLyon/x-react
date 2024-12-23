import { TextAreaProps as TextAreaRootProps } from '@nextui-org/react';
interface TextareaProps extends TextAreaRootProps {
    width?: string | number;
    height?: string | number;
}
export declare const Textarea: import('react').ForwardRefExoticComponent<Omit<TextareaProps, "ref"> & import('react').RefAttributes<HTMLTextAreaElement>>;
export {};
