import { j as n } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as B } from "react";
import { Button as h, ButtonGroup as g } from "@nextui-org/react";
import { cn as d } from "./utils/x-react.es.js";
const b = B(
  ({
    fullWidth: o = !1,
    isLoading: r = !1,
    isDisabled: t = !1,
    startContent: s,
    endContent: e,
    className: l = "",
    LinkComponent: i,
    variant: m = "solid",
    customStyles: a = {
      base: "",
      beforeContent: "",
      afterContent: "",
      content: ""
    },
    href: c,
    children: N,
    target: f,
    rel: w,
    ...u
  }, x) => {
    const j = d(
      "transition-none font-normal border-1 rounded-md",
      o && "w-full",
      r && "opacity-50 cursor-not-allowed",
      a.base,
      l
    ), p = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      s !== null && /* @__PURE__ */ n.jsx("span", { className: d("mr-2", a.beforeContent), children: s }),
      /* @__PURE__ */ n.jsx("span", { className: a.content, children: N }),
      e !== null && /* @__PURE__ */ n.jsx("span", { className: d("ml-2", a.afterContent), children: e })
    ] });
    return typeof c == "string" && c.length > 0 && i !== null && i !== void 0 ? /* @__PURE__ */ n.jsx(
      h,
      {
        ref: x,
        ...u,
        as: i,
        variant: m,
        className: j,
        href: c,
        rel: f === "_blank" ? "noopener noreferrer" : w,
        target: f,
        children: /* @__PURE__ */ n.jsx(p, {})
      }
    ) : /* @__PURE__ */ n.jsx(
      h,
      {
        ref: x,
        ...u,
        variant: m,
        className: j,
        isDisabled: t,
        children: /* @__PURE__ */ n.jsx(p, {})
      }
    );
  }
);
b.displayName = "Button";
const y = B(
  ({ buttons: o, ...r }, t) => /* @__PURE__ */ n.jsx(g, { ref: t, ...r, children: o.map(({ key: s, label: e, buttonProps: l }) => /* @__PURE__ */ n.jsx(b, { ...l, children: e }, s)) })
);
y.displayName = "Buttons";
export {
  b as B,
  y as a
};
