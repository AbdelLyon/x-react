import { SelectProps } from '@heroui/react';
import { JSX } from 'react';
interface InfiniteSelectProps<T> extends Omit<SelectProps, "items" | "children"> {
    items: T[];
    isFetching: boolean;
    fetchNextPage: () => void;
    hasNextPage: boolean;
    isLoading: boolean;
    renderItem: (item: T) => React.ReactNode;
    getItemKey: (item: T, index?: number) => string | number;
    onSearchChange?: (searchText: string) => void;
    searchPlaceholder?: string;
    isSearchable?: boolean;
}
export declare function InfiniteSelect<T extends object>({ items, isFetching, fetchNextPage, hasNextPage, isLoading, className, renderItem, getItemKey, selectionMode, onSearchChange, searchPlaceholder, isSearchable, ...selectProps }: InfiniteSelectProps<T>): JSX.Element;
export {};
