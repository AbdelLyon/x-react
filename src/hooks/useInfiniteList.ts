import { useEffect, useState } from "react";

export type FetchFunctionReturn<T> = {
  items: T[];
  hasMore: boolean;
};

export type FetchFunction<T> = (
  offset: number,
  limit: number,
) => Promise<FetchFunctionReturn<T>>;

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

export function useInfiniteList<T>({
  fetchFunction,
  fetchDelay = 0,
  limit = 10,
}: UseInfiniteListProps<T>): UseInfiniteListReturn<T> {
  const [items, setItems] = useState<T[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  const loadItems = async (currentOffset: number): Promise<void> => {
    try {
      setIsLoading(true);
      if (offset > 0) {
        await new Promise(
          (resolve): NodeJS.Timeout => setTimeout(resolve, fetchDelay),
        );
      }

      const { items: newItems, hasMore: moreAvailable } = await fetchFunction(
        currentOffset,
        limit,
      );

      setHasMore(moreAvailable);
      setItems((prevItems): T[] => [...prevItems, ...newItems]);
    } catch (error) {
      console.error("There was an error with the fetch operation:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect((): void => {
    void loadItems(offset);
  }, []);

  const onLoadMore = (): void => {
    const newOffset = offset + limit;
    setOffset(newOffset);
    void loadItems(newOffset);
  };

  return {
    items,
    hasMore,
    isLoading,
    onLoadMore,
  };
}
