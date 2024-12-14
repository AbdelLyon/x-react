import { Radio, RadioGroupProps, RadioProps } from '@nextui-org/react';
interface RadioItemProps extends Omit<RadioProps, "children"> {
    label?: React.ReactNode;
}
interface RadioWrapperProps extends Omit<RadioGroupProps, "children"> {
    items: RadioItemProps[];
    groupClasses?: {
        base?: string;
        label?: string;
    };
    itemClasses?: {
        base?: string;
        label?: string;
        wrapper?: string;
        control?: string;
    };
}
declare const RadioGroup: import('react').ForwardRefExoticComponent<Omit<RadioWrapperProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export { Radio, RadioGroup };
