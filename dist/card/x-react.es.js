/* empty css                */
import { j as d } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as F } from "react";
import { Card as H, CardHeader as $, CardBody as g, CardFooter as k } from "@nextui-org/react";
const q = F(
  ({
    children: i,
    shadow: t = "none",
    radius: e = "md",
    fullWidth: n = !1,
    isHoverable: p = !1,
    isPressable: x = !1,
    isBlurred: C = !1,
    isFooterBlurred: j = !1,
    isDisabled: h = !1,
    disableAnimation: y = !1,
    disableRipple: u = !1,
    allowTextSelectionOnPress: v = !1,
    classNames: r,
    header: o,
    footer: f,
    onPress: R,
    onPressStart: b,
    onPressEnd: l,
    onPressChange: w,
    onPressUp: B
  }, E) => /* @__PURE__ */ d.jsxs(
    H,
    {
      ref: E,
      shadow: t,
      radius: e,
      fullWidth: n,
      isHoverable: p,
      isPressable: x,
      isBlurred: C,
      isFooterBlurred: j,
      isDisabled: h,
      disableAnimation: y,
      disableRipple: u,
      allowTextSelectionOnPress: v,
      classNames: r,
      onPress: R,
      onPressStart: b,
      onPressEnd: l,
      onPressChange: w,
      onPressUp: B,
      children: [
        o !== void 0 && /* @__PURE__ */ d.jsx($, { className: r == null ? void 0 : r.header, children: o }),
        /* @__PURE__ */ d.jsx(g, { className: r == null ? void 0 : r.body, children: i }),
        f !== void 0 && /* @__PURE__ */ d.jsx(k, { className: r == null ? void 0 : r.footer, children: f })
      ]
    }
  )
);
q.displayName = "Card";
export {
  q as Card
};
