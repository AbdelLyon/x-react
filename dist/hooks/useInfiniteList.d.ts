export type FetchFunctionReturn<T> = {
    items: T[];
    hasMore: boolean;
};
export type FetchFunction<T> = (offset: number, limit: number, searchText?: string) => Promise<FetchFunctionReturn<T>>;
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
    refetch: () => void;
    setSearchText: (searchText: string) => void;
    searchText: string;
}
export declare function useInfiniteList<T>({ fetchFunction, fetchDelay, limit, }: UseInfiniteListProps<T>): UseInfiniteListReturn<T>;
