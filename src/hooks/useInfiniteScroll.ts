import { useEffect, useRef, useCallback } from "react";

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

export const useInfiniteScroll = (
  inView: boolean,
  onFetchPage: () => Promise<void>,
  options: UseInfiniteScrollOptions = {},
): UseInfiniteScrollReturn => {
  const {
    enabled = true,
    threshold = 0,
    cooldown = 1000,
    onError,
    isLoading: externalLoading = false,
    hasNextPage = true,
  } = options;

  const lastFetchTime = useRef<number>(0);
  const errorRef = useRef<Error | null>(null);
  const isLoadingRef = useRef<boolean>(false);

  const resetError = useCallback(() => {
    errorRef.current = null;
  }, []);

  const safeFetch = useCallback(async () => {
    const now = Date.now();
    if (
      !enabled ||
      !hasNextPage ||
      isLoadingRef.current ||
      externalLoading ||
      now - lastFetchTime.current < cooldown
    ) {
      return;
    }

    try {
      isLoadingRef.current = true;
      await onFetchPage();
      lastFetchTime.current = Date.now();
      errorRef.current = null;
    } catch (error) {
      errorRef.current =
        error instanceof Error ? error : new Error("An error occurred");
      onError?.(errorRef.current);
    } finally {
      isLoadingRef.current = false;
    }
  }, [enabled, hasNextPage, externalLoading, cooldown, onFetchPage, onError]);

  // Effet principal
  useEffect(() => {
    if (inView) {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;

      if (documentHeight - scrollPosition <= threshold) {
        void safeFetch();
      }
    }
  }, [inView, threshold, safeFetch]);

  return {
    isLoading: isLoadingRef.current || externalLoading,
    error: errorRef.current,
    resetError,
  };
};
// Exemple d'utilisation
/*
import { useInView } from 'react-intersection-observer';
import { useInfiniteScroll } from './useInfiniteScroll';

function MyComponent() {
  const { ref, inView } = useInView();
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchNextPage = async () => {
    setIsLoading(true);
    try {
      const newItems = await fetchItems(items.length);
      setItems(prev => [...prev, ...newItems]);
    } finally {
      setIsLoading(false);
    }
  };

  const { error, resetError } = useInfiniteScroll(inView, fetchNextPage, {
    enabled: true,
    threshold: 200,
    cooldown: 1000,
    isLoading,
    hasNextPage: items.length < 100,
    onError: (error) => {
      console.error('Failed to fetch:', error);
    },
  });

  return (
    <div>
      {items.map(item => (
        <ItemComponent key={item.id} item={item} />
      ))}
      {error && (
        <div>
          Error: {error.message}
          <button onClick={resetError}>Retry</button>
        </div>
      )}
      <div ref={ref} />
    </div>
  );
}
*/
