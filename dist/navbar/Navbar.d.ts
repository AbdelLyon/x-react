import { ReactNode } from 'react';
import { NavbarContentProps, NavbarMenuProps, NavbarProps as NavbarRootProps } from '@nextui-org/react';
import { Item } from '../types/navigation';
export interface NavbarProps extends Omit<NavbarRootProps, "children"> {
    brand?: ReactNode;
    profile?: ReactNode;
    navigationItems?: Item[];
    menuItems?: Item[];
    contentProps?: NavbarContentProps;
    menuProps?: NavbarMenuProps;
    onItemClick?: (item: Item) => void;
    classNames?: {
        item?: string;
    };
}
export declare const Navbar: import('react').ForwardRefExoticComponent<Omit<NavbarProps, "ref"> & import('react').RefAttributes<HTMLElement>>;
