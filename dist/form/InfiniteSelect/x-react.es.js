import { jsx as o } from "react/jsx-runtime";
import "next-themes";
import { useState as I } from "react";
import { useInfiniteScroll as S } from "../../hooks/useInfiniteScroll/x-react.es.js";
import "clsx";
import "tailwind-merge";
import { useInfiniteList as x } from "../../hooks/useInfiniteList/x-react.es.js";
import { Select as L, SelectItem as g } from "@nextui-org/react";
function U({
  fetchFunction: r,
  fetchDelay: t = 0,
  limit: i = 10,
  className: n = "max-w-xs",
  renderItem: s,
  getItemKey: l,
  selectionMode: m = "single"
}) {
  const [f, c] = I(!1), { items: p, hasMore: a, isLoading: d, onLoadMore: u } = x({
    fetchFunction: r,
    fetchDelay: t,
    limit: i
  }), [, h] = S({
    hasMore: a,
    isEnabled: f,
    shouldUseLoader: !1,
    onLoadMore: u
  });
  return /* @__PURE__ */ o(
    L,
    {
      className: n,
      isLoading: d,
      items: p,
      scrollRef: h,
      selectionMode: m,
      onOpenChange: c,
      children: (e) => /* @__PURE__ */ o(g, { children: s(e) }, l(e))
    }
  );
}
export {
  U as InfiniteSelect
};
