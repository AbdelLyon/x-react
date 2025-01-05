import { useRef as d, useEffect as f } from "react";
const i = ["mousedown", "touchstart"], l = (o, c, s) => {
  const e = d(null);
  return f(() => {
    const n = (t) => {
      const { target: r } = t ?? {};
      if (Array.isArray(s)) {
        const a = r?.hasAttribute("data-ignore-outside-clicks") || !document.body.contains(r) && r.tagName !== "HTML";
        s.every(
          (u) => !!u && !t.composedPath().includes(u)
        ) && !a && o();
      } else e.current && !e.current.contains(r) && o();
    };
    return (c || i).forEach(
      (t) => document.addEventListener(t, n)
    ), () => {
      (c || i).forEach(
        (t) => document.removeEventListener(t, n)
      );
    };
  }, [e, o, s]), e;
};
export {
  l as useClickOutside
};
//# sourceMappingURL=index.js.map
