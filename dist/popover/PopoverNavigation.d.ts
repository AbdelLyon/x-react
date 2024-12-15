import { PropsPopover } from './Popover';
interface Link {
    label: string;
    href: string;
    icon: React.ReactNode;
}
interface PopoverNavigationProps extends PropsPopover {
    trigger: React.ReactNode;
    links: Link[];
    onpress?: (link: Link) => void;
}
export declare const PopoverNavigation: import('react').ForwardRefExoticComponent<Omit<PopoverNavigationProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export {};
