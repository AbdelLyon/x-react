import { useState, useEffect } from "react";
function useInfiniteList({
  fetchFunction,
  fetchDelay = 0,
  limit = 10
}) {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const loadItems = async (currentOffset) => {
    try {
      setIsLoading(true);
      if (offset > 0) {
        await new Promise((resolve) => setTimeout(resolve, fetchDelay));
      }
      const { items: newItems, hasMore: moreAvailable } = await fetchFunction(
        currentOffset,
        limit
      );
      setHasMore(moreAvailable);
      setItems((prevItems) => [...prevItems, ...newItems]);
    } catch (error) {
      console.error("There was an error with the fetch operation:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    void loadItems(offset);
  }, []);
  const onLoadMore = () => {
    const newOffset = offset + limit;
    setOffset(newOffset);
    void loadItems(newOffset);
  };
  return {
    items,
    hasMore,
    isLoading,
    onLoadMore
  };
}
export {
  useInfiniteList
};
//# sourceMappingURL=x-react.es.js.map
