import { jsx as o } from "react/jsx-runtime";
import { useInfiniteList as I } from "../../hooks/useInfiniteList/index.js";
import { Select as S, SelectItem as x } from "@nextui-org/react";
import { useState as L } from "react";
import { useInfiniteScroll as g } from "../../hooks/useInfiniteScroll/index.js";
function w({
  fetchFunction: n,
  fetchDelay: s = 0,
  limit: r = 10,
  className: t = "max-w-xs",
  renderItem: i,
  getItemKey: l,
  selectionMode: f = "single"
}) {
  const [c, m] = L(!1), { items: a, hasMore: p, isLoading: d, onLoadMore: u } = I({
    fetchFunction: n,
    fetchDelay: s,
    limit: r
  }), [, h] = g({
    hasMore: p,
    isEnabled: c,
    shouldUseLoader: !1,
    onLoadMore: u
  });
  return /* @__PURE__ */ o(
    S,
    {
      className: t,
      isLoading: d,
      items: a,
      scrollRef: h,
      selectionMode: f,
      onOpenChange: m,
      children: (e) => /* @__PURE__ */ o(x, { children: i(e) }, l(e))
    }
  );
}
export {
  w as InfiniteSelect
};
//# sourceMappingURL=index.js.map
