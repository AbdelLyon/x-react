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
    tableHeaderProps?: Omit<TableHeaderProps<T>, "columns" | "children">;
    tableBodyProps?: Omit<TableBodyProps<T>, "items" | "children">;
    tableRowProps?: Omit<TableRowProps, "children">;
    tableCellProps?: Omit<TableCellProps, "children">;
    tableColumnProps?: Omit<TableColumnProps<T>, "key" | "children">;
}
interface DataGridProps<T extends {
    id: string | number;
}> extends Omit<TableProps, "onSelectionChange" | "onSortChange"> {
    childrenProps?: DataGridComponentProps<T>;
    rows: T[];
    columns: ColumnDefinition<T>[];
    className?: string;
    footerContent?: React.ReactNode;
    onSelectionChange?: (rows: T[]) => void;
    onSortChange?: (column: keyof T, direction: "asc" | "desc") => void;
    onEndReached?: () => void;
    isFetching?: boolean;
    checkboxSelection?: boolean;
    classNames?: {
        checkbox?: string;
        sortIcon?: string;
        cellContent?: string;
    };
    variant?: "bordered" | "striped" | "unstyled";
    isLoading?: boolean;
}
export declare const GRID_VARIANTS: {
    bordered: {
        header: string;
        column: string;
        row: string;
    };
    striped: {
        header: string;
        column: string;
        row: string;
    };
    unstyled: {
        header: string;
        column: string;
        row: string;
    };
};
export declare function DataGrid<T extends {
    id: string | number;
}>({ rows, columns, onEndReached, onSelectionChange, onSortChange, checkboxSelection, classNames, variant, isLoading, childrenProps, ...props }: DataGridProps<T>): JSX.Element;
export {};
