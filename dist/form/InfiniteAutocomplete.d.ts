import { AutocompleteProps } from '@heroui/react';
import { JSX } from 'react';
interface InfiniteAutocompleteProps<T extends object> extends Omit<AutocompleteProps<T>, "items" | "children"> {
    fetchFunction: (offset: number, limit: number) => Promise<{
        items: T[];
        hasMore: boolean;
    }>;
    fetchDelay?: number;
    limit?: number;
    renderItem: (item: T) => React.ReactNode;
    getItemKey: (item: T, index?: number) => string | number;
}
export declare function InfiniteAutocomplete<T extends object>({ fetchFunction, fetchDelay, limit, className, renderItem, getItemKey, ...autocompleteProps }: InfiniteAutocompleteProps<T>): JSX.Element;
export {};
