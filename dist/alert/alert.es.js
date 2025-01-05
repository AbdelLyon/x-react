import "../image/image.es.js";
import { jsx as m } from "react/jsx-runtime";
import { forwardRef as d } from "react";
import { Alert as n, Button as p } from "@nextui-org/react";
const c = d(
  ({
    onVisibleChange: r,
    onClose: t,
    isVisible: o = !0,
    closeButtonProps: s,
    isClosable: e = !1,
    ...a
  }, i) => {
    const l = (u) => {
      r == null || r(u);
    }, f = () => {
      t == null || t(), l(!1);
    };
    return o === !1 ? null : /* @__PURE__ */ m(
      n,
      {
        ...a,
        ref: i,
        isClosable: e,
        onVisibleChange: l,
        onClose: f,
        closeButton: e !== void 0 ? /* @__PURE__ */ m(
          p,
          {
            size: "sm",
            variant: "light",
            ...s,
            onPress: f,
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
