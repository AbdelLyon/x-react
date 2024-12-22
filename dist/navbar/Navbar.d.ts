import { ReactNode } from 'react';
import { NavbarContentProps, NavbarMenuProps, NavbarProps as NavbarRootProps } from '@nextui-org/react';
export type ButtonColor = "default" | "primary" | "secondary" | "success" | "warning" | "danger";
export type LinkColor = "foreground" | "primary" | "secondary" | "success" | "warning" | "danger";
export interface NavItem {
    key: string;
    label?: string;
    onPress?: () => void;
    isActive?: boolean;
    href?: string;
    linkColor?: LinkColor;
    buttonColor?: ButtonColor;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
}
export interface NavbarProps extends Omit<NavbarRootProps, "children"> {
    brand?: ReactNode;
    profile?: ReactNode;
    navigationItems?: NavItem[];
    menuItems?: NavItem[];
    contentProps?: NavbarContentProps;
    menuProps?: NavbarMenuProps;
    onItemPress?: (item: NavItem) => void;
}
export interface NavItem {
    key: string;
    label?: string;
    onPress?: () => void;
    isActive?: boolean;
    href?: string;
    linkColor?: LinkColor;
    buttonColor?: ButtonColor;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
}
export declare const Navbar: import('react').ForwardRefExoticComponent<Omit<NavbarProps, "ref"> & import('react').RefAttributes<HTMLElement>>;
