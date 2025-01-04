import { Checkbox } from '@nextui-org/react';
import { CheckboxGroupProps } from '@nextui-org/react';
import { CheckboxProps } from '@nextui-org/react';
import { ForwardRefExoticComponent } from 'react';
import { InputOtpProps } from '@nextui-org/react';
import { InputProps as InputProps_2 } from '@nextui-org/react';
import { JSX } from 'react';
import { RadioGroupProps } from '@nextui-org/react';
import { RadioProps } from '@nextui-org/react';
import { RefAttributes } from 'react';
import { Selection as Selection_2 } from '@nextui-org/react';
import { SelectProps as SelectProps_2 } from '@nextui-org/react';
import { SwitchProps as SwitchProps_2 } from '@nextui-org/react';
import { TextAreaProps } from '@nextui-org/react';

export { Checkbox }

export declare const CheckboxGroup: ForwardRefExoticComponent<Omit<CheckboxWrapperProps, "ref"> & RefAttributes<HTMLDivElement>>;

declare type CheckboxItemProps = {
    label?: React.ReactNode;
} & Omit<CheckboxProps, "children">;

declare type CheckboxWrapperProps = {
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

export declare function InfiniteSelect<T extends object>({ fetchFunction, fetchDelay, limit, className, renderItem, getItemKey, selectionMode, }: InfiniteSelectProps<T>): JSX.Element;

declare interface InfiniteSelectProps<T> {
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

export declare const Input: ForwardRefExoticComponent<Omit<InputProps, "ref"> & RefAttributes<HTMLInputElement>>;

export declare const InputOtp: ForwardRefExoticComponent<Omit<InputOtpWrapperProps, "ref"> & RefAttributes<HTMLDivElement>>;

declare type InputOtpWrapperProps = {
    length?: number;
    label?: string;
    labelClasses?: string;
    containerClasses?: string;
} & Omit<InputOtpProps, "length">;

declare type InputProps = InputProps_2 & {
    containerClasses?: string;
    customValidation?: (value: string) => boolean | string;
};

export declare const RadioGroup: ForwardRefExoticComponent<Omit<RadioWrapperProps, "ref"> & RefAttributes<HTMLDivElement>>;

declare type RadioItemProps = {
    label?: React.ReactNode;
} & Omit<RadioProps, "children">;

declare type RadioWrapperProps = {
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

export declare const Select: ForwardRefExoticComponent<Omit<SelectProps, "ref"> & RefAttributes<HTMLSelectElement>>;

export declare interface SelectOption {
    key: string;
    label: string;
    description?: string;
    icon?: React.ReactNode;
}

declare interface SelectProps extends Omit<SelectProps_2, "children" | "value" | "onSelectionChange"> {
    options: SelectOption[];
    value?: Selection_2;
    defaultValue?: Selection_2;
    onSelectionChange?: (key: Selection_2) => void;
}

export declare const Switch: ForwardRefExoticComponent<Omit<SwitchProps, "ref"> & RefAttributes<HTMLInputElement>>;

declare type SwitchProps = {
    width?: string | number;
    height?: string | number;
} & SwitchProps_2;

export declare const Textarea: ForwardRefExoticComponent<Omit<TextareaProps, "ref"> & RefAttributes<HTMLTextAreaElement>>;

declare type TextareaProps = TextAreaProps & {
    containerClasses?: string;
    width?: string | number;
    height?: string | number;
    customValidation?: (value: string) => boolean | string;
};

export { }
