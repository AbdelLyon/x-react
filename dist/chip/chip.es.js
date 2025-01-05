import "../image/image.es.js";
import { jsx as u } from "react/jsx-runtime";
import { Chip as n } from "@nextui-org/react";
import { forwardRef as x } from "react";
const c = x(
  ({
    children: r,
    avatar: o,
    startContent: i,
    endContent: p,
    variant: m = "solid",
    color: f = "default",
    size: t = "md",
    radius: a = "full",
    isDisabled: e = !1,
    className: l,
    classNames: s,
    onClose: d,
    ...h
  }, C) => /* @__PURE__ */ u(
    n,
    {
      ref: C,
      avatar: o,
      startContent: i,
      endContent: p,
      variant: m,
      color: f,
      size: t,
      radius: a,
      isDisabled: e,
      className: l,
      classNames: s,
      onClose: d,
      ...h,
      children: r
    }
  )
);
c.displayName = "Chip";
export {
  c as Chip
};
