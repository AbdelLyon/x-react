import { jsx as l } from "react/jsx-runtime";
import { forwardRef as u } from "react";
import { Alert as d, Button as h } from "@nextui-org/react";
const c = u(
  ({
    onVisibleChange: o,
    onClose: n,
    isVisible: s = !0,
    closeButtonProps: i,
    isClosable: e = !1,
    ...a
  }, f) => {
    const r = (m) => {
      o?.(m);
    }, t = () => {
      n?.(), r(!1);
    };
    return s === !1 ? null : /* @__PURE__ */ l(
      d,
      {
        ...a,
        ref: f,
        isClosable: e,
        onVisibleChange: r,
        onClose: t,
        closeButton: e !== void 0 ? /* @__PURE__ */ l(
          h,
          {
            size: "sm",
            variant: "light",
            ...i,
            onPress: t,
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
//# sourceMappingURL=index.js.map
