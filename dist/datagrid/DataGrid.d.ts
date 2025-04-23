import { JSX } from 'react';
import { DataGridProps } from '../types/datagrid';
export declare function DataGrid<T extends {
    id: string | number;
}>({ rows, columns, onSortChange, variant, isLoading, isLoadingMore, hasMoreData, onGridScrollEnd, fetchNextPage, infiniteScrollOptions, loadingMoreContent, noMoreDataContent, childrenProps, ...props }: DataGridProps<T>): JSX.Element;
