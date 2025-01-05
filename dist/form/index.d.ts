import * as react from 'react';
import { JSX } from 'react';
import { RadioGroupProps, RadioProps, CheckboxGroupProps, CheckboxProps, InputOtpProps, InputProps as InputProps$1, TextAreaProps, SwitchProps as SwitchProps$1, SelectProps as SelectProps$1, Selection } from '@nextui-org/react';
export { Checkbox } from '@nextui-org/react';

type RadioItemProps = {
    label?: React.ReactNode;
} & Omit<RadioProps, "children">;
type RadioWrapperProps = {
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
} & Omit<RadioGroupProps, "children">;
declare const RadioGroup: react.ForwardRefExoticComponent<Omit<RadioWrapperProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

type CheckboxItemProps = {
    label?: React.ReactNode;
} & Omit<CheckboxProps, "children">;
type CheckboxWrapperProps = {
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
} & Omit<CheckboxGroupProps, "children">;
declare const CheckboxGroup: react.ForwardRefExoticComponent<Omit<CheckboxWrapperProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

type InputOtpWrapperProps = {
    length?: number;
    label?: string;
    labelClasses?: string;
    containerClasses?: string;
} & Omit<InputOtpProps, "length">;
declare const InputOtp: react.ForwardRefExoticComponent<Omit<InputOtpWrapperProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

type InputProps = InputProps$1 & {
    containerClasses?: string;
    customValidation?: (value: string) => boolean | string;
};
declare const Input: react.ForwardRefExoticComponent<Omit<InputProps, "ref"> & react.RefAttributes<HTMLInputElement>>;

type TextareaProps = TextAreaProps & {
    containerClasses?: string;
    width?: string | number;
    height?: string | number;
    customValidation?: (value: string) => boolean | string;
};
declare const Textarea: react.ForwardRefExoticComponent<Omit<TextareaProps, "ref"> & react.RefAttributes<HTMLTextAreaElement>>;

type SwitchProps = {
    width?: string | number;
    height?: string | number;
} & SwitchProps$1;
declare const Switch: react.ForwardRefExoticComponent<Omit<SwitchProps, "ref"> & react.RefAttributes<HTMLInputElement>>;

interface SelectOption {
    key: string;
    label: string;
    description?: string;
    icon?: React.ReactNode;
}
interface SelectProps extends Omit<SelectProps$1, "children" | "value" | "onSelectionChange"> {
    options: SelectOption[];
    value?: Selection;
    defaultValue?: Selection;
    onSelectionChange?: (key: Selection) => void;
}
declare const Select: react.ForwardRefExoticComponent<Omit<SelectProps, "ref"> & react.RefAttributes<HTMLSelectElement>>;

interface InfiniteSelectProps<T> {
    fetchFunction: (offset: number, limit: number) => Promise<{
        items: T[];
        hasMore: boolean;
    }>;
    fetchDelay?: number;
    limit?: number;
    className?: string;
    renderItem: (item: T) => React.ReactNode;
    getItemKey: (item: T) => string | number;
    selectionMode?: "single" | "multiple";
}
declare function InfiniteSelect<T extends object>({ fetchFunction, fetchDelay, limit, className, renderItem, getItemKey, selectionMode, }: InfiniteSelectProps<T>): JSX.Element;

export { CheckboxGroup, InfiniteSelect, Input, InputOtp, RadioGroup, Select, type SelectOption, Switch, Textarea };
