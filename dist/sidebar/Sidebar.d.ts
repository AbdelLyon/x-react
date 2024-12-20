import { ReactNode } from 'react';
export interface SidebarItem {
    key: string;
    label: string;
    icon: ReactNode;
    href?: string;
    isActive?: boolean;
}
interface Props {
    items?: SidebarItem[];
    className?: string;
    classNames?: {
        base?: string;
        item?: string;
    };
    onItemClick?: (item: SidebarItem) => void;
}
export declare const Sidebar: import('react').ForwardRefExoticComponent<Props & import('react').RefAttributes<HTMLDivElement>>;
export {};
