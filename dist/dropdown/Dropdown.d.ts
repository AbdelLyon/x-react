import { JSX } from 'react';
import { DropdownProps, DropdownMenuProps, PressEvent } from '@heroui/react';
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
    onItemClick?: (item: DropdownItemConfig, event: PressEvent) => void;
} & Omit<DropdownProps, "trigger" | "children">;
export declare const Dropdown: ({ trigger, sections, dropdownMenuProps, onItemClick, classNames, ...props }: Props) => JSX.Element;
export {};
