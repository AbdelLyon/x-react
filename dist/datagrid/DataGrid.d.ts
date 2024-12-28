import { TableRowProps } from '@nextui-org/react';
import { JSX } from 'react';
import { DataGridProps } from '../types/datagrid';
type TRowProps = Omit<TableRowProps, "ref">;
export declare const TRow: import('react').ForwardRefExoticComponent<TRowProps & import('react').RefAttributes<HTMLTableRowElement>>;
export declare function DataGrid<T extends {
    id: string | number;
}>({ rows, columns, onSortChange, variant, isLoading, onRowsScrollEnd, childrenProps, ...props }: DataGridProps<T>): JSX.Element;
export {};
