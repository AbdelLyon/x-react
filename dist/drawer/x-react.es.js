/* empty css                */
import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as q } from "react";
import { Drawer as v, DrawerContent as z, DrawerHeader as A, DrawerBody as G, DrawerFooter as I } from "@nextui-org/react";
const J = q(
  ({
    // Content
    children: t,
    headerContent: n,
    bodyContent: p,
    footerContent: d,
    closeButton: w,
    // Appearance
    size: f = "md",
    radius: x = "lg",
    placement: j = "right",
    // State
    isOpen: u,
    defaultOpen: D,
    isDismissable: e = !0,
    isKeyboardDismissDisabled: h = !1,
    shouldBlockScroll: b = !0,
    hideCloseButton: g = !1,
    disableAnimation: y = !1,
    // Portal
    portalContainer: B,
    // Styling
    classNames: r,
    // Events
    onOpenChange: k,
    onClose: F,
    ...R
  }, E) => {
    const H = ($) => {
      const i = typeof t == "function" ? t($) : t;
      return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        (n || i) && /* @__PURE__ */ o.jsx(A, { className: r == null ? void 0 : r.header, children: n || i }),
        p && /* @__PURE__ */ o.jsx(G, { className: r == null ? void 0 : r.body, children: p }),
        d && /* @__PURE__ */ o.jsx(I, { className: r == null ? void 0 : r.footer, children: d })
      ] });
    };
    return /* @__PURE__ */ o.jsx(
      v,
      {
        ref: E,
        size: f,
        radius: x,
        placement: j,
        isOpen: u,
        defaultOpen: D,
        isDismissable: e,
        isKeyboardDismissDisabled: h,
        shouldBlockScroll: b,
        hideCloseButton: g,
        disableAnimation: y,
        closeButton: w,
        portalContainer: B,
        classNames: {
          wrapper: r == null ? void 0 : r.wrapper,
          base: r == null ? void 0 : r.base,
          backdrop: r == null ? void 0 : r.backdrop,
          closeButton: r == null ? void 0 : r.closeButton
        },
        onOpenChange: k,
        onClose: F,
        ...R,
        children: /* @__PURE__ */ o.jsx(z, { children: H })
      }
    );
  }
);
J.displayName = "Drawer";
export {
  J as Drawer
};
