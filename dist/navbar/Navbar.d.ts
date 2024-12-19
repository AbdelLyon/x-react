import { ReactNode } from 'react';
import { NavbarProps as NextUINavbarProps, NavbarContentProps, NavbarBrandProps, NavbarMenuProps, NavbarMenuItemProps, NavbarMenuToggleProps, LinkProps, ButtonProps } from '@nextui-org/react';
type LinkColor = LinkProps["color"];
type ButtonColor = ButtonProps["color"];
type ButtonVariant = ButtonProps["variant"];
interface NavItem {
    label: string;
    href: string;
    isActive?: boolean;
    color?: LinkColor;
    className?: string;
}
interface ActionButton {
    label: string;
    href: string;
    color?: ButtonColor;
    variant?: ButtonVariant;
    className?: string;
    showOnMobile?: boolean;
}
interface BrandProps {
    logo?: ReactNode;
    title?: string;
    link?: string;
    mobileOnly?: boolean;
    props?: NavbarBrandProps;
}
interface NavbarCustomProps {
    brand?: BrandProps;
    navigationItems?: NavItem[];
    mobileMenuItems?: NavItem[];
    actions?: {
        loginButton?: ActionButton;
        signUpButton?: ActionButton;
    };
    showNavigationOnMobile?: boolean;
}
interface NavbarComponentProps {
    contentProps?: NavbarContentProps;
    brandProps?: NavbarBrandProps;
    menuProps?: NavbarMenuProps;
    menuItemProps?: NavbarMenuItemProps;
    menuToggleProps?: NavbarMenuToggleProps;
}
export interface NavbarProps extends Omit<NextUINavbarProps, "children">, NavbarCustomProps, NavbarComponentProps {
}
export declare const Navbar: import('react').ForwardRefExoticComponent<Omit<NavbarProps, "ref"> & import('react').RefAttributes<HTMLElement>>;
export {};
