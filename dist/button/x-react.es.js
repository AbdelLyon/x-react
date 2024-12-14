/* empty css                */
import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as w } from "react";
import { Button as j } from "@nextui-org/react";
import { cn as n } from "../utils/x-react.es.js";
const F = w(
  ({
    fullWidth: p = !1,
    isLoading: b = !1,
    isDisabled: d = !1,
    startContent: s,
    endContent: o,
    className: u = "",
    LinkComponent: a,
    variant: t = "solid",
    customStyles: e = {
      base: "",
      beforeContent: "",
      afterContent: "",
      content: ""
    },
    href: l,
    children: N,
    target: m,
    rel: h,
    ...c
  }, f) => {
    const i = n(
      "transition-all font-normal bg-primary border-1",
      p && "w-full",
      b && "opacity-50 cursor-not-allowed",
      e.base,
      u
    ), x = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      s && /* @__PURE__ */ r.jsx("span", { className: n("mr-2", e.beforeContent), children: s }),
      /* @__PURE__ */ r.jsx("span", { className: e.content, children: N }),
      o && /* @__PURE__ */ r.jsx("span", { className: n("ml-2", e.afterContent), children: o })
    ] });
    return l && a ? /* @__PURE__ */ r.jsx(
      j,
      {
        ref: f,
        ...c,
        as: a,
        variant: t,
        className: i,
        href: l,
        rel: m === "_blank" ? "noopener noreferrer" : h,
        target: m,
        children: /* @__PURE__ */ r.jsx(x, {})
      }
    ) : /* @__PURE__ */ r.jsx(
      j,
      {
        ref: f,
        ...c,
        variant: t,
        className: i,
        isDisabled: d,
        children: /* @__PURE__ */ r.jsx(x, {})
      }
    );
  }
);
export {
  F as Button
};
