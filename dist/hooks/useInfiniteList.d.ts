export type FetchFunctionReturn<T> = {
    items: T[];
    hasMore: boolean;
};
export type FetchFunction<T> = (offset: number, limit: number) => Promise<FetchFunctionReturn<T>>;
export interface UseInfiniteListProps<T> {
    fetchFunction: FetchFunction<T>;
    fetchDelay?: number;
    limit?: number;
}
export interface UseInfiniteListReturn<T> {
    items: T[];
    hasMore: boolean;
    isLoading: boolean;
    onLoadMore: () => void;
}
export declare function useInfiniteList<T>({ fetchFunction, fetchDelay, limit, }: UseInfiniteListProps<T>): UseInfiniteListReturn<T>;
