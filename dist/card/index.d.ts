import * as react from 'react';
import { ReactNode } from 'react';
import { CardProps as CardProps$1, CardFooterProps } from '@nextui-org/react';

interface CardProps extends CardProps$1 {
    header?: ReactNode;
    footer?: ReactNode;
    footerProps?: CardFooterProps;
    classNames?: Partial<Record<"base" | "header" | "body" | "footer", string>>;
}
declare const Card: react.ForwardRefExoticComponent<Omit<CardProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

export { Card };
