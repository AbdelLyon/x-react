import { jsx as s } from "react/jsx-runtime";
import { forwardRef as d } from "react";
import { Alert as n, Button as c } from "@nextui-org/react";
const p = d(
  ({
    onVisibleChange: r,
    onClose: t,
    isVisible: a = !0,
    closeButtonProps: m,
    isClosable: e = !1,
    ...o
  }, i) => {
    const l = (u) => {
      r == null || r(u);
    }, f = () => {
      t == null || t(), l(!1);
    };
    return a === !1 ? null : /* @__PURE__ */ s(
      n,
      {
        ...o,
        ref: i,
        isClosable: e,
        onVisibleChange: l,
        onClose: f,
        closeButton: e !== void 0 ? /* @__PURE__ */ s(
          c,
          {
            size: "sm",
            variant: "light",
            ...m,
            onPress: f,
            children: "Close"
          }
        ) : null
      }
    );
  }
);
p.displayName = "Alert";
export {
  p as Alert
};
