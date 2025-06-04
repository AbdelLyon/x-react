import { SelectProps } from '@heroui/react';
import { JSX } from 'react';
interface InfiniteSelectProps<T> extends Omit<SelectProps, "items" | "children" | "onSelectionChange"> {
    items: T[];
    isFetching: boolean;
    fetchNextPage: () => void;
    hasNextPage: boolean;
    isLoading: boolean;
    error?: Error | null;
    renderItem: (item: T) => React.ReactNode;
    getItemKey: (item: T, index?: number) => string | number;
    onSelectionChange?: (key: string | number | null) => void;
    onMultipleSelectionChange?: (keys: Set<string | number>) => void;
    emptyContent?: React.ReactNode;
    errorContent?: React.ReactNode;
    loadingContent?: React.ReactNode;
    fetchingMoreContent?: React.ReactNode;
}
/**
 * Composant Select avec scroll infini
 * @template T - Type des éléments dans la liste
 */
export declare function InfiniteSelect<T extends Record<string, unknown>>({ items, isFetching, fetchNextPage, hasNextPage, isLoading, error, className, renderItem, getItemKey, selectionMode, onSelectionChange, onMultipleSelectionChange, emptyContent, errorContent, loadingContent, fetchingMoreContent, ...selectProps }: InfiniteSelectProps<T>): JSX.Element;
export type { InfiniteSelectProps };
