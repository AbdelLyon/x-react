import { ButtonProps as NextUIButtonProps } from '@nextui-org/react';
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
export declare const Button: ({ fullWidth, isLoading, isDisabled, startContent, endContent, className, LinkComponent, customStyles, href, children, target, rel, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
