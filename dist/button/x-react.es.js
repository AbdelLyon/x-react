/* empty css                */
import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as w } from "react";
import { Button as j } from "@nextui-org/react";
import { cn as n } from "../utils/x-react.es.js";
const E = w(
  ({
    fullWidth: p = !1,
    isLoading: d = !1,
    isDisabled: b = !1,
    startContent: o,
    endContent: s,
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
    target: c,
    rel: h,
    ...f
  }, i) => {
    const m = n(
      "transition-all font-normal dark:bg-opacity-90 border-1",
      p && "w-full",
      d && "opacity-50 cursor-not-allowed",
      e.base,
      u
    ), x = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      o && /* @__PURE__ */ r.jsx("span", { className: n("mr-2", e.beforeContent), children: o }),
      /* @__PURE__ */ r.jsx("span", { className: e.content, children: N }),
      s && /* @__PURE__ */ r.jsx("span", { className: n("ml-2", e.afterContent), children: s })
    ] });
    return l && a ? /* @__PURE__ */ r.jsx(
      j,
      {
        ref: i,
        ...f,
        as: a,
        variant: t,
        className: m,
        href: l,
        rel: c === "_blank" ? "noopener noreferrer" : h,
        target: c,
        children: /* @__PURE__ */ r.jsx(x, {})
      }
    ) : /* @__PURE__ */ r.jsx(
      j,
      {
        ref: i,
        ...f,
        variant: t,
        className: m,
        isDisabled: b,
        children: /* @__PURE__ */ r.jsx(x, {})
      }
    );
  }
);
export {
  E as Button
};
