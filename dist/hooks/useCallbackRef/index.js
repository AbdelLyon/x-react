import { useRef as c, useEffect as f } from "react";
const n = (e) => {
  const r = c(e);
  return f(() => {
    r.current = e;
  }), (...t) => r.current?.(...t);
};
export {
  n as useCallbackRef
};
//# sourceMappingURL=index.js.map
