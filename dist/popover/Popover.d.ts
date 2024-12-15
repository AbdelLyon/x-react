import { PopoverProps, PopoverContentProps } from '@nextui-org/react';
interface Props extends Omit<PopoverProps, "content"> {
    trigger: React.ReactNode;
    content: React.ReactNode;
    contentClassName?: string;
    popoverContentProps?: PopoverContentProps;
}
export declare const Popover: import('react').ForwardRefExoticComponent<Omit<Props, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export {};
