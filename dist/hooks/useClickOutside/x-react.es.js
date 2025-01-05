import { useRef as d, useEffect as f } from "react";
const i = ["mousedown", "touchstart"], E = (o, c, s) => {
  const r = d(null);
  return f(() => {
    const n = (t) => {
      const { target: e } = t ?? {};
      if (Array.isArray(s)) {
        const a = (e == null ? void 0 : e.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(e) && e.tagName !== "HTML";
        s.every(
          (u) => !!u && !t.composedPath().includes(u)
        ) && !a && o();
      } else r.current && !r.current.contains(e) && o();
    };
    return (c || i).forEach(
      (t) => document.addEventListener(t, n)
    ), () => {
      (c || i).forEach(
        (t) => document.removeEventListener(t, n)
      );
    };
  }, [r, o, s]), r;
};
export {
  E as useClickOutside
};
