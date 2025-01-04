import { jsxs as k, Fragment as B, jsx as d } from "react/jsx-runtime";
import { forwardRef as I, useState as R, useCallback as w } from "react";
import { useDisclosure as S, Modal as $, ModalContent as z, ModalHeader as G, ModalBody as J, ModalFooter as L } from "@nextui-org/react";
import { cn as n } from "../../utils/x-react.es.js";
import { Button as v } from "../../button/Button/x-react.es.js";
const c = {
  closeButton: "absolute right-4 top-4",
  base: "bg-background border border-default shadow-lg dark:shadow-none rounded-lg",
  header: "flex flex-col gap-1",
  footer: "flex justify-end gap-2"
}, D = {
  color: "primary",
  radius: "sm"
}, j = (e) => typeof e == "string" && e.length > 0, Q = ({
  buttonCloseLabel: e = "Close",
  buttonActionLabel: i,
  buttonCloseProps: o,
  buttonActionProps: y,
  onAction: t,
  onClose: f
}) => {
  const u = async () => {
    try {
      await (t == null ? void 0 : t()), f();
    } catch (h) {
      console.error("Modal action failed:", h);
    }
  }, g = j(e), p = j(i) && t !== void 0;
  return /* @__PURE__ */ k(B, { children: [
    g && /* @__PURE__ */ d(
      v,
      {
        className: n("border-primary/50", o == null ? void 0 : o.className),
        variant: (o == null ? void 0 : o.variant) ?? "bordered",
        onPress: f,
        ...D,
        ...o,
        children: e
      }
    ),
    p && /* @__PURE__ */ d(
      v,
      {
        onPress: u,
        ...D,
        ...y,
        children: i
      }
    )
  ] });
}, T = I(
  ({
    trigger: e,
    title: i,
    footer: o,
    children: y,
    onAction: t,
    buttonCloseLabel: f,
    buttonActionLabel: u,
    buttonCloseProps: g,
    buttonActionProps: p,
    defaultBackdrop: h = "opaque",
    onOpenChange: O,
    classNames: r,
    ...V
  }, F) => {
    const { isOpen: K, onOpen: b, onClose: x } = S({
      onChange: O
    }), [q, E] = R(h), M = w(
      (a = h) => {
        E(a), b();
      },
      [h, b]
    ), H = w(
      (a) => {
        (a.key === "Enter" || a.key === " ") && (a.preventDefault(), M());
      },
      [M]
    ), l = {
      closeButton: n(c.closeButton, r == null ? void 0 : r.closeButton),
      base: n(c.base, r == null ? void 0 : r.base),
      header: n(c.header, r == null ? void 0 : r.header),
      body: n(r == null ? void 0 : r.body),
      footer: n(c.footer, r == null ? void 0 : r.footer),
      backdrop: n(r == null ? void 0 : r.backdrop)
    };
    return /* @__PURE__ */ k(B, { children: [
      /* @__PURE__ */ d(
        "div",
        {
          role: "button",
          tabIndex: 0,
          onClick: () => M(),
          onKeyDown: H,
          className: "inline-block",
          children: e
        }
      ),
      /* @__PURE__ */ d(
        $,
        {
          ref: F,
          backdrop: q,
          classNames: l,
          isOpen: K,
          onClose: x,
          ...V,
          children: /* @__PURE__ */ d(z, { children: () => /* @__PURE__ */ k(B, { children: [
            i !== void 0 && /* @__PURE__ */ d(G, { className: l.header, children: i }),
            /* @__PURE__ */ d(J, { className: l.body, children: y }),
            /* @__PURE__ */ d(L, { className: l.footer, children: o !== void 0 ? o : /* @__PURE__ */ d(
              Q,
              {
                buttonCloseLabel: f,
                buttonActionLabel: u,
                buttonCloseProps: g,
                buttonActionProps: p,
                onAction: t,
                onClose: x
              }
            ) })
          ] }) })
        }
      )
    ] });
  }
);
T.displayName = "Modal";
export {
  T as Modal
};
