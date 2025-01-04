import { JSX } from 'react';
interface DataGridSkeletonProps {
    columns: number;
    rows: number;
    checkboxSelection?: boolean;
    variant?: "bordered" | "striped" | "unstyled";
    className?: string;
}
export declare const DataGridSkeleton: ({ columns, rows, checkboxSelection, variant, className, }: DataGridSkeletonProps) => JSX.Element;
export {};
