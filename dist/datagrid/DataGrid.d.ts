export type SortConfig<T> = {
    key: keyof T | null;
    direction: "asc" | "desc";
};
export type ColumnDefinition<T> = {
    header: React.ReactNode;
    field?: keyof T;
    cell?: (row: T) => React.ReactNode;
    footer?: (data: T[]) => React.ReactNode;
    className?: string;
    sortable?: boolean;
};
export type DataGridProps<T extends {
    id: string | number;
}> = {
    rows: T[];
    columns: ColumnDefinition<T>[];
    caption?: string;
    className?: string;
    footerContent?: React.ReactNode;
    onCheckedRowsChange?: (rows: T[]) => void;
    onSort?: (column: keyof T, direction: "asc" | "desc") => void;
    checkboxSelection?: boolean;
};
export declare const DataGrid: import('react').ForwardRefExoticComponent<DataGridProps<{
    id: string | number;
}> & import('react').RefAttributes<HTMLTableElement>>;
