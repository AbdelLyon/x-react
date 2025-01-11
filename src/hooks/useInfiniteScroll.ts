import { createDebouncedFunction } from "@/utils";
import { useLayoutEffect, useRef, useCallback } from "react";

export interface UseInfiniteScrollProps {
  isEnabled?: boolean;
  hasMore?: boolean;
  distance?: number;
  shouldUseLoader?: boolean;
  onLoadMore?: () => void;
}

export const useInfiniteScroll = (
  props: UseInfiniteScrollProps = {},
): readonly [React.RefObject<HTMLElement>, React.RefObject<HTMLElement>] => {
  const {
    hasMore = true,
    distance = 250,
    isEnabled = true,
    shouldUseLoader = true,
    onLoadMore,
  } = props;

  const scrollContainerRef = useRef<HTMLElement>(null);
  const loaderRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isLoadingRef = useRef(false);

  const loadMore = useCallback((): (() => void) => {
    let timer: ReturnType<typeof setTimeout>;

    if (!isLoadingRef.current && hasMore && onLoadMore) {
      isLoadingRef.current = true;
      onLoadMore();
      timer = setTimeout((): void => {
        isLoadingRef.current = false;
      }, 100);
    }

    return (): void => clearTimeout(timer);
  }, [hasMore, onLoadMore]);

  useLayoutEffect((): (() => void) | undefined => {
    const scrollContainerNode = scrollContainerRef.current;

    if (!isEnabled || !scrollContainerNode || !hasMore) {
      return;
    }

    if (shouldUseLoader) {
      const loaderNode = loaderRef.current;

      if (!loaderNode) {
        return;
      }

      const options = {
        root: scrollContainerNode,
        rootMargin: `0px 0px ${distance}px 0px`,
        threshold: 0.1,
      };

      const observer = new IntersectionObserver((entries): void => {
        const [entry] = entries;

        if (entry.isIntersecting) {
          loadMore();
        }
      }, options);

      observer.observe(loaderNode);
      observerRef.current = observer;

      return (): void => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }

    const debouncedCheckIfNearBottom = createDebouncedFunction((): void => {
      if (
        scrollContainerNode.scrollHeight - scrollContainerNode.scrollTop <=
        scrollContainerNode.clientHeight + distance
      ) {
        loadMore();
      }
    }, 100);

    scrollContainerNode.addEventListener("scroll", debouncedCheckIfNearBottom);

    return (): void => {
      scrollContainerNode.removeEventListener(
        "scroll",
        debouncedCheckIfNearBottom,
      );
    };
  }, [hasMore, distance, isEnabled, shouldUseLoader, loadMore]);

  return [loaderRef, scrollContainerRef] as const as readonly [
    React.RefObject<HTMLElement>,
    React.RefObject<HTMLElement>,
  ];
};
export type UseInfiniteScrollReturn = ReturnType<typeof useInfiniteScroll>;
