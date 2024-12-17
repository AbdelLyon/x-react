import { ButtonGroupProps, ButtonProps } from '@nextui-org/react';
export type ButtonsProps = ButtonGroupProps & {
    buttons: Array<{
        key: string | number;
        label: React.ReactNode;
        buttonProps?: ButtonProps;
    }>;
};
export declare const Buttons: import('react').ForwardRefExoticComponent<Omit<ButtonsProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
