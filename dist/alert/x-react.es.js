import { j as l } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as R } from "react";
import { Alert as g, Button as w } from "@nextui-org/react";
const z = R(
  ({
    title: s,
    icon: i,
    description: o,
    color: a = "default",
    variant: f = "flat",
    radius: n = "md",
    startContent: d,
    endContent: m,
    isVisible: u = !0,
    isClosable: t = !1,
    hideIcon: c = !1,
    hideIconWrapper: p = !1,
    closeButtonProps: h,
    onClose: r,
    onVisibleChange: e,
    classNames: x,
    ...j
  }, A) => {
    const v = (B) => {
      e && e(B);
    }, y = () => {
      r && r(), v(!1);
    };
    return u ? /* @__PURE__ */ l.jsx(
      g,
      {
        ...j,
        ref: A,
        color: a,
        variant: f,
        radius: n,
        title: s,
        icon: c ? void 0 : i,
        isClosable: t,
        hideIconWrapper: p,
        startContent: d,
        endContent: m,
        closeButton: t ? /* @__PURE__ */ l.jsx(
          w,
          {
            size: "sm",
            variant: "light",
            ...h,
            onPress: y,
            children: "Close"
          }
        ) : void 0,
        classNames: x,
        children: o
      }
    ) : null;
  }
);
z.displayName = "Alert";
export {
  z as Alert
};
