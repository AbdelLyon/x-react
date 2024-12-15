import { Button } from '../button';
import { PropsPopover } from './Popover';
import { VariantProps } from '@nextui-org/react';
interface Link {
    label: string;
    href: string;
    icon?: React.ReactNode;
}
interface PopoverNavigationProps extends Omit<PropsPopover, "children"> {
    links: Link[];
    onPress?: (link: Link) => void;
    variant?: VariantProps<typeof Button>["variant"];
    classNameLinks?: string;
    color: VariantProps<typeof Button>["color"];
}
export declare const PopoverNavigation: import('react').ForwardRefExoticComponent<Omit<PopoverNavigationProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export {};
