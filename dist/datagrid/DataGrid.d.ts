import { JSX } from 'react';
import { DataGridProps } from '../types/datagrid';
export declare function DataGrid<T extends {
    id: string | number;
}>({ rows, columns, onEndReached, onSelectionChange, onSortChange, showSelectionCheckboxes, classNames, variant, isLoading, childrenProps, selectedRows, ...props }: DataGridProps<T>): JSX.Element;
