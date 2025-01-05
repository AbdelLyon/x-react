import { CardFooterProps } from '@nextui-org/react';
import { CardProps as CardProps_2 } from '@nextui-org/react';
import { ForwardRefExoticComponent } from 'react';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';

export declare const Card: ForwardRefExoticComponent<Omit<CardProps, "ref"> & RefAttributes<HTMLDivElement>>;

declare interface CardProps extends CardProps_2 {
    header?: ReactNode;
    footer?: ReactNode;
    footerProps?: CardFooterProps;
    classNames?: Partial<Record<"base" | "header" | "body" | "footer", string>>;
}

export { }
