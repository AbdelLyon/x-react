import { AnchorHTMLAttributes } from 'react';
import { ButtonGroupProps } from '@nextui-org/react';
import { ButtonProps as ButtonProps_2 } from '@nextui-org/react';
import { ComponentType } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { RefAttributes } from 'react';

export declare const Button: ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & RefAttributes<HTMLButtonElement>>;

export declare interface ButtonProps extends ButtonProps_2 {
    LinkComponent?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
    classNames?: {
        base?: string;
        beforeContent?: string;
        afterContent?: string;
        content?: string;
    };
}

export declare const Buttons: ForwardRefExoticComponent<Omit<ButtonsProps, "ref"> & RefAttributes<HTMLDivElement>>;

export declare interface ButtonsProps extends ButtonGroupProps {
    buttons: Array<{
        key: string | number;
        label: React.ReactNode;
        buttonProps?: ButtonProps_2;
    }>;
}

export { }
