/* empty css                */
import { j as m } from "../jsx-runtime-BFln9wzo.js";
import { forwardRef as n } from "react";
import { Alert as p, Button as d } from "@nextui-org/react";
const c = n(
  ({
    onVisibleChange: t,
    onClose: r,
    isVisible: o = !0,
    closeButtonProps: a,
    isClosable: e = !1,
    ...f
  }, i) => {
    const s = (u) => {
      t == null || t(u);
    }, l = () => {
      r == null || r(), s(!1);
    };
    return o === !1 ? null : /* @__PURE__ */ m.jsx(
      p,
      {
        ...f,
        ref: i,
        isClosable: e,
        onVisibleChange: s,
        onClose: l,
        closeButton: e !== void 0 ? /* @__PURE__ */ m.jsx(
          d,
          {
            size: "sm",
            variant: "light",
            ...a,
            onPress: l,
            children: "Close"
          }
        ) : null
      }
    );
  }
);
c.displayName = "Alert";
export {
  c as Alert
};
