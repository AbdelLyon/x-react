import * as react from 'react';
import { DropdownMenuProps, DropdownProps } from '@nextui-org/react';

type DropdownItemConfig = {
    key: string;
    label: string;
    href?: string;
    isReadOnly?: boolean;
    className?: string;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    shortcut?: string;
};
interface DropdownSectionConfig {
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
declare const Dropdown: react.ForwardRefExoticComponent<Omit<Props, "ref"> & react.RefAttributes<HTMLDivElement>>;

export { Dropdown, type DropdownItemConfig, type DropdownSectionConfig };
