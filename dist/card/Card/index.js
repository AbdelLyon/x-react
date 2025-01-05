import { jsxs as j, jsx as r } from "react/jsx-runtime";
import { forwardRef as v } from "react";
import { Card as N, CardHeader as g, CardBody as u, CardFooter as w } from "@nextui-org/react";
const B = v(
  ({
    children: l,
    shadow: o = "md",
    radius: s = "lg",
    fullWidth: f = !1,
    isHoverable: i = !1,
    isPressable: m = !1,
    isBlurred: t = !1,
    isFooterBlurred: C = !1,
    isDisabled: c = !1,
    disableAnimation: n = !1,
    disableRipple: p = !1,
    allowTextSelectionOnPress: h = !1,
    classNames: a,
    header: e,
    footer: d,
    footerProps: x,
    ...y
  }, b) => /* @__PURE__ */ j(
    N,
    {
      ref: b,
      shadow: o,
      radius: s,
      fullWidth: f,
      isHoverable: i,
      isPressable: m,
      isBlurred: t,
      isFooterBlurred: C,
      isDisabled: c,
      disableAnimation: n,
      disableRipple: p,
      allowTextSelectionOnPress: h,
      className: a?.base,
      ...y,
      children: [
        e !== void 0 && /* @__PURE__ */ r(g, { className: a?.header, children: e }),
        /* @__PURE__ */ r(u, { className: a?.body, children: l }),
        d !== void 0 && /* @__PURE__ */ r(w, { className: a?.footer, ...x, children: d })
      ]
    }
  )
);
B.displayName = "Card";
export {
  B as Card
};
//# sourceMappingURL=index.js.map
