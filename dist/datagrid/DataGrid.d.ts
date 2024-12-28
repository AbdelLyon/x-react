import { JSX } from 'react';
import { DataGridProps } from '../types/datagrid';
export declare function DataGrid<T extends {
    id: string | number;
}>({ rows, columns, onSortChange, onRowsScrollEnd, variant, isLoading, childrenProps, ...props }: DataGridProps<T>): JSX.Element;
