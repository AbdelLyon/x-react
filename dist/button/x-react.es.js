/* empty css                */
import { j as n } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as h } from "react";
import { Button as b, ButtonGroup as w } from "@nextui-org/react";
import { cn as c } from "../utils/x-react.es.js";
const C = h(
  ({
    fullWidth: s = !1,
    isLoading: t = !1,
    isDisabled: a = !1,
    startContent: e,
    endContent: r,
    className: l = "",
    LinkComponent: m,
    variant: i = "solid",
    customStyles: o = {
      base: "",
      beforeContent: "",
      afterContent: "",
      content: ""
    },
    href: f,
    children: B,
    target: d,
    rel: N,
    ...x
  }, j) => {
    const p = c(
      "transition-none font-normal border-1 rounded-md",
      s && "w-full",
      t && "opacity-50 cursor-not-allowed",
      o.base,
      l
    ), u = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      e && /* @__PURE__ */ n.jsx("span", { className: c("mr-2", o.beforeContent), children: e }),
      /* @__PURE__ */ n.jsx("span", { className: o.content, children: B }),
      r && /* @__PURE__ */ n.jsx("span", { className: c("ml-2", o.afterContent), children: r })
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
        isDisabled: a,
        children: /* @__PURE__ */ n.jsx(u, {})
      }
    );
  }
), R = h(
  ({ buttons: s, ...t }, a) => /* @__PURE__ */ n.jsx(w, { ref: a, ...t, children: s.map(({ key: e, label: r, buttonProps: l }) => /* @__PURE__ */ n.jsx(C, { ...l, children: r }, e)) })
);
R.displayName = "Buttons";
export {
  C as Button,
  R as Buttons
};
