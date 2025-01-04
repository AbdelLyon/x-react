import { useState as c, useRef as o } from "react";
const i = (t) => {
  const [u, e] = c(null), r = o(null);
  return { ref: (n) => {
    if (r.current && (r.current.disconnect(), r.current = null), n === null) {
      e(null);
      return;
    }
    r.current = new IntersectionObserver(([s]) => {
      e(s);
    }, t), r.current.observe(n);
  }, entry: u };
};
export {
  i as useIntersection
};
