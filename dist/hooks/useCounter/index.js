import { limitValue as o } from "../../utils/index.js";
import { useState as i } from "react";
const u = {
  min: -1 / 0,
  max: 1 / 0
}, y = (r = 0, c) => {
  const { min: t, max: e } = { ...u, ...c }, [m, s] = i(
    o(r, t, e)
  );
  return [m, { increment: () => s((n) => o(n + 1, t, e)), decrement: () => s((n) => o(n - 1, t, e)), set: (n) => s(o(n, t, e)), reset: () => s(o(r, t, e)) }];
};
export {
  y as useCounter
};
//# sourceMappingURL=index.js.map
