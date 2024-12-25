import { Key, JSX } from 'react';
import { TableProps, TableHeaderProps, TableBodyProps, TableRowProps, TableCellProps, TableColumnProps, SortDescriptor } from '@nextui-org/react';
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
    id: Key;
}> extends Omit<TableProps, "onSelectionChange"> {
    childrenProps?: DataGridComponentProps<T>;
    rows: T[];
    columns: ColumnDefinition<T>[];
    className?: string;
    onSelectionChange?: (keys: T[]) => void;
    onSortChange?: (descriptor: SortDescriptor) => void;
    onEndReached?: () => void;
    isFetching?: boolean;
    selectionMode?: "single" | "multiple" | "none";
    classNames?: {
        wrapper?: string;
        table?: string;
        thead?: string;
        tbody?: string;
        tr?: string;
        th?: string;
        td?: string;
        sortIcon?: string;
    };
    variant?: "bordered" | "striped" | "flat";
    isLoading?: boolean;
}
export declare const GRIDVARIANTS: {
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
    readonly flat: {
        readonly header: "bg-content2 border border-default-200";
        readonly column: "bg-content2 py-4 h-12";
        readonly row: "py-4 hover:bg-content2 h-12";
    };
};
export declare function DataGrid<T extends {
    id: Key;
}>({ rows, columns, onEndReached, onSelectionChange, onSortChange, selectionMode, classNames, variant, isLoading, childrenProps, ...props }: DataGridProps<T>): JSX.Element;
export {};
