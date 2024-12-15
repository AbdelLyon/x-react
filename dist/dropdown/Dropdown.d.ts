import { DropdownProps, DropdownMenuProps, DropdownItemProps } from '@nextui-org/react';
export interface DropdownSectionConfig {
    key?: string;
    label?: string;
    showDivider?: boolean;
    items: DropdownItemConfig[];
}
export interface DropdownItemConfig extends DropdownItemProps {
    label: string;
    key: string;
    endContent?: React.ReactNode;
    startContent?: React.ReactNode;
}
interface Props extends Omit<DropdownProps, "trigger"> {
    trigger: React.ReactNode;
    sections: DropdownSectionConfig[];
    dropdownMenuProps?: DropdownMenuProps;
    onItemPress?: (key: string) => void;
}
export declare const Dropdown: import('react').ForwardRefExoticComponent<Omit<Props, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export {};
