import { DropdownMenuProps } from '@nextui-org/react';
import { DropdownProps } from '@nextui-org/react';
import { ForwardRefExoticComponent } from 'react';
import { RefAttributes } from 'react';

export declare const Dropdown: ForwardRefExoticComponent<Omit<Props, "ref"> & RefAttributes<HTMLDivElement>>;

export declare type DropdownItemConfig = {
    key: string;
    label: string;
    href?: string;
    isReadOnly?: boolean;
    className?: string;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    shortcut?: string;
};

export declare interface DropdownSectionConfig {
    key: string;
    label?: string;
    showDivider?: boolean;
    items: DropdownItemConfig[];
}

declare type Props = {
    trigger: React.ReactNode;
    sections: DropdownSectionConfig[];
    dropdownMenuProps?: DropdownMenuProps;
    onItemPress?: (item: DropdownItemConfig) => void;
} & Omit<DropdownProps, "trigger" | "children">;

export { }
