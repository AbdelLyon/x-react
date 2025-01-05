import { useState as t, useEffect as L } from "react";
function v({
  fetchFunction: f,
  fetchDelay: c = 0,
  limit: n = 10
}) {
  const [m, u] = t([]), [d, h] = t(!0), [l, a] = t(!1), [o, w] = t(0), i = async (e) => {
    try {
      a(!0), o > 0 && await new Promise((r) => setTimeout(r, c));
      const { items: s, hasMore: I } = await f(
        e,
        n
      );
      h(I), u((r) => [...r, ...s]);
    } catch (s) {
      console.error("There was an error with the fetch operation:", s);
    } finally {
      a(!1);
    }
  };
  return L(() => {
    i(o);
  }, []), {
    items: m,
    hasMore: d,
    isLoading: l,
    onLoadMore: () => {
      const e = o + n;
      w(e), i(e);
    }
  };
}
export {
  v as useInfiniteList
};
