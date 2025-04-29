import { JSX } from 'react';
interface DataGridSkeletonProps {
    columns: number;
    rows: number;
    checkboxSelection?: boolean;
    variant?: "bordered" | "striped" | "unstyled";
    className?: string;
}
export declare const DataGridSkeleton: ({ rows, checkboxSelection, variant, }: DataGridSkeletonProps) => JSX.Element;
export {};
