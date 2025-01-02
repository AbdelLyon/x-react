/* empty css                */
import { j as x } from "../jsx-runtime-Bq5baZvQ.js";
import { Chip as C } from "@nextui-org/react";
import { forwardRef as j } from "react";
const n = j(
  ({
    children: r,
    avatar: o,
    startContent: i,
    endContent: p,
    variant: m = "solid",
    color: t = "default",
    size: s = "md",
    radius: f = "full",
    isDisabled: a = !1,
    className: e,
    classNames: l,
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
