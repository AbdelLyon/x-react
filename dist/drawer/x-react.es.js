/* empty css                */
import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as $ } from "react";
import { useDisclosure as q, Drawer as z, DrawerContent as G, DrawerHeader as J, DrawerBody as M, DrawerFooter as Q } from "@nextui-org/react";
import { cn as n } from "../utils/x-react.es.js";
import { B as w } from "../Buttons-DKd5iRbN.js";
const S = $(
  ({
    // Trigger
    trigger: f,
    // Content
    title: h,
    children: D,
    footer: y,
    // Actions
    onAction: e,
    buttonCloseLabel: p = "Close",
    buttonActionLabel: t,
    // Appearance
    size: g = "md",
    radius: u = "lg",
    placement: k = "right",
    // State
    isDismissable: B = !0,
    isKeyboardDismissDisabled: F = !1,
    shouldBlockScroll: C = !0,
    hideCloseButton: b = !1,
    disableAnimation: v = !1,
    // Portal
    portalContainer: E,
    // Styling
    classNames: r,
    buttonProps: d = {},
    ...K
  }, O) => {
    const { isOpen: R, onOpen: x, onClose: j } = q(), H = () => {
      e == null || e(), j();
    }, I = (i) => {
      (i.key === "Enter" || i.key === " ") && x();
    };
    return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx(
        "div",
        {
          role: "button",
          tabIndex: 0,
          onClick: x,
          onKeyDown: I,
          children: f
        }
      ),
      /* @__PURE__ */ o.jsx(
        z,
        {
          ref: O,
          size: g,
          radius: u,
          placement: k,
          isOpen: R,
          isDismissable: B,
          isKeyboardDismissDisabled: F,
          shouldBlockScroll: C,
          hideCloseButton: b,
          disableAnimation: v,
          portalContainer: E,
          classNames: {
            wrapper: n(r == null ? void 0 : r.wrapper),
            base: n("bg-background", r == null ? void 0 : r.base),
            backdrop: r == null ? void 0 : r.backdrop,
            closeButton: n("absolute right-4 top-4", r == null ? void 0 : r.closeButton)
          },
          onClose: j,
          ...K,
          children: /* @__PURE__ */ o.jsx(G, { children: (i) => /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
            h && /* @__PURE__ */ o.jsx(J, { className: r == null ? void 0 : r.header, children: h }),
            /* @__PURE__ */ o.jsx(M, { className: r == null ? void 0 : r.body, children: D }),
            /* @__PURE__ */ o.jsx(Q, { className: r == null ? void 0 : r.footer, children: y || /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
              p && /* @__PURE__ */ o.jsx(
                w,
                {
                  className: "border-primary/20",
                  color: d.color || "primary",
                  radius: d.radius || "sm",
                  variant: d.variant || "bordered",
                  onPress: i,
                  ...d,
                  children: p
                }
              ),
              t && e && /* @__PURE__ */ o.jsx(
                w,
                {
                  color: d.color || "primary",
                  radius: d.radius || "sm",
                  onPress: H,
                  ...d,
                  children: t
                }
              )
            ] }) })
          ] }) })
        }
      )
    ] });
  }
);
S.displayName = "Drawer";
export {
  S as Drawer
};
