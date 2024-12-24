import { TableBodyProps, TableProps, TableHeaderProps, TableRowProps, TableCellProps, TableColumnProps, PaginationProps } from '@nextui-org/react';
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
interface PaginationState {
    page: number;
    lastPage: number;
    total: number;
    itemsPerPage: number;
}
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
        pagination?: string;
    };
    variant?: "bordered" | "striped" | "unstyled";
    isPaginated?: boolean;
    initialPage?: number;
    itemsPerPage?: number;
    onPageChange?: (state: PaginationState) => void;
    paginationProps?: Omit<PaginationProps, "page" | "total" | "onChange">;
}
export declare function DataGrid<T extends {
    id: string | number;
}>({ rows, columns, caption, onCheckedRowsChange, onSort, checkboxSelection, classNames, variant, isPaginated, initialPage, itemsPerPage, onPageChange, paginationProps, props, }: DataGridProps<T>): JSX.Element;
export {};
