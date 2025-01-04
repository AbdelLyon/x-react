/* empty css                */
import { j as d } from "../jsx-runtime-BFln9wzo.js";
import { forwardRef as w } from "react";
import { Card as B, CardHeader as E, CardBody as F, CardFooter as H } from "@nextui-org/react";
const $ = w(
  ({
    children: i,
    shadow: t = "md",
    radius: p = "lg",
    fullWidth: x = !1,
    isHoverable: C = !1,
    isPressable: e = !1,
    isBlurred: j = !1,
    isFooterBlurred: n = !1,
    isDisabled: h = !1,
    disableAnimation: y = !1,
    disableRipple: b = !1,
    allowTextSelectionOnPress: u = !1,
    classNames: r,
    header: o,
    footer: f,
    footerProps: v,
    ...R
  }, g) => /* @__PURE__ */ d.jsxs(
    B,
    {
      ref: g,
      shadow: t,
      radius: p,
      fullWidth: x,
      isHoverable: C,
      isPressable: e,
      isBlurred: j,
      isFooterBlurred: n,
      isDisabled: h,
      disableAnimation: y,
      disableRipple: b,
      allowTextSelectionOnPress: u,
      className: r == null ? void 0 : r.base,
      ...R,
      children: [
        o !== void 0 && /* @__PURE__ */ d.jsx(E, { className: r == null ? void 0 : r.header, children: o }),
        /* @__PURE__ */ d.jsx(F, { className: r == null ? void 0 : r.body, children: i }),
        f !== void 0 && /* @__PURE__ */ d.jsx(H, { className: r == null ? void 0 : r.footer, ...v, children: f })
      ]
    }
  )
);
$.displayName = "Card";
export {
  $ as Card
};
