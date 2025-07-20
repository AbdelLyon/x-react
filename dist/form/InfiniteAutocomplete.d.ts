import { AutocompleteProps } from '@heroui/react';
import { JSX, ReactNode } from 'react';
type SelectionKey = string | number;
export interface InfiniteAutocompleteProps<T extends Record<string, unknown>> extends Omit<AutocompleteProps<T>, "items" | "children" | "selectedKey" | "onSelectionChange"> {
    items: T[];
    isFetching: boolean;
    fetchNextPage: () => void;
    hasNextPage: boolean;
    isLoading: boolean;
    error?: Error | null;
    renderItem: (item: T) => React.ReactNode;
    getItemKey: (item: T) => SelectionKey;
    getItemValue?: (item: T) => string;
    onSearchChange?: (searchText: string) => void;
    searchDebounceMs?: number;
    selectionMode?: "single" | "multiple";
    selectedKey?: SelectionKey | null;
    selectedKeys?: Set<SelectionKey>;
    onSelectionChange?: (key: SelectionKey | Set<SelectionKey> | null) => void;
    maxVisibleInBadge?: number;
    selectionIcon?: ReactNode;
    selectionLabel?: string;
    itemClassName?: string;
    emptyContent?: React.ReactNode;
    errorContent?: React.ReactNode;
    loadingContent?: React.ReactNode;
    fetchingMoreContent?: React.ReactNode;
    "aria-label"?: string;
    "aria-describedby"?: string;
    "aria-expanded"?: boolean;
    "aria-invalid"?: boolean;
    "aria-required"?: boolean;
}
/**
 * Composant Autocomplete avec scroll infini, recherche et sélection multiple
 * @template T - Type des éléments dans la liste
 */
export declare function InfiniteAutocomplete<T extends Record<string, unknown>>({ items, isFetching, fetchNextPage, hasNextPage, isLoading, error, className, renderItem, getItemKey, getItemValue, // Strip HTML
onSearchChange, searchDebounceMs, selectionMode, selectedKey, selectedKeys, onSelectionChange, maxVisibleInBadge, selectionIcon, selectionLabel, itemClassName, emptyContent, errorContent, loadingContent, fetchingMoreContent, ...autocompleteProps }: InfiniteAutocompleteProps<T>): JSX.Element;
export {};
