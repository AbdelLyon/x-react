import { JSX } from 'react';
import { TableBodyProps } from '@nextui-org/react';
import { TableCellProps } from '@nextui-org/react';
import { TableColumnProps } from '@nextui-org/react';
import { TableHeaderProps } from '@nextui-org/react';
import { TableProps } from '@nextui-org/react';
import { TableRowProps } from '@nextui-org/react';

declare interface ActionColumn<T> extends ColumnBase<T> {
    field?: "actions";
    cell?: (row: T) => React.ReactNode;
}

declare interface ColumnBase<T> {
    header: React.ReactNode;
    footer?: (data: T[]) => React.ReactNode;
    className?: string;
    sortable?: boolean;
}

export declare type ColumnDefinition<T> = FieldColumn<T> | ActionColumn<T>;

export declare function DataGrid<T extends {
    id: string | number;
}>({ rows, columns, onSortChange, variant, isLoading, onGridScrollEnd, childrenProps, ...props }: DataGridProps<T>): JSX.Element;

declare interface DataGridBaseProps<T> {
    childrenProps?: DataGridComponentProps<T>;
    rows: T[];
    columns: ColumnDefinition<T>[];
    className?: string;
    footerContent?: React.ReactNode;
    variant?: GridVariant;
    isLoading?: boolean;
    isFetching?: boolean;
}

declare interface DataGridCallbacks<T> {
    onSortChange?: (column: keyof T, direction: SortDirection) => void;
    onGridScrollEnd?: () => void;
}

declare interface DataGridComponentProps<T> {
    tableHeaderProps?: Omit<TableHeaderProps<T>, "columns" | "children">;
    tableBodyProps?: Omit<TableBodyProps<T>, "items" | "children">;
    tableRowProps?: Omit<TableRowProps, "children">;
    tableCellProps?: Omit<TableCellProps, "children">;
    tableColumnProps?: Omit<TableColumnProps<T>, "key" | "children">;
}

declare interface DataGridProps<T extends {
    id: string | number;
}> extends DataGridBaseProps<T>, DataGridCallbacks<T>, Omit<TableProps, "onSortChange"> {
}

declare interface FieldColumn<T> extends ColumnBase<T> {
    field: keyof T;
    cell?: (row: T) => React.ReactNode;
}

declare type GridVariant = "bordered" | "striped" | "unstyled";

export declare interface SortConfig<T> {
    key: keyof T | null;
    direction: "asc" | "desc";
}

declare type SortDirection = "asc" | "desc";

export { }
