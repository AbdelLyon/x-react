import { ForwardRefExoticComponent } from 'react';
import { PopoverContentProps } from '@nextui-org/react';
import { PopoverProps } from '@nextui-org/react';
import { RefAttributes } from 'react';

export declare const Popover: ForwardRefExoticComponent<Omit<PropsPopover, "ref"> & RefAttributes<HTMLDivElement>>;

declare type PropsPopover = {
    trigger: React.ReactNode;
    contentClassName?: string;
    popoverContentProps?: PopoverContentProps;
    radius?: Radius;
} & Omit<PopoverProps, "content">;

declare type Radius = "none" | "sm" | "md" | "lg";

export { }
