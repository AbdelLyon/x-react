import { j as n } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as B } from "react";
import { Button as h, ButtonGroup as w } from "@nextui-org/react";
import { cn as c } from "./utils/x-react.es.js";
const b = B(
  ({
    fullWidth: a = !1,
    isLoading: r = !1,
    isDisabled: t = !1,
    startContent: s,
    endContent: o,
    className: l = "",
    LinkComponent: i,
    variant: m = "solid",
    customStyles: e = {
      base: "",
      beforeContent: "",
      afterContent: "",
      content: ""
    },
    href: d,
    children: N,
    target: f,
    rel: v,
    ...x
  }, j) => {
    const u = c(
      "transition-none font-normal border-1 rounded-md",
      a && "w-full",
      r && "opacity-50 cursor-not-allowed",
      e.base,
      l
    ), p = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      s !== void 0 && /* @__PURE__ */ n.jsx("span", { className: c("mr-2", e.beforeContent), children: s }),
      /* @__PURE__ */ n.jsx("span", { className: e.content, children: N }),
      o !== void 0 && /* @__PURE__ */ n.jsx("span", { className: c("ml-2", e.afterContent), children: o })
    ] });
    return d !== void 0 && d.length > 0 && i !== void 0 && i !== void 0 ? /* @__PURE__ */ n.jsx(
      h,
      {
        ref: j,
        ...x,
        as: i,
        variant: m,
        className: u,
        href: d,
        rel: f === "_blank" ? "noopener noreferrer" : v,
        target: f,
        children: /* @__PURE__ */ n.jsx(p, {})
      }
    ) : /* @__PURE__ */ n.jsx(
      h,
      {
        ref: j,
        ...x,
        variant: m,
        className: u,
        isDisabled: t,
        children: /* @__PURE__ */ n.jsx(p, {})
      }
    );
  }
);
b.displayName = "Button";
const R = B(
  ({ buttons: a, ...r }, t) => /* @__PURE__ */ n.jsx(w, { ref: t, ...r, children: a.map(({ key: s, label: o, buttonProps: l }) => /* @__PURE__ */ n.jsx(b, { ...l, children: o }, s)) })
);
R.displayName = "Buttons";
export {
  b as B,
  R as a
};
