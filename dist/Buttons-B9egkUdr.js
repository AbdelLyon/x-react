import { j as n } from "./jsx-runtime-BFln9wzo.js";
import { forwardRef as B } from "react";
import { Button as h, ButtonGroup as N } from "@nextui-org/react";
import { cn as c } from "./utils/x-react.es.js";
const b = B(
  ({
    fullWidth: e = !1,
    isLoading: r = !1,
    isDisabled: a = !1,
    startContent: o,
    endContent: t,
    className: l = "",
    LinkComponent: i,
    variant: m = "solid",
    classNames: s = {
      base: "",
      beforeContent: "",
      afterContent: "",
      content: ""
    },
    href: d,
    children: v,
    target: u,
    rel: y,
    ...f
  }, x) => {
    const j = c(
      "transition-none font-normal border-1 rounded-md",
      e && "w-full",
      r && "opacity-50 cursor-not-allowed",
      s.base,
      l
    ), p = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      o !== void 0 && /* @__PURE__ */ n.jsx("span", { className: c("mr-2", s.beforeContent), children: o }),
      /* @__PURE__ */ n.jsx("span", { className: s.content, children: v }),
      t !== void 0 && /* @__PURE__ */ n.jsx("span", { className: c("ml-2", s.afterContent), children: t })
    ] });
    return d !== void 0 && d.length > 0 && i !== void 0 && i !== void 0 ? /* @__PURE__ */ n.jsx(
      h,
      {
        ref: x,
        ...f,
        as: i,
        variant: m,
        className: j,
        href: d,
        rel: u === "_blank" ? "noopener noreferrer" : y,
        target: u,
        children: /* @__PURE__ */ n.jsx(p, {})
      }
    ) : /* @__PURE__ */ n.jsx(
      h,
      {
        ref: x,
        ...f,
        variant: m,
        className: j,
        isDisabled: a,
        children: /* @__PURE__ */ n.jsx(p, {})
      }
    );
  }
);
b.displayName = "Button";
const w = B(
  ({ buttons: e, ...r }, a) => /* @__PURE__ */ n.jsx(N, { ref: a, ...r, children: e.map(({ key: o, label: t, buttonProps: l }) => /* @__PURE__ */ n.jsx(b, { ...l, children: t }, o)) })
);
w.displayName = "Buttons";
export {
  b as B,
  w as a
};
