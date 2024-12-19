import { j as n } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as B } from "react";
import { Button as b, ButtonGroup as w } from "@nextui-org/react";
import { cn as c } from "./utils/x-react.es.js";
const C = B(
  ({
    fullWidth: o = !1,
    isLoading: a = !1,
    isDisabled: t = !1,
    startContent: e,
    endContent: s,
    className: l = "",
    LinkComponent: m,
    variant: i = "solid",
    customStyles: r = {
      base: "",
      beforeContent: "",
      afterContent: "",
      content: ""
    },
    href: f,
    children: h,
    target: d,
    rel: N,
    ...x
  }, j) => {
    const p = c(
      "transition-none font-normal border-1 rounded-md",
      o && "w-full",
      a && "opacity-50 cursor-not-allowed",
      r.base,
      l
    ), u = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      e && /* @__PURE__ */ n.jsx("span", { className: c("mr-2", r.beforeContent), children: e }),
      /* @__PURE__ */ n.jsx("span", { className: r.content, children: h }),
      s && /* @__PURE__ */ n.jsx("span", { className: c("ml-2", r.afterContent), children: s })
    ] });
    return f && m ? /* @__PURE__ */ n.jsx(
      b,
      {
        ref: j,
        ...x,
        as: m,
        variant: i,
        className: p,
        href: f,
        rel: d === "_blank" ? "noopener noreferrer" : N,
        target: d,
        children: /* @__PURE__ */ n.jsx(u, {})
      }
    ) : /* @__PURE__ */ n.jsx(
      b,
      {
        ref: j,
        ...x,
        variant: i,
        className: p,
        isDisabled: t,
        children: /* @__PURE__ */ n.jsx(u, {})
      }
    );
  }
), R = B(
  ({ buttons: o, ...a }, t) => /* @__PURE__ */ n.jsx(w, { ref: t, ...a, children: o.map(({ key: e, label: s, buttonProps: l }) => /* @__PURE__ */ n.jsx(C, { ...l, children: s }, e)) })
);
R.displayName = "Buttons";
export {
  C as B,
  R as a
};
