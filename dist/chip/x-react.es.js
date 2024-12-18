/* empty css                */
import { j as x } from "../jsx-runtime-Dx-03ztt.js";
import { Chip as C } from "@nextui-org/react";
import { forwardRef as j } from "react";
const n = j(
  ({
    // Content props with defaults
    children: r,
    avatar: o,
    startContent: i,
    endContent: p,
    // Appearance props with defaults
    variant: m = "solid",
    color: t = "default",
    size: s = "md",
    radius: f = "full",
    // State props with defaults
    isDisabled: a = !1,
    // Styling props
    className: e,
    classNames: l,
    // Event handlers
    onClose: d,
    ...h
  }, u) => /* @__PURE__ */ x.jsx(
    C,
    {
      ref: u,
      avatar: o,
      startContent: i,
      endContent: p,
      variant: m,
      color: t,
      size: s,
      radius: f,
      isDisabled: a,
      className: e,
      classNames: l,
      onClose: d,
      ...h,
      children: r
    }
  )
);
n.displayName = "Chip";
export {
  n as Chip
};
