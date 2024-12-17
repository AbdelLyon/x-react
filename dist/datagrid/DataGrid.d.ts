export type SortConfig<T> = {
    key: keyof T | null;
    direction: "asc" | "desc";
};
export type ColumnDefinition<T> = {
    header: React.ReactNode;
    footer?: (data: T[]) => React.ReactNode;
    className?: string;
    sortable?: boolean;
} & ({
    field: keyof T;
    cell?: (row: T) => React.ReactNode;
} | {
    field?: never;
    cell: (row: T) => React.ReactNode;
});
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
export declare function DataGrid<T extends {
    id: string | number;
}>({ rows, columns, caption, className, onCheckedRowsChange, onSort, checkboxSelection, }: DataGridProps<T>): import("react/jsx-runtime").JSX.Element;
