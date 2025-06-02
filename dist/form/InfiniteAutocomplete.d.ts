import { AutocompleteProps } from '@heroui/react';
import { JSX } from 'react';
type SelectionKey = string | number;
interface InfiniteSelectProps<T extends object> extends Omit<AutocompleteProps<T>, "items" | "children" | "selectedKey" | "onSelectionChange"> {
    items: T[];
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
    onSelectionChange?: (key: SelectionKey | Set<SelectionKey> | null) => void;
    maxVisibleChips?: number;
}
export declare function InfiniteAutocomplete<T extends object>({ items, isFetching, fetchNextPage, hasNextPage, isLoading, className, renderItem, getItemKey, getItemValue, onSearchChange, selectionMode, selectedKey, selectedKeys, onSelectionChange, maxVisibleChips, // Par défaut, 3 chips max avant truncate
...autocompleteProps }: InfiniteSelectProps<T>): JSX.Element;
export {};
