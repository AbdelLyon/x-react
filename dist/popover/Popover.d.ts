import { PopoverProps, PopoverContentProps } from '@nextui-org/react';
import { Radius } from '../types/types';
export interface PropsPopover extends Omit<PopoverProps, "content"> {
    trigger: React.ReactNode;
    contentClassName?: string;
    popoverContentProps?: PopoverContentProps;
    radius?: Radius;
}
export declare const Popover: import('react').ForwardRefExoticComponent<Omit<PropsPopover, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
