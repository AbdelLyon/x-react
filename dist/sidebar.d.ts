import { ForwardRefExoticComponent } from 'react';
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

export declare const Sidebar: ForwardRefExoticComponent<SidebarProps & RefAttributes<HTMLDivElement>>;

export declare interface SidebarProps {
    items?: Item[];
    className?: string;
    classNames?: {
        base?: string;
        item?: string;
    };
    onItemClick?: (item: Item) => void;
}

export { }
