/* empty css                */
import { j as e } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as B } from "react";
import { Button as p } from "@nextui-org/react";
import { cn as s } from "../utils/x-react.es.js";
const w = B(
  ({
    fullWidth: x = !1,
    isLoading: j = !1,
    isDisabled: b = !1,
    startContent: n,
    endContent: a,
    className: u = "",
    LinkComponent: t,
    variant: r = "solid",
    customStyles: o = {
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
  }, m) => {
    const i = s(
      "transition-all font-normal dark:bg-opacity-90",
      x && "w-full",
      j && "opacity-50 cursor-not-allowed",
      r === "bordered" || r === "flat" && "border-1",
      o.base,
      u
    ), d = () => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      n && /* @__PURE__ */ e.jsx("span", { className: s("mr-2", o.beforeContent), children: n }),
      /* @__PURE__ */ e.jsx("span", { className: o.content, children: N }),
      a && /* @__PURE__ */ e.jsx("span", { className: s("ml-2", o.afterContent), children: a })
    ] });
    return l && t ? /* @__PURE__ */ e.jsx(
      p,
      {
        ref: m,
        ...f,
        as: t,
        variant: r,
        className: i,
        href: l,
        rel: c === "_blank" ? "noopener noreferrer" : h,
        target: c,
        children: /* @__PURE__ */ e.jsx(d, {})
      }
    ) : /* @__PURE__ */ e.jsx(
      p,
      {
        ref: m,
        ...f,
        variant: r,
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
