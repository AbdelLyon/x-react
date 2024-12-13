import { j as d } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as H } from "react";
import { Card as $, CardHeader as g, CardBody as k, CardFooter as q } from "@nextui-org/react";
const v = H(
  ({
    children: e,
    shadow: t = "none",
    radius: i = "md",
    fullWidth: n = !1,
    isHoverable: x = !1,
    isPressable: C = !1,
    isBlurred: j = !1,
    isFooterBlurred: p = !1,
    isDisabled: h = !1,
    disableAnimation: y = !1,
    disableRipple: u = !1,
    allowTextSelectionOnPress: R = !1,
    classNames: r,
    header: o,
    footer: f,
    onPress: b,
    onPressStart: l,
    onPressEnd: w,
    onPressChange: B,
    onPressUp: E
  }, F) => /* @__PURE__ */ d.jsxs(
    $,
    {
      ref: F,
      shadow: t,
      radius: i,
      fullWidth: n,
      isHoverable: x,
      isPressable: C,
      isBlurred: j,
      isFooterBlurred: p,
      isDisabled: h,
      disableAnimation: y,
      disableRipple: u,
      allowTextSelectionOnPress: R,
      classNames: r,
      onPress: b,
      onPressStart: l,
      onPressEnd: w,
      onPressChange: B,
      onPressUp: E,
      children: [
        o && /* @__PURE__ */ d.jsx(g, { className: r == null ? void 0 : r.header, children: o }),
        /* @__PURE__ */ d.jsx(k, { className: r == null ? void 0 : r.body, children: e }),
        f && /* @__PURE__ */ d.jsx(q, { className: r == null ? void 0 : r.footer, children: f })
      ]
    }
  )
);
v.displayName = "Card";
export {
  v as Card
};
