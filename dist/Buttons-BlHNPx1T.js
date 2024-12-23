import { j as n } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as B } from "react";
import { Button as h, ButtonGroup as y } from "@nextui-org/react";
import { cn as d } from "./utils/x-react.es.js";
const b = B(
  ({
    fullWidth: e = !1,
    isLoading: r = !1,
    isDisabled: t = !1,
    startContent: s,
    endContent: o,
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
    target: u,
    rel: w,
    ...f
  }, x) => {
    const j = d(
      "transition-none font-normal border-1 rounded-md",
      e && "w-full",
      r && "opacity-50 cursor-not-allowed",
      a.base,
      l
    ), p = () => {
      const g = s != null, v = o != null;
      return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
        g && /* @__PURE__ */ n.jsx("span", { className: d("mr-2", a.beforeContent), children: s }),
        /* @__PURE__ */ n.jsx("span", { className: a.content, children: N }),
        v && /* @__PURE__ */ n.jsx("span", { className: d("ml-2", a.afterContent), children: o })
      ] });
    };
    return typeof c == "string" && c.length > 0 && i !== null && i !== void 0 ? /* @__PURE__ */ n.jsx(
      h,
      {
        ref: x,
        ...f,
        as: i,
        variant: m,
        className: j,
        href: c,
        rel: u === "_blank" ? "noopener noreferrer" : w,
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
        isDisabled: t,
        children: /* @__PURE__ */ n.jsx(p, {})
      }
    );
  }
);
b.displayName = "Button";
const E = B(
  ({ buttons: e, ...r }, t) => /* @__PURE__ */ n.jsx(y, { ref: t, ...r, children: e.map(({ key: s, label: o, buttonProps: l }) => /* @__PURE__ */ n.jsx(b, { ...l, children: o }, s)) })
);
E.displayName = "Buttons";
export {
  b as B,
  E as a
};
