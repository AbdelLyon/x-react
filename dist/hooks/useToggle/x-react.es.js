import { useReducer as i } from "react";
const d = (o = [!1, !0]) => {
  const c = (e, n) => {
    const t = n instanceof Function ? n(e[0]) : n, r = Math.abs(e.indexOf(t));
    return [...e.slice(r), ...e.slice(0, r)];
  }, [[u], s] = i(c, [...o]);
  return [
    u,
    s
  ];
};
export {
  d as useToggle
};
