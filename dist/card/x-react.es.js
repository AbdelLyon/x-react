/* empty css                */
import { j as d } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as H } from "react";
import { Card as $, CardHeader as g, CardBody as k, CardFooter as q } from "@nextui-org/react";
const v = H(
  ({
    children: n,
    shadow: t = "none",
    radius: e = "md",
    fullWidth: i = !1,
    isHoverable: p = !1,
    isPressable: x = !1,
    isBlurred: C = !1,
    isFooterBlurred: j = !1,
    isDisabled: l = !1,
    disableAnimation: u = !1,
    disableRipple: h = !1,
    allowTextSelectionOnPress: y = !1,
    classNames: r,
    header: o,
    footer: f,
    onPress: R,
    onPressStart: b,
    onPressEnd: w,
    onPressChange: B,
    onPressUp: E
  }, F) => /* @__PURE__ */ d.jsxs(
    $,
    {
      ref: F,
      shadow: t,
      radius: e,
      fullWidth: i,
      isHoverable: p,
      isPressable: x,
      isBlurred: C,
      isFooterBlurred: j,
      isDisabled: l,
      disableAnimation: u,
      disableRipple: h,
      allowTextSelectionOnPress: y,
      classNames: r,
      onPress: R,
      onPressStart: b,
      onPressEnd: w,
      onPressChange: B,
      onPressUp: E,
      children: [
        o !== null && /* @__PURE__ */ d.jsx(g, { className: r == null ? void 0 : r.header, children: o }),
        /* @__PURE__ */ d.jsx(k, { className: r == null ? void 0 : r.body, children: n }),
        f !== null && /* @__PURE__ */ d.jsx(q, { className: r == null ? void 0 : r.footer, children: f })
      ]
    }
  )
);
v.displayName = "Card";
export {
  v as Card
};
