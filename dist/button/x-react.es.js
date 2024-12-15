/* empty css                */
import { j as e } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as w } from "react";
import { Button as x } from "@nextui-org/react";
import { cn as n } from "../utils/x-react.es.js";
const _ = w(
  ({
    fullWidth: j = !1,
    isLoading: p = !1,
    isDisabled: b = !1,
    startContent: o,
    endContent: s,
    className: u = "",
    LinkComponent: a,
    variant: t = "solid",
    customStyles: r = {
      base: "",
      beforeContent: "",
      afterContent: "",
      content: ""
    },
    href: l,
    children: N,
    target: f,
    rel: h,
    ...m
  }, c) => {
    const i = n(
      "transition-none font-normal border-1 border-default rounded-md",
      j && "w-full",
      p && "opacity-50 cursor-not-allowed",
      r.base,
      u
    ), d = () => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      o && /* @__PURE__ */ e.jsx("span", { className: n("mr-2", r.beforeContent), children: o }),
      /* @__PURE__ */ e.jsx("span", { className: r.content, children: N }),
      s && /* @__PURE__ */ e.jsx("span", { className: n("ml-2", r.afterContent), children: s })
    ] });
    return l && a ? /* @__PURE__ */ e.jsx(
      x,
      {
        ref: c,
        ...m,
        as: a,
        variant: t,
        className: i,
        href: l,
        rel: f === "_blank" ? "noopener noreferrer" : h,
        target: f,
        children: /* @__PURE__ */ e.jsx(d, {})
      }
    ) : /* @__PURE__ */ e.jsx(
      x,
      {
        ref: c,
        ...m,
        variant: t,
        className: i,
        isDisabled: b,
        children: /* @__PURE__ */ e.jsx(d, {})
      }
    );
  }
);
export {
  _ as Button
};
