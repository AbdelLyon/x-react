import { InputProps } from '@heroui/react';
import { JSX } from 'react';
interface InfiniteMultiSelectProps<T> {
    items: T[];
    isFetching: boolean;
    fetchNextPage: () => void;
    hasNextPage: boolean;
    isLoading: boolean;
    renderItem: (item: T) => React.ReactNode;
    getItemKey: (item: T) => string | number;
    getItemValue?: (item: T) => string;
    selectedItems: T[];
    onSelectionChange: (items: T[]) => void;
    onSearchChange?: (searchText: string) => void;
    placeholder?: string;
    className?: string;
    inputProps?: Partial<InputProps>;
}
export declare function InfiniteAutocomplete<T extends object>({ items, isFetching, fetchNextPage, hasNextPage, isLoading, renderItem, getItemKey, getItemValue, selectedItems, onSelectionChange, onSearchChange, placeholder, className, inputProps, }: InfiniteMultiSelectProps<T>): JSX.Element;
export {};
