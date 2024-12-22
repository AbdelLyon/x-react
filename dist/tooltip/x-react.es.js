/* empty css                */
import { j as $ } from "../jsx-runtime-Dx-03ztt.js";
import { Tooltip as b } from "@nextui-org/react";
const v = ({
  trigger: t,
  content: o,
  size: e = "md",
  color: r = "default",
  radius: s = "md",
  shadow: l = "sm",
  placement: m = "top",
  delay: p = 0,
  closeDelay: a = 500,
  offset: f = 7,
  containerPadding: i = 12,
  crossOffset: u = 0,
  showArrow: d = !1,
  shouldFlip: n = !0,
  triggerScaleOnOpen: x = !0,
  isKeyboardDismissDisabled: j = !1,
  isDismissable: T = !1,
  shouldCloseOnBlur: c = !0,
  isDisabled: h = !1,
  disableAnimation: E = !1,
  ...R
}) => /* @__PURE__ */ $.jsx(
  b,
  {
    content: o,
    size: e,
    color: r,
    radius: s,
    shadow: l,
    placement: m,
    delay: p,
    closeDelay: a,
    offset: f,
    containerPadding: i,
    crossOffset: u,
    showArrow: d,
    shouldFlip: n,
    triggerScaleOnOpen: x,
    isKeyboardDismissDisabled: j,
    isDismissable: T,
    shouldCloseOnBlur: c,
    isDisabled: h,
    disableAnimation: E,
    ...R,
    children: t
  }
);
export {
  v as Tooltip
};
