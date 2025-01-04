import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime/x-react.es.js";
import "next-themes";
import { useState } from "react";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll/x-react.es.js";
import "clsx";
import { useInfiniteList } from "../../hooks/useInfiniteList/x-react.es.js";
import { Select, SelectItem } from "@nextui-org/react";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Select,
    {
      className,
      isLoading,
      items,
      scrollRef: scrollerRef,
      selectionMode,
      onOpenChange: setIsOpen,
      children: (item) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { children: renderItem(item) }, getItemKey(item))
    }
  );
}
export {
  InfiniteSelect
};
//# sourceMappingURL=x-react.es.js.map
