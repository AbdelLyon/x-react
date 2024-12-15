import { PopoverProps, PopoverContentProps } from '@nextui-org/react';
interface Props extends Omit<PopoverProps, "content" | "children"> {
    trigger: React.ReactNode;
    contentClassName?: string;
    popoverContentProps?: PopoverContentProps;
    children?: React.ReactNode;
}
export declare const Popover: import('react').ForwardRefExoticComponent<Omit<Props, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export {};
