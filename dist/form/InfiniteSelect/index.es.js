import { jsx } from "react/jsx-runtime";
import { useInfiniteList } from "../../hooks/useInfiniteList/index.es.js";
import { Select, SelectItem } from "@heroui/react";
import { useState } from "react";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll/index.es.js";
function InfiniteSelect({
  fetchFunction,
  fetchDelay = 0,
  limit = 10,
  className = "max-w-xs",
  renderItem,
  getItemKey,
  selectionMode = "single"
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { items, hasMore, isLoading, onLoadMore } = useInfiniteList({
    fetchFunction,
    fetchDelay,
    limit
  });
  const [, scrollerRef] = useInfiniteScroll({
    hasMore,
    isEnabled: isOpen,
    shouldUseLoader: false,
    onLoadMore
  });
  return /* @__PURE__ */ jsx(
    Select,
    {
      className,
      isLoading,
      items,
      scrollRef: scrollerRef,
      selectionMode,
      onOpenChange: setIsOpen,
      children: (item) => /* @__PURE__ */ jsx(SelectItem, { children: renderItem(item) }, getItemKey(item))
    }
  );
}
export {
  InfiniteSelect
};
