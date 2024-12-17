/* empty css                */
import { j as l } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as B } from "react";
import { Alert as C, Button as R } from "@nextui-org/react";
const w = B(
  ({
    title: s,
    icon: n,
    description: a,
    color: f = "default",
    variant: m = "flat",
    radius: d = "md",
    startContent: u,
    endContent: c,
    isVisible: p = !0,
    isClosable: t = !1,
    hideIcon: h = !1,
    hideIconWrapper: x = !1,
    closeButtonProps: j,
    onClose: e,
    onVisibleChange: r,
    classNames: A,
    ...v
  }, g) => {
    const o = (y) => {
      r && r(y);
    }, i = () => {
      e && e(), o(!1);
    };
    return p ? /* @__PURE__ */ l.jsx(
      C,
      {
        ...v,
        ref: g,
        color: f,
        variant: m,
        radius: d,
        title: s,
        icon: h ? void 0 : n,
        isClosable: t,
        hideIconWrapper: x,
        startContent: u,
        endContent: c,
        onVisibleChange: o,
        onClose: i,
        closeButton: t ? /* @__PURE__ */ l.jsx(
          R,
          {
            size: "sm",
            variant: "light",
            ...j,
            onPress: i,
            children: "Close"
          }
        ) : void 0,
        classNames: A,
        children: a
      }
    ) : null;
  }
);
w.displayName = "Alert";
export {
  w as Alert
};
