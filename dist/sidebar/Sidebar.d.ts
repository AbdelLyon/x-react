import { Item } from '../types/navigation';
export interface SidebarProps {
    items?: Item[];
    className?: string;
    classNames?: {
        base?: string;
        item?: string;
    };
    onItemClick?: (item: Item) => void;
}
export declare const Sidebar: import('react').ForwardRefExoticComponent<SidebarProps & import('react').RefAttributes<HTMLDivElement>>;
