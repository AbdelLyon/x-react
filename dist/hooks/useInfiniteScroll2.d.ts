export interface UseInfiniteScrollProps {
    isEnabled?: boolean;
    hasMore?: boolean;
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
    debounceTime?: number;
    onLoadMore?: () => void;
}
export interface UseInfiniteScrollReturn {
    containerRef: React.RefObject<HTMLElement | null>;
    ref: (node: Element | null) => void;
    inView: boolean;
}
export declare const useInfiniteScroll2: (props?: UseInfiniteScrollProps) => UseInfiniteScrollReturn;
