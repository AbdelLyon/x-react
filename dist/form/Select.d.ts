import { SelectProps as NextUISelectProps } from '@nextui-org/select';
import { Selection } from '@nextui-org/table';
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
