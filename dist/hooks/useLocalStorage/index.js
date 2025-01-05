import { useState as u, useCallback as s, useEffect as g } from "react";
function w(a, e) {
  if (typeof window > "u")
    return e;
  try {
    const r = window.localStorage.getItem(a);
    return r === null ? e : JSON.parse(r);
  } catch (r) {
    return console.warn(`Error reading localStorage key "${a}":`, r), e;
  }
}
const d = (a) => {
  const { key: e, defaultValue: r } = a, [c, n] = u(
    () => w(e, r)
  ), l = s(
    (t) => {
      try {
        const o = t instanceof Function ? t(c) : t;
        n(o), window.localStorage.setItem(e, JSON.stringify(o));
      } catch (o) {
        console.warn(`Error setting localStorage key "${e}":`, o);
      }
    },
    [e, c]
  ), i = s(() => {
    try {
      window.localStorage.removeItem(e), n(r);
    } catch (t) {
      console.warn(`Error removing localStorage key "${e}":`, t);
    }
  }, [e, r]);
  return g(() => {
    const t = (o) => {
      if (o.key === e && o.newValue !== null)
        try {
          n(JSON.parse(o.newValue));
        } catch {
          n(r);
        }
      else o.key === e && n(r);
    };
    return window.addEventListener("storage", t), () => window.removeEventListener("storage", t);
  }, [e, r]), [c, l, i];
};
export {
  d as useLocalStorage
};
//# sourceMappingURL=index.js.map
