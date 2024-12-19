import { ReactNode } from 'react';
import { NavbarContentProps, NavbarMenuProps, NavbarProps as NextUINavbarProps } from '@nextui-org/react';
export interface NavbarProps extends Omit<NextUINavbarProps, "children"> {
    mobileBrand?: ReactNode;
    mobileContent?: ReactNode;
    menuContent?: ReactNode;
    desktopBrand?: ReactNode;
    desktopContent?: ReactNode;
    endContent?: ReactNode;
    contentProps?: NavbarContentProps;
    menuProps?: NavbarMenuProps;
}
export declare const Navbar: import('react').ForwardRefExoticComponent<Omit<NavbarProps, "ref"> & import('react').RefAttributes<HTMLElement>>;
