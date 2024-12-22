import { ReactNode } from 'react';
import { DrawerProps as DrawerRootProps } from '@nextui-org/react';
import { ButtonProps } from '../button';
export interface DrawerProps extends Omit<DrawerRootProps, "children" | "title"> {
    trigger: ReactNode;
    title?: ReactNode;
    children: ReactNode;
    footer?: ReactNode;
    onAction?: () => void;
    buttonCloseLabel?: string;
    buttonActionLabel?: string;
    classNames?: {
        wrapper?: string;
        base?: string;
        backdrop?: string;
        header?: string;
        body?: string;
        footer?: string;
        closeButton?: string;
    };
    buttonProps?: ButtonProps;
}
export declare const Drawer: import('react').ForwardRefExoticComponent<Omit<DrawerProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
