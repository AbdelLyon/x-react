/* empty css                */
import { j as n } from "../jsx-runtime-Dx-03ztt.js";
import { Button as m } from "@nextui-org/react";
import { cn as a } from "../utils/x-react.es.js";
const C = ({
  fullWidth: x = !1,
  isLoading: j = !1,
  isDisabled: p = !1,
  startContent: r,
  endContent: s,
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
  const i = a(
    "transition-all font-normal dark:bg-opacity-90",
    x && "w-full",
    j && "opacity-50 cursor-not-allowed",
    e.base,
    b
  ), f = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    r && /* @__PURE__ */ n.jsx("span", { className: a("mr-2", e.beforeContent), children: r }),
    /* @__PURE__ */ n.jsx("span", { className: e.content, children: d }),
    s && /* @__PURE__ */ n.jsx("span", { className: a("ml-2", e.afterContent), children: s })
  ] });
  return t && o ? /* @__PURE__ */ n.jsx(
    m,
    {
      ...c,
      as: o,
      className: i,
      href: t,
      rel: l === "_blank" ? "noopener noreferrer" : u,
      target: l,
      children: /* @__PURE__ */ n.jsx(f, {})
    }
  ) : /* @__PURE__ */ n.jsx(m, { ...c, className: i, isDisabled: p, children: /* @__PURE__ */ n.jsx(f, {}) });
};
export {
  C as Button
};
