import { ButtonProps as NextUIButtonProps } from '@nextui-org/react';
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
