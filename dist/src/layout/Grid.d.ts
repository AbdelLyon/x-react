import { ReactNode } from 'react';
export type GridData = {
    id: string | number;
    content: ReactNode;
    colSpan?: {
        default?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
    };
};
interface GridProps {
    children?: ReactNode;
    data?: GridData[];
    columns?: {
        default?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
    };
    gap?: {
        x?: number;
        y?: number;
    };
    className?: string;
}
export declare const Grid: import('react').ForwardRefExoticComponent<GridProps & import('react').RefAttributes<HTMLDivElement>>;
interface GridItemProps {
    children: ReactNode;
    colSpan?: {
        default?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
    };
    className?: string;
}
export declare const GridItem: import('react').ForwardRefExoticComponent<GridItemProps & import('react').RefAttributes<HTMLDivElement>>;
export {};
