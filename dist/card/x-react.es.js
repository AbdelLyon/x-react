/* empty css                */
import { j as r } from "../jsx-runtime-Bq5baZvQ.js";
import { forwardRef as R } from "react";
import { Card as g, CardHeader as m, CardBody as w, CardFooter as B } from "@nextui-org/react";
const E = R(
  ({
    children: x,
    shadow: C = "md",
    radius: j = "lg",
    fullWidth: n = !1,
    isHoverable: a = !1,
    isPressable: l = !1,
    isBlurred: t = !1,
    isFooterBlurred: h = !1,
    isDisabled: o = !1,
    disableAnimation: p = !1,
    disableRipple: y = !1,
    allowTextSelectionOnPress: b = !1,
    classNames: d,
    header: f,
    footer: e,
    footerProps: i,
    ...u
  }, v) => /* @__PURE__ */ r.jsxs(
    g,
    {
      ref: v,
      shadow: C,
      radius: j,
      fullWidth: n,
      isHoverable: a,
      isPressable: l,
      isBlurred: t,
      isFooterBlurred: h,
      isDisabled: o,
      disableAnimation: p,
      disableRipple: y,
      allowTextSelectionOnPress: b,
      className: d == null ? void 0 : d.base,
      ...u,
      children: [
        f !== void 0 && /* @__PURE__ */ r.jsx(m, { className: d == null ? void 0 : d.header, children: f }),
        /* @__PURE__ */ r.jsx(w, { className: d == null ? void 0 : d.body, children: x }),
        e !== void 0 && /* @__PURE__ */ r.jsx(B, { className: i == null ? void 0 : i.className, children: e })
      ]
    }
  )
);
E.displayName = "Card";
export {
  E as Card
};
