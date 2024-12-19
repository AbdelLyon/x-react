import { TableBodyProps, TableProps, TableHeaderProps, TableRowProps, TableCellProps, TableColumnProps } from '@nextui-org/react';
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
    field?: "actions";
    cell: (row: T) => React.ReactNode;
});
export interface DataGridComponentProps<T> {
    tableProps?: TableProps;
    tableHeaderProps?: Omit<TableHeaderProps<T>, "columns">;
    tableBodyProps?: Omit<TableBodyProps<T>, "items">;
    tableRowProps?: TableRowProps;
    tableCellProps?: TableCellProps;
    tableColumnProps?: Omit<TableColumnProps<T>, "key" | "children">;
}
export type DataGridProps<T extends {
    id: string | number;
}> = {
    props?: DataGridComponentProps<T>;
    rows: T[];
    columns: ColumnDefinition<T>[];
    caption?: string;
    className?: string;
    footerContent?: React.ReactNode;
    onCheckedRowsChange?: (rows: T[]) => void;
    onSort?: (column: keyof T, direction: "asc" | "desc") => void;
    checkboxSelection?: boolean;
    classNames?: {
        base?: string;
        table?: string;
        thead?: string;
        tbody?: string;
        tr?: string;
        th?: string;
        td?: string;
        checkbox?: string;
        sortIcon?: string;
        headerContent?: string;
        cellContent?: string;
    };
};
export declare function DataGrid<T extends {
    id: string | number;
}>({ rows, columns, caption, className, onCheckedRowsChange, onSort, checkboxSelection, classNames, props, }: DataGridProps<T>): import("react/jsx-runtime").JSX.Element;
