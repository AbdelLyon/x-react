/* empty css                */
import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as h } from "react";
import { Button as l } from "@nextui-org/react";
import { cn as n } from "../utils/x-react.es.js";
const v = (a) => ({
  solid: {
    default: "bg-default-500 text-default-foreground",
    primary: "bg-primary-500 text-primary-foreground",
    secondary: "bg-secondary-500 text-secondary-foreground",
    success: "bg-success-500 text-success-foreground",
    warning: "bg-warning-500 text-warning-foreground",
    danger: "bg-danger-500 text-danger-foreground"
  },
  bordered: {
    default: "border-default-500 text-default-500 bg-transparent",
    primary: "border-primary-500 text-primary-500 bg-transparent",
    secondary: "border-secondary-500 text-secondary-500 bg-transparent",
    success: "border-success-500 text-success-500 bg-transparent",
    warning: "border-warning-500 text-warning-500 bg-transparent",
    danger: "border-danger-500 text-danger-500 bg-transparent"
  },
  light: {
    default: "text-default-500 bg-default-100",
    primary: "text-primary-500 bg-primary-100",
    secondary: "text-secondary-500 bg-secondary-100",
    success: "text-success-500 bg-success-100",
    warning: "text-warning-500 bg-warning-100",
    danger: "text-danger-500 bg-danger-100"
  },
  flat: {
    default: "bg-default-100 text-default-600",
    primary: "bg-primary-100 text-primary-600",
    secondary: "bg-secondary-100 text-secondary-600",
    success: "bg-success-100 text-success-600",
    warning: "bg-warning-100 text-warning-600",
    danger: "bg-danger-100 text-danger-600"
  },
  faded: {
    default: "border-default-200 bg-default-100 text-default-600",
    primary: "border-primary-200 bg-primary-100 text-primary-600",
    secondary: "border-secondary-200 bg-secondary-100 text-secondary-600",
    success: "border-success-200 bg-success-100 text-success-600",
    warning: "border-warning-200 bg-warning-100 text-warning-600",
    danger: "border-danger-200 bg-danger-100 text-danger-600"
  },
  shadow: {
    default: "bg-default-500 text-default-foreground shadow-lg",
    primary: "bg-primary-500 text-primary-foreground shadow-lg",
    secondary: "bg-secondary-500 text-secondary-foreground shadow-lg",
    success: "bg-success-500 text-success-foreground shadow-lg",
    warning: "bg-warning-500 text-warning-foreground shadow-lg",
    danger: "bg-danger-500 text-danger-foreground shadow-lg"
  },
  ghost: {
    default: "border-default-500 text-default-500 hover:bg-default-500 hover:text-default-foreground",
    primary: "border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-primary-foreground",
    secondary: "border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-secondary-foreground",
    success: "border-success-500 text-success-500 hover:bg-success-500 hover:text-success-foreground",
    warning: "border-warning-500 text-warning-500 hover:bg-warning-500 hover:text-warning-foreground",
    danger: "border-danger-500 text-danger-500 hover:bg-danger-500 hover:text-danger-foreground"
  }
})[a], E = h(
  ({
    fullWidth: a = !1,
    isLoading: s = !1,
    isDisabled: y = !1,
    startContent: o,
    endContent: d,
    className: m = "",
    LinkComponent: g,
    variant: t = "solid",
    customStyles: e = {
      base: "",
      beforeContent: "",
      afterContent: "",
      content: ""
    },
    href: c,
    children: p,
    target: u,
    rel: w,
    ...b
  }, i) => {
    const f = n(
      "transition-all font-normal border-1 rounded-sm",
      v(t),
      a && "w-full",
      s && "opacity-50 cursor-not-allowed",
      e.base,
      m
    ), x = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      o && /* @__PURE__ */ r.jsx("span", { className: n("mr-2", e.beforeContent), children: o }),
      /* @__PURE__ */ r.jsx("span", { className: e.content, children: p }),
      d && /* @__PURE__ */ r.jsx("span", { className: n("ml-2", e.afterContent), children: d })
    ] });
    return c && g ? /* @__PURE__ */ r.jsx(
      l,
      {
        ref: i,
        ...b,
        as: g,
        variant: t,
        className: f,
        href: c,
        rel: u === "_blank" ? "noopener noreferrer" : w,
        target: u,
        children: /* @__PURE__ */ r.jsx(x, {})
      }
    ) : /* @__PURE__ */ r.jsx(
      l,
      {
        ref: i,
        ...b,
        variant: t,
        className: f,
        isDisabled: y,
        children: /* @__PURE__ */ r.jsx(x, {})
      }
    );
  }
);
export {
  E as Button
};
