import { useInView } from "../../node_modules/.pnpm/react-intersection-observer@9.16.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-intersection-observer/dist/index/index.es.js";
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
