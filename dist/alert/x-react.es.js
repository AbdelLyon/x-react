/* empty css                */
import { j as i } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as y } from "react";
import { Alert as B, Button as R } from "@nextui-org/react";
const g = y(
  ({
    title: l,
    icon: o,
    description: s,
    color: a = "default",
    variant: f = "flat",
    radius: n = "md",
    startContent: m,
    endContent: d,
    isVisible: u = !0,
    isClosable: t = !1,
    hideIcon: c = !1,
    hideIconWrapper: p = !1,
    closeButtonProps: h,
    onClose: r,
    onVisibleChange: e
  }, x) => {
    const j = (v) => {
      e && e(v);
    }, A = () => {
      r && r(), j(!1);
    };
    return u ? /* @__PURE__ */ i.jsx(
      B,
      {
        ref: x,
        color: a,
        variant: f,
        radius: n,
        title: l,
        icon: c ? void 0 : o,
        isClosable: t,
        hideIconWrapper: p,
        startContent: m,
        endContent: d,
        closeButton: t ? /* @__PURE__ */ i.jsx(
          R,
          {
            size: "sm",
            variant: "light",
            ...h,
            onPress: A,
            children: "Close"
          }
        ) : void 0,
        children: s
      }
    ) : null;
  }
);
g.displayName = "Alert";
export {
  g as Alert
};
