import { PopoverProps, PopoverContentProps } from '@nextui-org/react';
import { Radius } from '../types/types';
export type PropsPopover = {
    trigger: React.ReactNode;
    contentClassName?: string;
    popoverContentProps?: PopoverContentProps;
    radius?: Radius;
} & Omit<PopoverProps, "content">;
export declare const Popover: import('react').ForwardRefExoticComponent<Omit<PropsPopover, "ref"> & import('react').RefAttributes<HTMLDivElement>>;