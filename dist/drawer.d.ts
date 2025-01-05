import { AnchorHTMLAttributes } from 'react';
import { ButtonProps as ButtonProps_2 } from '@nextui-org/react';
import { ComponentType } from 'react';
import { DrawerProps as DrawerProps_2 } from '@nextui-org/react';
import { ForwardRefExoticComponent } from 'react';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';

declare interface AdditionalDrawerProps {
    trigger: ReactNode;
    title?: ReactNode;
    children: ReactNode;
    footer?: ReactNode;
    buttonCloseLabel?: string;
    buttonActionLabel?: string;
    onAction?: () => void | Promise<void>;
    buttonCloseProps?: ButtonProps;
    buttonActionProps?: ButtonProps;
    classNames?: DrawerClassNames;
}

declare interface ButtonProps extends ButtonProps_2 {
    LinkComponent?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
    classNames?: {
        base?: string;
        beforeContent?: string;
        afterContent?: string;
        content?: string;
    };
}

export declare const Drawer: ForwardRefExoticComponent<Omit<DrawerProps, "ref"> & RefAttributes<HTMLDivElement>>;

declare interface DrawerClassNames {
    wrapper?: string;
    base?: string;
    backdrop?: string;
    closeButton?: string;
    header?: string;
    body?: string;
    footer?: string;
}

export declare type DrawerProps = Omit<DrawerProps_2, keyof AdditionalDrawerProps> & AdditionalDrawerProps;

export { }
