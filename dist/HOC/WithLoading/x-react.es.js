import { jsx as n } from "react/jsx-runtime";
const u = (i, o = () => /* @__PURE__ */ n("div", { children: "Loading..." })) => function({
  loading: r,
  ...t
}) {
  return r ? /* @__PURE__ */ n(o, {}) : /* @__PURE__ */ n(i, { ...t });
};
export {
  u as WithLoading
};
