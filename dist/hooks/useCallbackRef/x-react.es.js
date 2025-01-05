import { useRef as n, useEffect as o } from "react";
const f = (r) => {
  const e = n(r);
  return o(() => {
    e.current = r;
  }), (...u) => {
    var t;
    return (t = e.current) == null ? void 0 : t.call(e, ...u);
  };
};
export {
  f as useCallbackRef
};
