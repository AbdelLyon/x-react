import { ReactNode } from 'react';
export interface SidebarItem {
    key: string;
    label: string;
    icon: ReactNode;
    href?: string;
    isActive?: boolean;
}
export interface SidebarProps {
    items?: SidebarItem[];
    className?: string;
    classNames?: {
        base?: string;
        item?: string;
    };
    onItemClick?: (item: SidebarItem) => void;
}
export declare const Sidebar: import('react').ForwardRefExoticComponent<SidebarProps & import('react').RefAttributes<HTMLDivElement>>;
