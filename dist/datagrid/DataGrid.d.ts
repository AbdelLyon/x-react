import { TableBodyProps, TableProps, TableHeaderProps, TableRowProps, TableCellProps, TableColumnProps } from '@nextui-org/react';
import { JSX } from 'react';
export interface SortConfig<T> {
    key: keyof T | null;
    direction: "asc" | "desc";
}
interface ColumnBase<T> {
    header: React.ReactNode;
    footer?: (data: T[]) => React.ReactNode;
    className?: string;
    sortable?: boolean;
}
interface FieldColumn<T> extends ColumnBase<T> {
    field: keyof T;
    cell?: (row: T) => React.ReactNode;
}
interface ActionColumn<T> extends ColumnBase<T> {
    field?: "actions";
    cell: (row: T) => React.ReactNode;
}
export type ColumnDefinition<T> = FieldColumn<T> | ActionColumn<T>;
interface DataGridComponentProps<T> {
    tableProps?: TableProps;
    tableHeaderProps?: Omit<TableHeaderProps<T>, "columns" | "children">;
    tableBodyProps?: Omit<TableBodyProps<T>, "items" | "children">;
    tableRowProps?: Omit<TableRowProps, "children">;
    tableCellProps?: Omit<TableCellProps, "children">;
    tableColumnProps?: Omit<TableColumnProps<T>, "key" | "children">;
}
interface DataGridProps<T extends {
    id: string | number;
}> {
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
    isLoading?: boolean;
}
export declare const GRIDVARIANT: {
    readonly bordered: {
        readonly header: "bg-content2 border border-default-200";
        readonly column: "bg-content2 py-4 h-12";
        readonly row: "py-4 border-b border-default-200 last:border-b-0 hover:bg-content2 h-12";
    };
    readonly striped: {
        readonly header: "bg-content2 border border-default-200";
        readonly column: "bg-content2 py-4 h-12";
        readonly row: "py-4 even:bg-content2 h-12";
    };
    readonly unstyled: {
        readonly header: "bg-content2 border border-default-200";
        readonly column: "bg-content2 py-4 h-12";
        readonly row: "py-4 hover:bg-content2 h-12";
    };
};
export declare function DataGrid<T extends {
    id: string | number;
}>({ rows, columns, caption, onCheckedRowsChange, onSort, checkboxSelection, classNames, variant, isLoading, props, }: DataGridProps<T>): JSX.Element;
export {};
