/* empty css                */
import { j as i } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as B } from "react";
import { Alert as R, Button as g } from "@nextui-org/react";
const w = B(
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
    ...x
  }, j) => {
    const A = (y) => {
      e && e(y);
    }, v = () => {
      r && r(), A(!1);
    };
    return u ? /* @__PURE__ */ i.jsx(
      R,
      {
        ...x,
        ref: j,
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
          g,
          {
            size: "sm",
            variant: "light",
            ...h,
            onPress: v,
            children: "Close"
          }
        ) : void 0,
        children: s
      }
    ) : null;
  }
);
w.displayName = "Alert";
export {
  w as Alert
};
