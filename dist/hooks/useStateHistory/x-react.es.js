import { useState as c } from "react";
const y = (o) => {
  const [e, s] = c({
    history: [o],
    current: 0
  }), n = {
    set: (r) => {
      s((t) => {
        const h = [
          ...t.history.slice(0, t.current + 1),
          r
        ];
        return {
          history: h,
          current: h.length - 1
        };
      });
    },
    back: (r = 1) => {
      s((t) => ({
        history: t.history,
        current: Math.max(0, t.current - r)
      }));
    },
    forward: (r = 1) => {
      s((t) => ({
        history: t.history,
        current: Math.min(
          t.history.length - 1,
          t.current + r
        )
      }));
    },
    reset: () => {
      s({
        history: [o],
        current: 0
      });
    }
  };
  return [e.history[e.current], n, e];
};
export {
  y as useStateHistory
};
