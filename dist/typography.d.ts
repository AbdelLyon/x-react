import { ElementType } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';

export declare const Typography: ForwardRefExoticComponent<TypographyProps & RefAttributes<HTMLElement>>;

export declare interface TypographyProps {
    children: ReactNode;
    as?: ElementType;
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "base" | "small" | "caption" | "overline";
    weight?: "light" | "normal" | "medium" | "semibold" | "bold";
    align?: "left" | "center" | "right" | "justify";
    color?: string;
    truncate?: boolean;
    className?: string;
}

export { }
