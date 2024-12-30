/* empty css                */
import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as m, useState as q, useCallback as M, isValidElement as H } from "react";
import { useDisclosure as I, Modal as S, ModalContent as $, ModalHeader as z, ModalBody as G, ModalFooter as J } from "@nextui-org/react";
import { cn as n } from "../utils/x-react.es.js";
import { B as k } from "../Buttons-COIoW96c.js";
const x = {
  closeButton: "absolute right-4 top-4",
  base: "bg-background border border-default shadow-lg dark:shadow-none rounded-lg",
  header: "flex flex-col gap-1",
  footer: "flex justify-end gap-2"
}, b = {
  color: "primary",
  radius: "sm"
}, w = (d) => d !== void 0 && H(d), V = (d) => typeof d == "string" && d.length > 0, L = ({
  buttonCloseLabel: d = "Close",
  buttonActionLabel: i,
  buttonCloseProps: e,
  buttonActionProps: c,
  onAction: t,
  onClose: l
}) => {
  const j = async () => {
    try {
      await (t == null ? void 0 : t()), l();
    } catch (a) {
      console.error("Modal action failed:", a);
    }
  }, y = V(d), g = V(i) && t !== void 0;
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    y && /* @__PURE__ */ o.jsx(
      k,
      {
        className: n("border-primary/50", e == null ? void 0 : e.className),
        variant: (e == null ? void 0 : e.variant) ?? "bordered",
        onPress: l,
        ...b,
        ...e,
        children: d
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
}, Q = m(
  ({
    trigger: d,
    title: i,
    footer: e,
    children: c,
    onAction: t,
    buttonCloseLabel: l,
    buttonActionLabel: j,
    buttonCloseProps: y,
    buttonActionProps: g,
    defaultBackdrop: a = "opaque",
    onOpenChange: v,
    classNames: r,
    ...D
  }, F) => {
    const { isOpen: E, onOpen: u, onClose: B } = I({
      onChange: v
    }), [O, K] = q(a), p = M(
      (h = a) => {
        K(h), u();
      },
      [a, u]
    ), R = M(
      (h) => {
        (h.key === "Enter" || h.key === " ") && (h.preventDefault(), p());
      },
      [p]
    ), f = {
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
          onKeyDown: R,
          className: "inline-block",
          children: d
        }
      ),
      /* @__PURE__ */ o.jsx(
        S,
        {
          ref: F,
          backdrop: O,
          classNames: f,
          isOpen: E,
          onClose: B,
          ...D,
          children: /* @__PURE__ */ o.jsx($, { children: () => /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
            w(i) && /* @__PURE__ */ o.jsx(z, { className: f.header, children: i }),
            /* @__PURE__ */ o.jsx(G, { className: f.body, children: c }),
            /* @__PURE__ */ o.jsx(J, { className: f.footer, children: w(e) ? e : /* @__PURE__ */ o.jsx(
              L,
              {
                buttonCloseLabel: l,
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
Q.displayName = "Modal";
export {
  Q as Modal
};
