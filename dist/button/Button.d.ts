import { AnchorHTMLAttributes, ComponentType, JSX } from 'react';
import { ButtonProps as ButtonRootProps } from '@heroui/react';
export interface ButtonProps extends Omit<ButtonRootProps, "onPress"> {
    LinkComponent?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
    classNames?: {
        base?: string;
        beforeContent?: string;
        afterContent?: string;
        content?: string;
    };
    onClick?: () => void;
    rounded?: ButtonProps["radius"];
}
export declare const Button: ({ onClick, rounded, startContent, endContent, LinkComponent, classNames, href, children, target, rel, ...props }: ButtonProps) => JSX.Element;
