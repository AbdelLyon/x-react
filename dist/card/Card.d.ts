import { ReactNode } from 'react';
import { CardFooterProps, CardProps as NextUICardProps } from '@heroui/react';
import { BaseComponentProps, AccessibilityProps } from '../types';
export interface CardProps extends NextUICardProps, BaseComponentProps, Pick<AccessibilityProps, 'aria-label' | 'aria-labelledby' | 'aria-describedby'> {
    header?: ReactNode;
    footer?: ReactNode;
    footerProps?: CardFooterProps;
    classNames?: Partial<Record<"base" | "header" | "body" | "footer", string>>;
}
export declare const Card: import('react').ForwardRefExoticComponent<Omit<CardProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
