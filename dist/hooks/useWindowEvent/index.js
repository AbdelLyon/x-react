import { useEffect as r } from "react";
const t = (e, n, o) => {
  r(() => (window.addEventListener(e, n, o), () => window.removeEventListener(e, n, o)), [e, n]);
};
export {
  t as useWindowEvent
};
//# sourceMappingURL=index.js.map
