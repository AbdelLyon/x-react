import { jsx as u } from "react/jsx-runtime";
import { Chip as n } from "@nextui-org/react";
import { forwardRef as x } from "react";
const c = x(
  ({
    children: r,
    avatar: o,
    startContent: i,
    endContent: p,
    variant: f = "solid",
    color: m = "default",
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
      variant: f,
      color: m,
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
//# sourceMappingURL=index.js.map
