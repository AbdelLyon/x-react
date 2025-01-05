import "../image/image.es.js";
import { jsxs as B, jsx as d } from "react/jsx-runtime";
import { forwardRef as F } from "react";
import { Card as H, CardHeader as R, CardBody as $, CardFooter as k } from "@nextui-org/react";
const q = F(
  ({
    children: i,
    shadow: t = "md",
    radius: C = "lg",
    fullWidth: p = !1,
    isHoverable: e = !1,
    isPressable: n = !1,
    isBlurred: h = !1,
    isFooterBlurred: x = !1,
    isDisabled: y = !1,
    disableAnimation: b = !1,
    disableRipple: j = !1,
    allowTextSelectionOnPress: v = !1,
    classNames: r,
    header: o,
    footer: f,
    footerProps: g,
    ...u
  }, w) => /* @__PURE__ */ B(
    H,
    {
      ref: w,
      shadow: t,
      radius: C,
      fullWidth: p,
      isHoverable: e,
      isPressable: n,
      isBlurred: h,
      isFooterBlurred: x,
      isDisabled: y,
      disableAnimation: b,
      disableRipple: j,
      allowTextSelectionOnPress: v,
      className: r == null ? void 0 : r.base,
      ...u,
      children: [
        o !== void 0 && /* @__PURE__ */ d(R, { className: r == null ? void 0 : r.header, children: o }),
        /* @__PURE__ */ d($, { className: r == null ? void 0 : r.body, children: i }),
        f !== void 0 && /* @__PURE__ */ d(k, { className: r == null ? void 0 : r.footer, ...g, children: f })
      ]
    }
  )
);
q.displayName = "Card";
export {
  q as Card
};
