import { JSX } from 'react';
interface InfiniteSelectProps<T> {
    fetchFunction: (offset: number, limit: number) => Promise<{
        items: T[];
        hasMore: boolean;
    }>;
    fetchDelay?: number;
    limit?: number;
    className?: string;
    renderItem: (item: T) => React.ReactNode;
    getItemKey: (item: T) => string | number;
    selectionMode?: "single" | "multiple";
}
export declare function InfiniteSelect<T extends object>({ fetchFunction, fetchDelay, limit, className, renderItem, getItemKey, selectionMode, }: InfiniteSelectProps<T>): JSX.Element;
export {};
