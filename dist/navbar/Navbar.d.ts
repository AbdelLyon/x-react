import { ReactNode } from 'react';
import { NavbarProps as NextUINavbarProps } from '@nextui-org/react';
interface NavItem {
    label: string;
    href: string;
    isActive?: boolean;
    icon?: ReactNode;
}
interface ActionButton {
    label: string;
    href: string;
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    variant?: "flat" | "solid" | "bordered" | "light" | "ghost" | "shadow" | "faded";
    className?: string;
}
export interface NavbarProps extends Omit<NextUINavbarProps, "children"> {
    brand?: {
        logo?: ReactNode;
        title?: string;
        link?: string;
    };
    navItems?: NavItem[];
    hideNavItemsOnMobile?: boolean;
    actions?: {
        loginButton?: ActionButton;
        signUpButton?: ActionButton;
        hideLoginOnMobile?: boolean;
    };
    classNames?: {
        root?: string;
        wrapper?: string;
        brand?: string;
        content?: string;
        item?: string | string[];
        link?: string;
        button?: string;
    };
}
export declare const Navbar: import('react').ForwardRefExoticComponent<Omit<NavbarProps, "ref"> & import('react').RefAttributes<HTMLElement>>;
export {};
