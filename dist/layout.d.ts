import { ForwardRefExoticComponent } from 'react';
import { JSX } from 'react';
import { NavbarContentProps } from '@nextui-org/react';
import { NavbarMenuProps } from '@nextui-org/react';
import { NavbarProps as NavbarProps_2 } from '@nextui-org/react';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';
import { ScrollShadowProps } from '@nextui-org/react';

declare type BaseColor = "primary" | "secondary" | "success" | "warning" | "danger" | undefined;

export declare const Center: ForwardRefExoticComponent<CenterProps & RefAttributes<HTMLDivElement>>;

declare interface CenterProps {
    children: ReactNode;
    inline?: boolean;
    className?: string;
}

declare type Color = "default" | BaseColor;

export declare const Container: ForwardRefExoticComponent<ContainerProps & RefAttributes<HTMLDivElement>>;

declare interface ContainerProps {
    children: ReactNode;
    maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
    className?: string;
}

export declare const Grid: ForwardRefExoticComponent<GridProps & RefAttributes<HTMLDivElement>>;

declare type GridData = {
    id: string | number;
    content: ReactNode;
    colSpan?: {
        default?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
    };
};

export declare const GridItem: ForwardRefExoticComponent<GridItemProps & RefAttributes<HTMLDivElement>>;

declare interface GridItemProps {
    children: ReactNode;
    colSpan?: {
        default?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
    };
    className?: string;
}

declare interface GridProps {
    children?: ReactNode;
    data?: GridData[];
    columns?: {
        default?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
    };
    gap?: {
        x?: number;
        y?: number;
    };
    className?: string;
}

declare type Item = {
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

export declare const Layout: ({ children, navbar, sidebar, className, }: LayoutProps) => JSX.Element;

export declare type LayoutProps = {
    children: React.ReactNode;
    navbar?: NavbarProps;
    sidebar?: SidebarProps;
    className?: string;
};

declare type LinkColor = "foreground" | BaseColor;

declare type NavbarProps = {
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

export declare const Scroll: ForwardRefExoticComponent<Omit<ScrollProps, "ref"> & RefAttributes<HTMLDivElement>>;

declare interface ScrollProps extends ScrollShadowProps {
    width?: string | number;
    height?: string | number;
}

export declare const Section: ForwardRefExoticComponent<SectionProps & RefAttributes<HTMLElement>>;

declare interface SectionProps {
    children: ReactNode;
    className?: string;
    spacing?: "sm" | "md" | "lg" | "xl";
}

declare interface SidebarProps {
    items?: Item[];
    className?: string;
    classNames?: {
        base?: string;
        item?: string;
    };
    onItemClick?: (item: Item) => void;
}

export declare const Stack: ForwardRefExoticComponent<StackProps & RefAttributes<HTMLDivElement>>;

declare interface StackProps {
    children: ReactNode;
    spacing?: number;
    align?: "start" | "center" | "end";
    justify?: "start" | "center" | "end" | "between";
    className?: string;
}

export { }
