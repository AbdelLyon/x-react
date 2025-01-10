import { AnchorHTMLAttributes, ComponentType, JSX } from 'react';
import { ButtonProps as ButtonRootProps } from '@nextui-org/button';
export interface ButtonProps extends ButtonRootProps {
    LinkComponent?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
    classNames?: {
        base?: string;
        beforeContent?: string;
        afterContent?: string;
        content?: string;
    };
    onCLick?: () => void;
    rounded?: ButtonProps["radius"];
}
export declare const Button: ({ onCLick, rounded, startContent, endContent, LinkComponent, classNames, href, children, target, rel, ...props }: ButtonProps) => JSX.Element;
