interface UseInfiniteScrollOptions {
    enabled?: boolean;
    threshold?: number;
    cooldown?: number;
    onError?: (error: Error) => void;
    isLoading?: boolean;
    hasNextPage?: boolean;
}
interface UseInfiniteScrollReturn {
    isLoading: boolean;
    error: Error | null;
    resetError: () => void;
}
export declare const useInfiniteScroll: (inView: boolean, onFetchPage: () => Promise<void>, options?: UseInfiniteScrollOptions) => UseInfiniteScrollReturn;
export {};
