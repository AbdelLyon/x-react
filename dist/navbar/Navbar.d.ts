import { ReactNode } from 'react';
import { NavbarContentProps, NavbarMenuProps, NavbarProps as NavbarRootProps } from '@nextui-org/react';
import { ButtonProps } from '../button';
export interface NavItem {
    label: string;
    onPress?: () => void;
    isActive?: boolean;
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
}
export interface NavbarProps extends Omit<NavbarRootProps, "children"> {
    brand?: ReactNode;
    navigationItems?: NavItem[];
    menuItems?: NavItem[];
    profile?: ReactNode;
    contentProps?: NavbarContentProps;
    menuProps?: NavbarMenuProps;
    itemProps?: ButtonProps;
}
export declare const Navbar: import('react').ForwardRefExoticComponent<Omit<NavbarProps, "ref"> & import('react').RefAttributes<HTMLElement>>;
