export interface UseInfiniteScrollProps {
    isEnabled?: boolean;
    hasMore?: boolean;
    distance?: number;
    shouldUseLoader?: boolean;
    onLoadMore?: () => void;
}
export declare const useInfiniteScroll: (props?: UseInfiniteScrollProps) => readonly [React.RefObject<HTMLElement>, React.RefObject<HTMLElement>];
export type UseInfiniteScrollReturn = ReturnType<typeof useInfiniteScroll>;
