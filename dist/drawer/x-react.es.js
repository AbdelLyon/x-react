/* empty css                */
import { j as d } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as S } from "react";
import { useDisclosure as T, Drawer as U, DrawerContent as V, DrawerHeader as W, DrawerBody as Y, DrawerFooter as Z } from "@nextui-org/react";
import { cn as w } from "../utils/x-react.es.js";
import { B as k } from "../Buttons-DKd5iRbN.js";
const _ = S(
  ({
    // Trigger
    trigger: B,
    // Content
    title: f,
    children: F,
    footer: v,
    // Actions
    onAction: x,
    buttonCloseLabel: e = "Close",
    buttonActionLabel: D,
    // Appearance
    size: E = "md",
    radius: K = "lg",
    placement: O = "right",
    // State
    isDismissable: R = !0,
    isKeyboardDismissDisabled: H = !1,
    shouldBlockScroll: I = !0,
    hideCloseButton: X = !1,
    disableAnimation: $ = !1,
    // Portal
    portalContainer: q,
    // Styling
    classNames: r,
    buttonActionProps: h,
    buttonCloseProps: i,
    ...z
  }, G) => {
    const { isOpen: J, onOpen: y, onClose: g } = T(), M = () => {
      x == null || x(), g();
    }, Q = (j) => {
      (j.key === "Enter" || j.key === " ") && y();
    };
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(
        "div",
        {
          role: "button",
          tabIndex: 0,
          onClick: y,
          onKeyDown: Q,
          children: B
        }
      ),
      /* @__PURE__ */ d.jsx(
        U,
        {
          ref: G,
          size: E,
          radius: K,
          placement: O,
          isOpen: J,
          isDismissable: R,
          isKeyboardDismissDisabled: H,
          shouldBlockScroll: I,
          hideCloseButton: X,
          disableAnimation: $,
          portalContainer: q,
          classNames: {
            wrapper: w(r == null ? void 0 : r.wrapper),
            base: w("bg-background", r == null ? void 0 : r.base),
            backdrop: r == null ? void 0 : r.backdrop,
            closeButton: w("absolute right-4 top-4", r == null ? void 0 : r.closeX)
          },
          onClose: g,
          ...z,
          children: /* @__PURE__ */ d.jsx(V, { children: (j) => /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
            f && /* @__PURE__ */ d.jsx(W, { className: r == null ? void 0 : r.header, children: f }),
            /* @__PURE__ */ d.jsx(Y, { className: r == null ? void 0 : r.body, children: F }),
            /* @__PURE__ */ d.jsx(Z, { className: r == null ? void 0 : r.footer, children: v || /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
              e && /* @__PURE__ */ d.jsx(
                k,
                {
                  color: (i == null ? void 0 : i.color) || "primary",
                  radius: (i == null ? void 0 : i.radius) || "sm",
                  variant: (i == null ? void 0 : i.variant) || "bordered",
                  onPress: j,
                  className: w(
                    "border-primary/50",
                    i == null ? void 0 : i.className
                  ),
                  ...i,
                  children: e
                }
              ),
              D && x && /* @__PURE__ */ d.jsx(
                k,
                {
                  color: (h == null ? void 0 : h.color) || "primary",
                  radius: (h == null ? void 0 : h.radius) || "sm",
                  onPress: M,
                  ...h,
                  children: D
                }
              )
            ] }) })
          ] }) })
        }
      )
    ] });
  }
);
_.displayName = "Drawer";
export {
  _ as Drawer
};
