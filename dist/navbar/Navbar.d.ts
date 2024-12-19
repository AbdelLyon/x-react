import { ReactNode } from 'react';
import { NavbarContentProps, NavbarMenuProps, NavbarProps as NextUINavbarProps } from '@nextui-org/react';
export interface NavbarProps extends Omit<NextUINavbarProps, "children"> {
    brand?: ReactNode;
    startContent?: ReactNode;
    centerContent?: ReactNode;
    endContent?: ReactNode;
    menuContent?: ReactNode;
    contentProps?: NavbarContentProps;
    menuProps?: NavbarMenuProps;
    mobileBreakpoint?: "sm" | "md" | "lg" | "xl" | "2xl";
    showMenuButton?: boolean;
}
export declare const Navbar: import('react').ForwardRefExoticComponent<Omit<NavbarProps, "ref"> & import('react').RefAttributes<HTMLElement>>;
