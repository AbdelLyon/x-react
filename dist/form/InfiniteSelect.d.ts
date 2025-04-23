import { SelectProps } from '@heroui/react';
import { JSX } from 'react';
interface InfiniteSelectProps<T> extends Omit<SelectProps, "items" | "children"> {
    fetchFunction: (offset: number, limit: number) => Promise<{
        items: T[];
        hasMore: boolean;
    }>;
    fetchDelay?: number;
    limit?: number;
    renderItem: (item: T) => React.ReactNode;
    getItemKey: (item: T, index?: number) => string | number;
}
export declare function InfiniteSelect<T extends object>({ fetchFunction, fetchDelay, limit, className, renderItem, getItemKey, selectionMode, ...selectProps }: InfiniteSelectProps<T>): JSX.Element;
export {};
