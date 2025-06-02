import { AutocompleteProps } from '@heroui/react';
import { JSX, ReactNode } from 'react';
type SelectionKey = string | number;
interface SelectionChangeData<T> {
    keys: Set<SelectionKey>;
    items: T[];
}
interface InfiniteSelectProps<T extends object> extends Omit<AutocompleteProps<T>, "items" | "children" | "selectedKey" | "onSelectionChange"> {
    items: Array<T>;
    isFetching: boolean;
    fetchNextPage: () => void;
    hasNextPage: boolean;
    isLoading: boolean;
    renderItem: (item: T) => React.ReactNode;
    getItemKey: (item: T) => SelectionKey;
    getItemValue?: (item: T) => string;
    onSearchChange?: (searchText: string) => void;
    selectionMode?: "single" | "multiple";
    selectedKey?: SelectionKey | null;
    selectedKeys?: Set<SelectionKey>;
    onSelectionChange?: (data: SelectionKey | SelectionChangeData<T> | null) => void;
    maxVisibleChips?: number;
    selectionIcon?: ReactNode;
    selectionLabel?: string;
}
export declare function InfiniteAutocomplete<T extends object>({ items, isFetching, fetchNextPage, hasNextPage, isLoading, className, renderItem, getItemKey, getItemValue, onSearchChange, selectionMode, selectedKey, selectedKeys, onSelectionChange, maxVisibleChips, // Affiche 2 chips par défaut
selectionIcon, selectionLabel, ...autocompleteProps }: InfiniteSelectProps<T>): JSX.Element;
export {};
