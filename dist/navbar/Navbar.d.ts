import { ReactNode } from 'react';
import { NavbarContentProps, NavbarMenuProps, NavbarProps as NavbarRootProps } from '@nextui-org/react';
import { ButtonProps } from '../button';
type ButtonColor = "default" | "primary" | "secondary" | "success" | "warning" | "danger";
type LinkColor = "foreground" | "primary" | "secondary" | "success" | "warning" | "danger";
export interface NavItemConfig {
    key: string;
    label: string;
    href?: string;
    isActive?: boolean;
    linkColor?: LinkColor;
    buttonColor?: ButtonColor;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    className?: string;
}
export interface NavItem {
    key: string;
    items: NavItemConfig[];
    justify?: "start" | "center" | "end";
    showOnMobile?: boolean;
    showOnDesktop?: boolean;
}
interface NavbarProps extends Omit<NavbarRootProps, "children"> {
    brand?: ReactNode;
    sections: NavItem[];
    mobileMenu?: NavItemConfig[];
    contentProps?: NavbarContentProps;
    menuProps?: NavbarMenuProps;
    itemProps?: ButtonProps;
    onItemPress?: (item: NavItemConfig) => void;
}
export declare const Navbar: import('react').ForwardRefExoticComponent<Omit<NavbarProps, "ref"> & import('react').RefAttributes<HTMLElement>>;
export {};
