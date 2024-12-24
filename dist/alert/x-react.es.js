/* empty css                */
import { j as m } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as n } from "react";
import { Alert as p, Button as c } from "@nextui-org/react";
const d = n(
  ({
    onVisibleChange: t,
    onClose: r,
    isVisible: a = !0,
    closeButtonProps: f,
    isClosable: l = !1,
    ...o
  }, u) => {
    const e = (i) => {
      t == null || t(i);
    }, s = () => {
      r == null || r(), e(!1);
    };
    return a === !1 ? null : /* @__PURE__ */ m.jsx(
      p,
      {
        ...o,
        ref: u,
        isClosable: l,
        onVisibleChange: e,
        onClose: s,
        closeButton: l !== null ? /* @__PURE__ */ m.jsx(
          c,
          {
            size: "sm",
            variant: "light",
            ...f,
            onPress: s,
            children: "Close"
          }
        ) : null
      }
    );
  }
);
d.displayName = "Alert";
export {
  d as Alert
};
