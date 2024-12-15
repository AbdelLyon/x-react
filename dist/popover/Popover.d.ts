import { PopoverProps, PopoverContentProps } from '@nextui-org/react';
type radius = "none" | "sm" | "md" | "lg" | "full";
export interface PropsPopover extends Omit<PopoverProps, "content"> {
    trigger: React.ReactNode;
    contentClassName?: string;
    popoverContentProps?: PopoverContentProps;
    radius?: radius;
}
export declare const Popover: import('react').ForwardRefExoticComponent<Omit<PropsPopover, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export {};
