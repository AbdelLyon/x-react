import { j as n } from "../jsx-runtime-Bq5baZvQ.js";
import { Button as m } from "@nextui-org/react";
import { cn as a } from "../utils/x-react.es.js";
const w = ({
  fullWidth: x = !1,
  isLoading: j = !1,
  isDisabled: p = !1,
  startContent: s,
  endContent: r,
  className: b = "",
  LinkComponent: o,
  customStyles: e = {
    base: "",
    beforeContent: "",
    afterContent: "",
    content: ""
  },
  href: t,
  children: d,
  target: l,
  rel: u,
  ...c
}) => {
  const f = a(
    "transition-all font-normal dark:bg-opacity-90",
    x && "w-full",
    j && "opacity-50 cursor-not-allowed",
    e.base,
    b
  ), i = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    s && /* @__PURE__ */ n.jsx("span", { className: a("mr-2", e.beforeContent), children: s }),
    /* @__PURE__ */ n.jsx("span", { className: e.content, children: d }),
    r && /* @__PURE__ */ n.jsx("span", { className: a("ml-2", e.afterContent), children: r })
  ] });
  return t && o ? /* @__PURE__ */ n.jsx(
    m,
    {
      ...c,
      as: o,
      className: f,
      href: t,
      rel: l === "_blank" ? "noopener noreferrer" : u,
      target: l,
      children: /* @__PURE__ */ n.jsx(i, {})
    }
  ) : /* @__PURE__ */ n.jsx(m, { ...c, className: f, isDisabled: p, children: /* @__PURE__ */ n.jsx(i, {}) });
};
export {
  w as Button
};
