import { AnchorHTMLAttributes, ComponentType } from 'react';
import { ButtonProps as ButtonRootProps } from '@nextui-org/button';
export interface ButtonProps extends ButtonRootProps {
    LinkComponent?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
    classNames?: {
        base?: string;
        beforeContent?: string;
        afterContent?: string;
        content?: string;
    };
}
export declare const Button: import('react').ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & import('react').RefAttributes<HTMLButtonElement>>;
