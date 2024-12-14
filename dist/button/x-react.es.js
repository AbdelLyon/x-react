/* empty css                */
import { j as e } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as N } from "react";
import { Button as b } from "@nextui-org/react";
import { cn as n } from "../utils/x-react.es.js";
const k = N(
  ({
    fullWidth: x = !1,
    isLoading: p = !1,
    isDisabled: j = !1,
    startContent: s,
    endContent: t,
    className: u = "",
    LinkComponent: a,
    variant: r = "solid",
    customStyles: o = {
      base: "",
      beforeContent: "",
      afterContent: "",
      content: ""
    },
    href: l,
    children: h,
    target: m,
    rel: w,
    ...d
  }, c) => {
    const f = n(
      "font-normal border-1 border-default rounded-md",
      r === "solid" && "bg-primary text-white",
      r === "bordered" && "bg-white dark:bg-content-1 text-primary border-primary/70 ",
      x && "w-full",
      p && "opacity-50 cursor-not-allowed",
      o.base,
      u
    ), i = () => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      s && /* @__PURE__ */ e.jsx("span", { className: n("mr-2", o.beforeContent), children: s }),
      /* @__PURE__ */ e.jsx("span", { className: o.content, children: h }),
      t && /* @__PURE__ */ e.jsx("span", { className: n("ml-2", o.afterContent), children: t })
    ] });
    return l && a ? /* @__PURE__ */ e.jsx(
      b,
      {
        ref: c,
        ...d,
        as: a,
        variant: r,
        className: f,
        href: l,
        rel: m === "_blank" ? "noopener noreferrer" : w,
        target: m,
        children: /* @__PURE__ */ e.jsx(i, {})
      }
    ) : /* @__PURE__ */ e.jsx(
      b,
      {
        ref: c,
        ...d,
        variant: r,
        className: f,
        isDisabled: j,
        children: /* @__PURE__ */ e.jsx(i, {})
      }
    );
  }
);
export {
  k as Button
};
