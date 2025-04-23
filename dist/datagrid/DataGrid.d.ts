import { JSX } from 'react';
import { DataGridProps } from '../types/datagrid';
export declare function DataGrid<T extends {
    id: string | number;
}>({ rows, columns, onSortChange, variant, isLoading, isFetching, hasMoreData, // Ajout d'une prop hasMoreData
fetchNextPage, childrenProps, ...props }: DataGridProps<T>): JSX.Element;
