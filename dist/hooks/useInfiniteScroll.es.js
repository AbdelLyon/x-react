import { debounce as g } from "../utils.es.js";
import { useRef as t, useCallback as x, useLayoutEffect as R } from "react";
const I = (b = {}) => {
  const {
    hasMore: r = !0,
    distance: o = 250,
    isEnabled: i = !0,
    shouldUseLoader: u = !0,
    onLoadMore: n
  } = b, a = t(null), f = t(null), s = t(null), c = t(!1), l = x(() => {
    let e;
    return !c.current && r && n && (c.current = !0, n(), e = setTimeout(() => {
      c.current = !1;
    }, 100)), () => clearTimeout(e);
  }, [r, n]);
  return R(() => {
    const e = a.current;
    if (!i || !e || !r)
      return;
    if (u) {
      const m = f.current;
      if (!m)
        return;
      const h = {
        root: e,
        rootMargin: `0px 0px ${o}px 0px`,
        threshold: 0.1
      }, p = new IntersectionObserver((v) => {
        const [L] = v;
        L.isIntersecting && l();
      }, h);
      return p.observe(m), s.current = p, () => {
        s.current && s.current.disconnect();
      };
    }
    const d = g(() => {
      e.scrollHeight - e.scrollTop <= e.clientHeight + o && l();
    }, 100);
    return e.addEventListener("scroll", d), () => {
      e.removeEventListener(
        "scroll",
        d
      );
    };
  }, [r, o, i, u, l]), [f, a];
};
export {
  I as useInfiniteScroll
};
