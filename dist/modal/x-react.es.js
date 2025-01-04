/* empty css                */
import { j as o } from "../jsx-runtime-Bq5baZvQ.js";
import { forwardRef as R, useState as q, useCallback as M } from "react";
import { useDisclosure as H, Modal as I, ModalContent as S, ModalHeader as $, ModalBody as m, ModalFooter as z } from "@nextui-org/react";
import { cn as n } from "../utils/x-react.es.js";
import { B as k } from "../Buttons-eF1vEncQ.js";
const x = {
  closeButton: "absolute right-4 top-4",
  base: "bg-background border border-default shadow-lg dark:shadow-none rounded-lg",
  header: "flex flex-col gap-1",
  footer: "flex justify-end gap-2"
}, b = {
  color: "primary",
  radius: "sm"
}, w = (e) => typeof e == "string" && e.length > 0, G = ({
  buttonCloseLabel: e = "Close",
  buttonActionLabel: i,
  buttonCloseProps: d,
  buttonActionProps: c,
  onAction: t,
  onClose: f
}) => {
  const j = async () => {
    try {
      await (t == null ? void 0 : t()), f();
    } catch (a) {
      console.error("Modal action failed:", a);
    }
  }, y = w(e), g = w(i) && t !== void 0;
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    y && /* @__PURE__ */ o.jsx(
      k,
      {
        className: n("border-primary/50", d == null ? void 0 : d.className),
        variant: (d == null ? void 0 : d.variant) ?? "bordered",
        onPress: f,
        ...b,
        ...d,
        children: e
      }
    ),
    g && /* @__PURE__ */ o.jsx(
      k,
      {
        onPress: j,
        ...b,
        ...c,
        children: i
      }
    )
  ] });
}, J = R(
  ({
    trigger: e,
    title: i,
    footer: d,
    children: c,
    onAction: t,
    buttonCloseLabel: f,
    buttonActionLabel: j,
    buttonCloseProps: y,
    buttonActionProps: g,
    defaultBackdrop: a = "opaque",
    onOpenChange: v,
    classNames: r,
    ...D
  }, F) => {
    const { isOpen: O, onOpen: u, onClose: B } = H({
      onChange: v
    }), [V, E] = q(a), p = M(
      (h = a) => {
        E(h), u();
      },
      [a, u]
    ), K = M(
      (h) => {
        (h.key === "Enter" || h.key === " ") && (h.preventDefault(), p());
      },
      [p]
    ), l = {
      closeButton: n(x.closeButton, r == null ? void 0 : r.closeButton),
      base: n(x.base, r == null ? void 0 : r.base),
      header: n(x.header, r == null ? void 0 : r.header),
      body: n(r == null ? void 0 : r.body),
      footer: n(x.footer, r == null ? void 0 : r.footer),
      backdrop: n(r == null ? void 0 : r.backdrop)
    };
    return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx(
        "div",
        {
          role: "button",
          tabIndex: 0,
          onClick: () => p(),
          onKeyDown: K,
          className: "inline-block",
          children: e
        }
      ),
      /* @__PURE__ */ o.jsx(
        I,
        {
          ref: F,
          backdrop: V,
          classNames: l,
          isOpen: O,
          onClose: B,
          ...D,
          children: /* @__PURE__ */ o.jsx(S, { children: () => /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
            i !== void 0 && /* @__PURE__ */ o.jsx($, { className: l.header, children: i }),
            /* @__PURE__ */ o.jsx(m, { className: l.body, children: c }),
            /* @__PURE__ */ o.jsx(z, { className: l.footer, children: d !== void 0 ? d : /* @__PURE__ */ o.jsx(
              G,
              {
                buttonCloseLabel: f,
                buttonActionLabel: j,
                buttonCloseProps: y,
                buttonActionProps: g,
                onAction: t,
                onClose: B
              }
            ) })
          ] }) })
        }
      )
    ] });
  }
);
J.displayName = "Modal";
export {
  J as Modal
};
