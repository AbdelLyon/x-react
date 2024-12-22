/* empty css                */
import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as $ } from "react";
import { useDisclosure as q, Drawer as z, DrawerContent as G, DrawerHeader as J, DrawerBody as M, DrawerFooter as Q } from "@nextui-org/react";
import { cn as t } from "../utils/x-react.es.js";
import { B as w } from "../Buttons-DKd5iRbN.js";
const S = $(
  ({
    // Trigger
    trigger: f,
    // Content
    title: e,
    children: u,
    footer: D,
    // Actions
    onAction: i,
    buttonCloseLabel: p = "Close",
    buttonActionLabel: h,
    // Appearance
    size: y = "md",
    radius: g = "lg",
    placement: b = "right",
    // State
    isDismissable: k = !0,
    isKeyboardDismissDisabled: B = !1,
    shouldBlockScroll: C = !0,
    hideCloseButton: F = !1,
    disableAnimation: v = !1,
    // Portal
    portalContainer: E,
    // Styling
    classNames: r,
    buttonProps: d = {},
    ...K
  }, O) => {
    const { isOpen: R, onOpen: x, onClose: j } = q(), H = () => {
      i == null || i(), j();
    }, I = (n) => {
      (n.key === "Enter" || n.key === " ") && x();
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
          size: y,
          radius: g,
          placement: b,
          isOpen: R,
          isDismissable: k,
          isKeyboardDismissDisabled: B,
          shouldBlockScroll: C,
          hideCloseButton: F,
          disableAnimation: v,
          portalContainer: E,
          classNames: {
            wrapper: t(r == null ? void 0 : r.wrapper),
            base: t("bg-background", r == null ? void 0 : r.base),
            backdrop: r == null ? void 0 : r.backdrop,
            closeButton: t("absolute right-4 top-4", r == null ? void 0 : r.closeButton)
          },
          onClose: j,
          ...K,
          children: /* @__PURE__ */ o.jsx(G, { children: (n) => /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
            e && /* @__PURE__ */ o.jsx(J, { className: r == null ? void 0 : r.header, children: e }),
            /* @__PURE__ */ o.jsx(M, { className: r == null ? void 0 : r.body, children: u }),
            /* @__PURE__ */ o.jsx(Q, { className: r == null ? void 0 : r.footer, children: D || /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
              p && /* @__PURE__ */ o.jsx(
                w,
                {
                  color: d.color || "primary",
                  radius: d.radius || "sm",
                  variant: d.variant || "bordered",
                  onPress: n,
                  className: t(
                    "border-primary/20",
                    r == null ? void 0 : r.buttonClose
                  ),
                  children: p
                }
              ),
              h && i && /* @__PURE__ */ o.jsx(
                w,
                {
                  color: d.color || "primary",
                  radius: d.radius || "sm",
                  onPress: H,
                  className: r == null ? void 0 : r.buttonAction,
                  children: h
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
