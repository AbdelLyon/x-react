import * as react from 'react';
import { PopoverContentProps, PopoverProps } from '@nextui-org/react';

type Radius = "none" | "sm" | "md" | "lg";

type PropsPopover = {
    trigger: React.ReactNode;
    contentClassName?: string;
    popoverContentProps?: PopoverContentProps;
    radius?: Radius;
} & Omit<PopoverProps, "content">;
declare const Popover: react.ForwardRefExoticComponent<Omit<PropsPopover, "ref"> & react.RefAttributes<HTMLDivElement>>;

export { Popover };
