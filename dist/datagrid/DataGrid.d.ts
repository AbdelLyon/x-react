import { TableBodyProps, TableProps, TableHeaderProps, TableRowProps, TableCellProps, TableColumnProps } from '@nextui-org/react';
import { JSX } from 'react';
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
export type DataGridComponentProps<T> = {
    tableProps?: TableProps;
    tableHeaderProps?: Omit<TableHeaderProps<T>, "columns" | "children">;
    tableBodyProps?: Omit<TableBodyProps<T>, "items" | "children">;
    tableRowProps?: Omit<TableRowProps, "children">;
    tableCellProps?: Omit<TableCellProps, "children">;
    tableColumnProps?: Omit<TableColumnProps<T>, "key" | "children">;
};
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
        checkbox?: string;
        sortIcon?: string;
        cellContent?: string;
    };
    variant?: "bordered" | "striped" | "unstyled";
};
export declare function DataGrid<T extends {
    id: string | number;
}>({ rows, columns, caption, onCheckedRowsChange, onSort, checkboxSelection, classNames, variant, props, }: DataGridProps<T>): JSX.Element;
