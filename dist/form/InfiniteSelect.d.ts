import { SelectProps } from '@heroui/react';
import { JSX } from 'react';
interface InfiniteSelectProps<T> extends Omit<SelectProps, "items" | "children"> {
    fetchFunction: (offset: number, limit: number, searchText?: string) => Promise<{
        items: T[];
        hasMore: boolean;
    }>;
    fetchDelay?: number;
    limit?: number;
    renderItem: (item: T) => React.ReactNode;
    getItemKey: (item: T, index?: number) => string | number;
    onSearchChange?: (searchText: string) => void;
    searchPlaceholder?: string;
    isSearchable?: boolean;
}
export declare function InfiniteSelect<T extends object>({ fetchFunction, fetchDelay, limit, className, renderItem, getItemKey, selectionMode, onSearchChange, searchPlaceholder, isSearchable, ...selectProps }: InfiniteSelectProps<T>): JSX.Element;
export {};
