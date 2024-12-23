/* empty css                */
import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as $ } from "react";
import { Card as a, CardHeader as g, CardBody as k, CardFooter as q } from "@nextui-org/react";
const z = $(
  ({
    children: n,
    shadow: t = "none",
    radius: i = "md",
    fullWidth: e = !1,
    isHoverable: p = !1,
    isPressable: x = !1,
    isBlurred: C = !1,
    isFooterBlurred: j = !1,
    isDisabled: l = !1,
    disableAnimation: h = !1,
    disableRipple: u = !1,
    allowTextSelectionOnPress: y = !1,
    classNames: r,
    header: d,
    footer: f,
    onPress: v,
    onPressStart: F,
    onPressEnd: H,
    onPressChange: R,
    onPressUp: b
  }, w) => {
    const B = d != null, E = f != null;
    return /* @__PURE__ */ o.jsxs(
      a,
      {
        ref: w,
        shadow: t,
        radius: i,
        fullWidth: e,
        isHoverable: p,
        isPressable: x,
        isBlurred: C,
        isFooterBlurred: j,
        isDisabled: l,
        disableAnimation: h,
        disableRipple: u,
        allowTextSelectionOnPress: y,
        classNames: r,
        onPress: v,
        onPressStart: F,
        onPressEnd: H,
        onPressChange: R,
        onPressUp: b,
        children: [
          B && /* @__PURE__ */ o.jsx(g, { className: r == null ? void 0 : r.header, children: d }),
          /* @__PURE__ */ o.jsx(k, { className: r == null ? void 0 : r.body, children: n }),
          E && /* @__PURE__ */ o.jsx(q, { className: r == null ? void 0 : r.footer, children: f })
        ]
      }
    );
  }
);
z.displayName = "Card";
export {
  z as Card
};
