import { ForwardRefExoticComponent } from 'react';
import { NavbarContentProps } from '@nextui-org/react';
import { NavbarMenuProps } from '@nextui-org/react';
import { NavbarProps as NavbarProps_2 } from '@nextui-org/react';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';

declare type BaseColor = "primary" | "secondary" | "success" | "warning" | "danger" | undefined;

declare type Color = "default" | BaseColor;

export declare type Item = {
    key: string;
    label?: string;
    onPress?: () => void;
    isActive?: boolean;
    href?: string;
    linkColor?: LinkColor;
    buttonColor?: Color;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
};

declare type LinkColor = "foreground" | BaseColor;

export declare const Navbar: ForwardRefExoticComponent<Omit<NavbarProps, "ref"> & RefAttributes<HTMLElement>>;

export declare type NavbarProps = {
    appName?: ReactNode;
    appLogo?: ReactNode;
    profile?: ReactNode;
    navigationItems?: Item[];
    menuItems?: Item[];
    contentProps?: NavbarContentProps;
    menuProps?: NavbarMenuProps;
    onItemClick?: (item: Item) => void;
    isMenuOpen?: boolean;
    onMenuOpenChange?: (isOpen: boolean) => void;
    classNames?: {
        item?: string;
    };
} & Omit<NavbarProps_2, "children">;

export { }
