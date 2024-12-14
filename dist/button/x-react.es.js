/* empty css                */
import { j as e } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as N } from "react";
import { Button as i } from "@nextui-org/react";
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
    target: d,
    rel: g,
    ...m
  }, f) => {
    const c = n(
      "font-normal border-1 border-default rounded-md",
      r === "solid" && "bg-primary text-white",
      r === "bordered" && "bg-default-100 text-primary border-primary/70 ",
      r === "light" && "bg-background border-none",
      x && "w-full",
      p && "opacity-50 cursor-not-allowed",
      o.base,
      u
    ), b = () => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      s && /* @__PURE__ */ e.jsx("span", { className: n("mr-2", o.beforeContent), children: s }),
      /* @__PURE__ */ e.jsx("span", { className: o.content, children: h }),
      t && /* @__PURE__ */ e.jsx("span", { className: n("ml-2", o.afterContent), children: t })
    ] });
    return l && a ? /* @__PURE__ */ e.jsx(
      i,
      {
        ref: f,
        ...m,
        as: a,
        variant: r,
        className: c,
        href: l,
        rel: d === "_blank" ? "noopener noreferrer" : g,
        target: d,
        children: /* @__PURE__ */ e.jsx(b, {})
      }
    ) : /* @__PURE__ */ e.jsx(
      i,
      {
        ref: f,
        ...m,
        variant: r,
        className: c,
        isDisabled: j,
        children: /* @__PURE__ */ e.jsx(b, {})
      }
    );
  }
);
export {
  k as Button
};
