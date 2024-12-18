import { ReactNode } from 'react';
import { DrawerProps as DrawerRootProps } from '@nextui-org/react';
export type DrawerSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full";
export type DrawerRadius = "none" | "sm" | "md" | "lg";
export type DrawerPlacement = "left" | "right" | "top" | "bottom";
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
}
export declare const Drawer: import('react').ForwardRefExoticComponent<Omit<DrawerProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
