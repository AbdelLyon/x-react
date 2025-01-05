import { useRef as t, useEffect as o } from "react";
const s = (e) => {
  const r = t(void 0);
  return o(() => {
    r.current = e;
  }, [e]), r.current;
};
export {
  s as usePreviousValue
};
