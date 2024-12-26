import { JSX } from 'react';
import { DataGridProps } from '../types/datagrid';
export declare function DataGrid<T extends {
    id: string | number;
}>({ rows, columns, onEndReached, onSortChange, classNames, variant, isLoading, childrenProps, ...props }: DataGridProps<T>): JSX.Element;
