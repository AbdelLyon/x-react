import { Checkbox, CheckboxGroupProps, CheckboxProps } from '@nextui-org/react';
interface CheckboxItemProps extends Omit<CheckboxProps, "children"> {
    label?: React.ReactNode;
}
interface CheckboxWrapperProps extends Omit<CheckboxGroupProps, "children"> {
    items: CheckboxItemProps[];
    groupClasses?: {
        base?: string;
        label?: string;
    };
    itemClasses?: {
        base?: string;
        label?: string;
        wrapper?: string;
    };
}
declare const CheckboxGroup: import('react').ForwardRefExoticComponent<Omit<CheckboxWrapperProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export { Checkbox, CheckboxGroup };
