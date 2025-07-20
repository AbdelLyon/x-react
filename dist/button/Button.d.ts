import { ButtonProps as HeroUIButtonProps, PressEvent } from '@heroui/react';
import { ReactNode } from 'react';
import { Color, Variant, Size, BaseComponentProps, AccessibilityProps } from '../types';
export interface ButtonProps extends Omit<HeroUIButtonProps, "color" | "variant" | "size" | "aria-label" | "aria-disabled" | "onPress" | "onClick">, BaseComponentProps, Pick<AccessibilityProps, "aria-label" | "aria-labelledby" | "aria-describedby"> {
    variant?: Variant;
    color?: Color;
    size?: Size;
    loading?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    fullWidth?: boolean;
    onClick?: (event: PressEvent) => void;
}
export declare const Button: import('react').ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & import('react').RefAttributes<HTMLButtonElement>>;
