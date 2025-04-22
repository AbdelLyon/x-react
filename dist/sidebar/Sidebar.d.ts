import { JSX, ReactNode } from 'react';
import { Item } from '../types/navigation';
export interface SidebarProps {
    items?: Item[];
    className?: string;
    classNames?: {
        base?: string;
        item?: string;
    };
    bgImage?: ReactNode;
    ref?: React.RefObject<HTMLElement>;
    onItemClick?: (item: Item) => void;
    action?: ReactNode;
}
export declare const Sidebar: ({ items, classNames, bgImage, onItemClick, ref, action, }: SidebarProps) => JSX.Element | null;
