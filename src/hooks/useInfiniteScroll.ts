import { useEffect } from "react";

export const useInfiniteScroll = (
  inView: boolean,
  onRowsScrollEnd?: () => void,
): void => {
  useEffect(() => {
    if (inView && onRowsScrollEnd) {
      onRowsScrollEnd();
    }
  }, [inView, onRowsScrollEnd]);
};
