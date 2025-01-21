import { SelectProps as NextUISelectProps, Selection } from '@heroui/react';
export interface SelectOption {
    key: string;
    label: string;
    description?: string;
    icon?: React.ReactNode;
}
interface SelectProps extends Omit<NextUISelectProps, "children" | "value" | "onSelectionChange"> {
    options: SelectOption[];
    value?: Selection;
    defaultValue?: Selection;
    onSelectionChange?: (key: Selection) => void;
}
export declare const Select: import('react').ForwardRefExoticComponent<Omit<SelectProps, "ref"> & import('react').RefAttributes<HTMLSelectElement>>;
export {};
