import { JSX } from 'react';
import { ButtonGroupProps, ButtonProps } from '@heroui/react';
export interface ButtonsProps extends ButtonGroupProps {
    buttons: Array<{
        key: string | number;
        label: React.ReactNode;
        buttonProps?: ButtonProps;
    }>;
}
export declare const Buttons: ({ buttons, ...props }: ButtonsProps) => JSX.Element;
