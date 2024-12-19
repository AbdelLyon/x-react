import { ReactNode } from 'react';
import { NavbarContentProps, NavbarMenuProps, NavbarProps as NavbarRootProps } from '@nextui-org/react';
export interface NavItem {
    label: string;
    onPress?: () => void;
    isActive?: boolean;
    color?: "foreground" | "primary" | "secondary" | "success" | "warning" | "danger";
}
export interface NavbarProps extends Omit<NavbarRootProps, "children"> {
    brand?: ReactNode;
    navigationItems?: NavItem[];
    menuItems?: NavItem[];
    profile?: ReactNode;
    contentProps?: NavbarContentProps;
    menuProps?: NavbarMenuProps;
}
export declare const Navbar: import('react').ForwardRefExoticComponent<Omit<NavbarProps, "ref"> & import('react').RefAttributes<HTMLElement>>;
