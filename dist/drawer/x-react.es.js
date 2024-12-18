/* empty css                */
import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as H } from "react";
import { useDisclosure as I, Drawer as $, DrawerContent as q, DrawerHeader as z, DrawerBody as G, DrawerFooter as J, Button as x } from "@nextui-org/react";
import { cn as d } from "../utils/x-react.es.js";
const M = H(
  ({
    // Trigger
    trigger: j,
    // Content
    title: t,
    children: u,
    footer: w,
    // Actions
    onAction: e,
    buttonCloseLabel: f = "Close",
    buttonActionLabel: i,
    // Appearance
    size: D = "md",
    radius: b = "lg",
    placement: y = "right",
    // State
    isDismissable: g = !0,
    isKeyboardDismissDisabled: k = !1,
    shouldBlockScroll: B = !0,
    hideCloseButton: C = !1,
    disableAnimation: F = !1,
    // Portal
    portalContainer: E,
    // Styling
    classNames: r,
    ...K
  }, O) => {
    const { isOpen: P, onOpen: p, onClose: h } = I(), R = () => {
      e == null || e(), h();
    }, v = (n) => {
      (n.key === "Enter" || n.key === " ") && p();
    };
    return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx(
        "div",
        {
          role: "button",
          tabIndex: 0,
          onClick: p,
          onKeyDown: v,
          children: j
        }
      ),
      /* @__PURE__ */ o.jsx(
        $,
        {
          ref: O,
          size: D,
          radius: b,
          placement: y,
          isOpen: P,
          isDismissable: g,
          isKeyboardDismissDisabled: k,
          shouldBlockScroll: B,
          hideCloseButton: C,
          disableAnimation: F,
          portalContainer: E,
          classNames: {
            wrapper: d(r == null ? void 0 : r.wrapper),
            base: d("bg-background", r == null ? void 0 : r.base),
            backdrop: r == null ? void 0 : r.backdrop,
            closeButton: d("absolute right-4 top-4", r == null ? void 0 : r.closeButton)
          },
          onClose: h,
          ...K,
          children: /* @__PURE__ */ o.jsx(q, { children: (n) => /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
            t && /* @__PURE__ */ o.jsx(z, { className: r == null ? void 0 : r.header, children: t }),
            /* @__PURE__ */ o.jsx(G, { className: r == null ? void 0 : r.body, children: u }),
            /* @__PURE__ */ o.jsx(J, { className: r == null ? void 0 : r.footer, children: w || /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
              /* @__PURE__ */ o.jsx(
                x,
                {
                  className: "border-primary/20",
                  color: "primary",
                  radius: "sm",
                  variant: "bordered",
                  onPress: n,
                  children: f
                }
              ),
              i && e && /* @__PURE__ */ o.jsx(
                x,
                {
                  color: "primary",
                  radius: "sm",
                  onPress: R,
                  children: i
                }
              )
            ] }) })
          ] }) })
        }
      )
    ] });
  }
);
M.displayName = "Drawer";
export {
  M as Drawer
};
