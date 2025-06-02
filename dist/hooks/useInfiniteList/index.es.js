var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
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
  const loadItems = (currentOffset) => __async(null, null, function* () {
    try {
      setIsLoading(true);
      if (offset > 0) {
        yield new Promise(
          (resolve) => setTimeout(resolve, fetchDelay)
        );
      }
      const { items: newItems, hasMore: moreAvailable } = yield fetchFunction(
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
  });
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
