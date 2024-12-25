import { TableBodyProps, TableCellProps, TableColumnProps, TableHeaderProps, TableProps, TableRowProps } from '@nextui-org/react';
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
export interface DataGridComponentProps<T> {
    tableHeaderProps?: Omit<TableHeaderProps<T>, "columns" | "children">;
    tableBodyProps?: Omit<TableBodyProps<T>, "items" | "children">;
    tableRowProps?: Omit<TableRowProps, "children">;
    tableCellProps?: Omit<TableCellProps, "children">;
    tableColumnProps?: Omit<TableColumnProps<T>, "key" | "children">;
}
export interface DataGridProps<T extends {
    id: string | number;
}> extends Omit<TableProps, "onSelectionChange" | "onSortChange" | "showSelectionCheckboxes"> {
    childrenProps?: DataGridComponentProps<T>;
    rows: T[];
    columns: ColumnDefinition<T>[];
    className?: string;
    footerContent?: React.ReactNode;
    onSelectionChange?: (rows: T[]) => void;
    onSortChange?: (column: keyof T, direction: "asc" | "desc") => void;
    onEndReached?: () => void;
    isFetching?: boolean;
    showSelectionCheckboxes?: boolean;
    classNames?: {
        checkbox?: string;
        sortIcon?: string;
        cellContent?: string;
    };
    variant?: "bordered" | "striped" | "unstyled";
    isLoading?: boolean;
}
export type ExtendedColumn<T> = ColumnDefinition<T> & {
    key: string;
    label: React.ReactNode;
};
export {};
