/* empty css                */
import { j as e } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as B } from "react";
import { Button as p } from "@nextui-org/react";
import { cn as n } from "../utils/x-react.es.js";
const w = B(
  ({
    fullWidth: x = !1,
    isLoading: j = !1,
    isDisabled: b = !1,
    startContent: s,
    endContent: a,
    className: u = "",
    LinkComponent: t,
    variant: o = "solid",
    customStyles: r = {
      base: "",
      beforeContent: "",
      afterContent: "",
      content: ""
    },
    href: l,
    children: N,
    target: c,
    rel: h,
    ...m
  }, f) => {
    const i = n(
      "transition-all font-normal dark:bg-opacity-90",
      x && "w-full",
      j && "opacity-50 cursor-not-allowed",
      o === "bordered" && "border-1",
      r.base,
      u
    ), d = () => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      s && /* @__PURE__ */ e.jsx("span", { className: n("mr-2", r.beforeContent), children: s }),
      /* @__PURE__ */ e.jsx("span", { className: r.content, children: N }),
      a && /* @__PURE__ */ e.jsx("span", { className: n("ml-2", r.afterContent), children: a })
    ] });
    return l && t ? /* @__PURE__ */ e.jsx(
      p,
      {
        ref: f,
        ...m,
        as: t,
        variant: o,
        className: i,
        href: l,
        rel: c === "_blank" ? "noopener noreferrer" : h,
        target: c,
        children: /* @__PURE__ */ e.jsx(d, {})
      }
    ) : /* @__PURE__ */ e.jsx(
      p,
      {
        ref: f,
        ...m,
        variant: o,
        className: i,
        isDisabled: b,
        children: /* @__PURE__ */ e.jsx(d, {})
      }
    );
  }
);
w.displayName = "Button";
export {
  w as Button
};
