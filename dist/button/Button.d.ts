import { AnchorHTMLAttributes, ComponentType } from 'react';
import { ButtonProps as ButtonRootProps } from '@nextui-org/react';
export interface ButtonProps extends ButtonRootProps {
    LinkComponent?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
    customStyles?: {
        base?: string;
        beforeContent?: string;
        afterContent?: string;
        content?: string;
    };
}
export declare const Button: import('react').ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & import('react').RefAttributes<HTMLButtonElement>>;
