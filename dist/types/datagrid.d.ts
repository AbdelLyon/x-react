import { TableBodyProps, TableCellProps, TableColumnProps, TableHeaderProps, TableProps, TableRowProps } from '@nextui-org/react';
export interface SortConfig<T> {
    key: keyof T | null;
    direction: "asc" | "desc";
}
export type SortDirection = "asc" | "desc";
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
export type ExtendedColumn<T> = ColumnDefinition<T> & {
    key: string;
    label: React.ReactNode;
};
export interface DataGridComponentProps<T> {
    tableHeaderProps?: Omit<TableHeaderProps<T>, "columns" | "children">;
    tableBodyProps?: Omit<TableBodyProps<T>, "items" | "children">;
    tableRowProps?: Omit<TableRowProps, "children">;
    tableCellProps?: Omit<TableCellProps, "children">;
    tableColumnProps?: Omit<TableColumnProps<T>, "key" | "children">;
}
export interface GridScrollEndParams {
    visibleRows: number;
    visibleStartIndex: number;
    visibleEndIndex: number;
}
export interface GridScrollEndEvent extends UIEvent {
    target: HTMLDivElement;
}
export interface GridCallbackDetails {
    reason: "scroll" | "resize";
}
export interface GridScrollEndCallback {
    params: GridScrollEndParams;
    details: GridCallbackDetails;
}
export type GridVariant = "bordered" | "striped" | "unstyled";
export interface DataGridBaseProps<T> {
    childrenProps?: DataGridComponentProps<T>;
    rows: T[];
    columns: ColumnDefinition<T>[];
    className?: string;
    footerContent?: React.ReactNode;
    variant?: GridVariant;
    isLoading?: boolean;
    isFetching?: boolean;
}
export interface DataGridCallbacks<T> {
    onSortChange?: (column: keyof T, direction: SortDirection) => void;
    onRowsScrollEnd?: (callback: GridScrollEndCallback) => void;
}
export interface DataGridProps<T extends {
    id: string | number;
}> extends DataGridBaseProps<T>, DataGridCallbacks<T>, Omit<TableProps, "onSortChange"> {
}
export {};
