export { B as Button, a as ButtonProps } from '../Button-jejvjTzH.js';
import * as react from 'react';
import { ButtonGroupProps, ButtonProps } from '@nextui-org/react';

interface ButtonsProps extends ButtonGroupProps {
    buttons: Array<{
        key: string | number;
        label: React.ReactNode;
        buttonProps?: ButtonProps;
    }>;
}
declare const Buttons: react.ForwardRefExoticComponent<Omit<ButtonsProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

export { Buttons, type ButtonsProps };
