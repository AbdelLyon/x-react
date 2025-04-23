import { useInView } from "react-intersection-observer";
import { useRef } from "react";
const useInfiniteScroll2 = (props = {}) => {
  const {
    hasMore = true,
    isEnabled = true,
    threshold = 0.1,
    rootMargin = "0px 0px 250px 0px",
    triggerOnce = false,
    debounceTime = 100,
    onLoadMore
  } = props;
  const containerRef = useRef(null);
  const isLoadingRef = useRef(false);
  const initialRender = useRef(true);
  const { ref, inView } = useInView({
    threshold,
    rootMargin,
    triggerOnce,
    skip: !isEnabled || !hasMore,
    onChange: (inView2) => {
      if (inView2 && !initialRender.current && !isLoadingRef.current && hasMore && onLoadMore) {
        isLoadingRef.current = true;
        onLoadMore();
        setTimeout(() => {
          isLoadingRef.current = false;
        }, debounceTime);
      }
      if (initialRender.current) {
        initialRender.current = false;
      }
    }
  });
  return {
    containerRef,
    ref,
    inView
  };
};
export {
  useInfiniteScroll2
};
