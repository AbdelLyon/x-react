import { useEffect, useState } from "react";

export type FetchFunctionReturn<T> = {
  items: T[];
  hasMore: boolean;
};

export type FetchFunction<T> = (
  offset: number,
  limit: number,
  searchText?: string, // Ajout du paramètre de recherche
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
  refetch: () => void; // Nouvelle fonction pour relancer la recherche
  setSearchText: (searchText: string) => void; // Fonction pour modifier le texte de recherche
  searchText: string; // Texte de recherche actuel
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
  const [searchText, setSearchTextState] = useState("");

  const loadItems = async (
    currentOffset: number,
    shouldAppend: boolean = true,
  ): Promise<void> => {
    try {
      setIsLoading(true);
      if (currentOffset > 0 && shouldAppend) {
        await new Promise(
          (resolve): NodeJS.Timeout => setTimeout(resolve, fetchDelay),
        );
      }

      const { items: newItems, hasMore: moreAvailable } = await fetchFunction(
        currentOffset,
        limit,
        searchText,
      );

      setHasMore(moreAvailable);

      if (shouldAppend) {
        setItems((prevItems): T[] => [...prevItems, ...newItems]);
      } else {
        // Pour une nouvelle recherche, remplacer tous les items
        setItems(newItems);
      }
    } catch (error) {
      console.error("There was an error with the fetch operation:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect((): void => {
    void loadItems(0, false);
  }, [searchText]); // Se déclenche aussi quand searchText change

  // Chargement initial
  useEffect((): void => {
    void loadItems(offset);
  }, []);

  const onLoadMore = (): void => {
    const newOffset = offset + limit;
    setOffset(newOffset);
    void loadItems(newOffset, true);
  };

  const refetch = (): void => {
    setOffset(0);
    setHasMore(true);
    void loadItems(0, false);
  };

  const setSearchText = (newSearchText: string): void => {
    setSearchTextState(newSearchText);
    setOffset(0); // Reset offset pour une nouvelle recherche
  };

  return {
    items,
    hasMore,
    isLoading,
    onLoadMore,
    refetch,
    setSearchText,
    searchText,
  };
}