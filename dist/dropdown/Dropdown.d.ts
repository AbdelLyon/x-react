import { DropdownProps, DropdownMenuProps } from '@nextui-org/react';
export interface DropdownItemConfig {
    key: string;
    label: string;
    isReadOnly?: boolean;
    className?: string;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    shortcut?: string;
}
export interface DropdownSectionConfig {
    key: string;
    label?: string;
    showDivider?: boolean;
    items: DropdownItemConfig[];
}
interface Props extends Omit<DropdownProps, "trigger"> {
    trigger: React.ReactNode;
    sections: DropdownSectionConfig[];
    dropdownMenuProps?: DropdownMenuProps;
    onItemPress?: (key: string) => void;
}
export declare const Dropdown: import('react').ForwardRefExoticComponent<Omit<Props, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export {};
