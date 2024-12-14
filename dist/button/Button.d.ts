import { ButtonProps as NextUIButtonProps } from '@nextui-org/react';
export declare const getButtonVariantStyles: (variant: ButtonVariant) => {
    default: string;
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    danger: string;
} | {
    default: string;
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    danger: string;
} | {
    default: string;
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    danger: string;
} | {
    default: string;
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    danger: string;
} | {
    default: string;
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    danger: string;
} | {
    default: string;
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    danger: string;
} | {
    default: string;
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    danger: string;
};
export type ButtonVariant = "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost";
export type ButtonColor = "default" | "primary" | "secondary" | "success" | "warning" | "danger";
export type ButtonSize = "sm" | "md" | "lg";
export interface ButtonProps extends NextUIButtonProps {
    LinkComponent?: React.ComponentType<React.AnchorHTMLAttributes<HTMLAnchorElement>>;
    customStyles?: {
        base?: string;
        beforeContent?: string;
        afterContent?: string;
        content?: string;
    };
}
export declare const Button: import('react').ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & import('react').RefAttributes<HTMLButtonElement>>;
