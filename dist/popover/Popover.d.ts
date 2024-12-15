import { PopoverProps, PopoverContentProps } from '@nextui-org/react';
export interface PropsPopover extends Omit<PopoverProps, "content"> {
    trigger: React.ReactNode;
    contentClassName?: string;
    popoverContentProps?: PopoverContentProps;
}
export declare const Popover: import('react').ForwardRefExoticComponent<Omit<PropsPopover, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
