/* empty css                */
import { j as i } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as R } from "react";
import { Alert as g, Button as w } from "@nextui-org/react";
const z = R(
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
    onVisibleChange: e,
    classNames: x,
    ...j
  }, A) => {
    const v = (B) => {
      e && e(B);
    }, y = () => {
      r && r(), v(!1);
    };
    return u ? /* @__PURE__ */ i.jsx(
      g,
      {
        ...j,
        ref: A,
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
        children: s
      }
    ) : null;
  }
);
z.displayName = "Alert";
export {
  z as Alert
};
