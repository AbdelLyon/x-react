/* empty css                */
import { j as s } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as v } from "react";
import { Alert as g, Button as y } from "@nextui-org/react";
const B = v(
  ({
    title: l,
    icon: n,
    description: a,
    startContent: f,
    endContent: m,
    isVisible: d = !0,
    isClosable: e = !1,
    hideIcon: c = !1,
    hideIconWrapper: p = !1,
    closeButtonProps: u,
    onClose: r,
    onVisibleChange: t,
    classNames: h,
    ...x
  }, j) => {
    const o = (A) => {
      t && t(A);
    }, i = () => {
      r && r(), o(!1);
    };
    return d ? /* @__PURE__ */ s.jsx(
      g,
      {
        ...x,
        ref: j,
        title: l,
        icon: c ? void 0 : n,
        isClosable: e,
        hideIconWrapper: p,
        startContent: f,
        endContent: m,
        onVisibleChange: o,
        onClose: i,
        closeButton: e ? /* @__PURE__ */ s.jsx(
          y,
          {
            size: "sm",
            variant: "light",
            ...u,
            onPress: i,
            children: "Close"
          }
        ) : void 0,
        classNames: h,
        children: a
      }
    ) : null;
  }
);
B.displayName = "Alert";
export {
  B as Alert
};
