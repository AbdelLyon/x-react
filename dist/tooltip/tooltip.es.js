import "../image/image.es.js";
import { jsx as g } from "react/jsx-runtime";
import { Tooltip as k } from "@nextui-org/react";
const y = ({
  trigger: o,
  content: t,
  size: e = "md",
  color: r = "default",
  radius: l = "sm",
  shadow: s = "sm",
  placement: f = "top",
  delay: m = 0,
  closeDelay: p = 500,
  offset: a = 7,
  containerPadding: i = 12,
  crossOffset: u = 0,
  showArrow: d = !1,
  shouldFlip: n = !0,
  triggerScaleOnOpen: T = !0,
  isKeyboardDismissDisabled: c = !1,
  isDismissable: x = !1,
  shouldCloseOnBlur: h = !0,
  isDisabled: j = !1,
  disableAnimation: $ = !1,
  ...b
}) => /* @__PURE__ */ g(
  k,
  {
    content: t,
    size: e,
    color: r,
    radius: l,
    shadow: s,
    placement: f,
    delay: m,
    closeDelay: p,
    offset: a,
    containerPadding: i,
    crossOffset: u,
    showArrow: d,
    shouldFlip: n,
    triggerScaleOnOpen: T,
    isKeyboardDismissDisabled: c,
    isDismissable: x,
    shouldCloseOnBlur: h,
    isDisabled: j,
    disableAnimation: $,
    ...b,
    children: o
  }
);
export {
  y as Tooltip
};
