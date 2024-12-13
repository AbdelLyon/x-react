/* empty css                */
import { j as d } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as H } from "react";
import { Card as $, CardHeader as g, CardBody as k, CardFooter as q } from "@nextui-org/react";
const v = H(
  ({
    children: t,
    shadow: e = "none",
    radius: i = "md",
    fullWidth: n = !1,
    isHoverable: p = !1,
    isPressable: x = !1,
    isBlurred: C = !1,
    isFooterBlurred: j = !1,
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
      shadow: e,
      radius: i,
      fullWidth: n,
      isHoverable: p,
      isPressable: x,
      isBlurred: C,
      isFooterBlurred: j,
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
        /* @__PURE__ */ d.jsx(k, { className: r == null ? void 0 : r.body, children: t }),
        f && /* @__PURE__ */ d.jsx(q, { className: r == null ? void 0 : r.footer, children: f })
      ]
    }
  )
);
v.displayName = "Card";
export {
  v as Card
};
