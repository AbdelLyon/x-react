import { j as s } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as B } from "react";
import { Alert as C, Button as R } from "@nextui-org/react";
const w = B(
  ({
    title: i,
    icon: n,
    description: a,
    color: f = "default",
    variant: d = "flat",
    radius: m = "md",
    startContent: u,
    endContent: c,
    isVisible: h = !0,
    isClosable: e = !1,
    hideIcon: p = !1,
    hideIconWrapper: x = !1,
    closeButtonProps: j,
    onClose: t,
    onVisibleChange: r,
    classNames: A,
    ...v
  }, g) => {
    const l = (y) => {
      r && r(y);
    }, o = () => {
      t && t(), l(!1);
    };
    return h ? /* @__PURE__ */ s.jsx(
      C,
      {
        ...v,
        ref: g,
        color: f,
        variant: d,
        radius: m,
        title: i,
        icon: p ? void 0 : n,
        isClosable: e,
        hideIconWrapper: x,
        startContent: u,
        endContent: c,
        onVisibleChange: l,
        onClose: o,
        closeButton: e ? /* @__PURE__ */ s.jsx(
          R,
          {
            size: "sm",
            variant: "light",
            ...j,
            onPress: o,
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
