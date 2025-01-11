import { JSX } from 'react';
import { DropdownProps, DropdownMenuProps } from '@nextui-org/dropdown';
export type DropdownItemConfig = {
    key: string;
    label: string;
    href?: string;
    isReadOnly?: boolean;
    className?: string;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    shortcut?: string;
};
export interface DropdownSectionConfig {
    key: string;
    label?: string;
    showDivider?: boolean;
    items: DropdownItemConfig[];
}
type Props = {
    trigger: React.ReactNode;
    sections: DropdownSectionConfig[];
    dropdownMenuProps?: DropdownMenuProps;
    onItemPress?: (item: DropdownItemConfig) => void;
} & Omit<DropdownProps, "trigger" | "children">;
export declare const Dropdown: ({ trigger, sections, dropdownMenuProps, onItemPress, classNames, ...props }: Props) => JSX.Element;
export {};
