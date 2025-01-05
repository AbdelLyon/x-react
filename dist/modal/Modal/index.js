import { jsxs as y, Fragment as g, jsx as o } from "react/jsx-runtime";
import { forwardRef as K, useState as q, useCallback as B } from "react";
import { useDisclosure as E, Modal as H, ModalContent as I, ModalHeader as P, ModalBody as R, ModalFooter as S } from "@nextui-org/react";
import { cn as r } from "../../utils/index.js";
import { Button as x } from "../../button/Button/index.js";
const h = {
  closeButton: "absolute right-4 top-4",
  base: "bg-background border border-default shadow-lg dark:shadow-none rounded-lg",
  header: "flex flex-col gap-1",
  footer: "flex justify-end gap-2"
}, w = {
  color: "primary",
  radius: "sm"
}, v = (e) => typeof e == "string" && e.length > 0, $ = ({
  buttonCloseLabel: e = "Close",
  buttonActionLabel: d,
  buttonCloseProps: a,
  buttonActionProps: f,
  onAction: l,
  onClose: c
}) => {
  const m = async () => {
    try {
      await l?.(), c();
    } catch (t) {
      console.error("Modal action failed:", t);
    }
  }, u = v(e), p = v(d) && l !== void 0;
  return /* @__PURE__ */ y(g, { children: [
    u && /* @__PURE__ */ o(
      x,
      {
        className: r("border-primary/50", a?.className),
        variant: a?.variant ?? "bordered",
        onPress: c,
        ...w,
        ...a,
        children: e
      }
    ),
    p && /* @__PURE__ */ o(
      x,
      {
        onPress: m,
        ...w,
        ...f,
        children: d
      }
    )
  ] });
}, z = K(
  ({
    trigger: e,
    title: d,
    footer: a,
    children: f,
    onAction: l,
    buttonCloseLabel: c,
    buttonActionLabel: m,
    buttonCloseProps: u,
    buttonActionProps: p,
    defaultBackdrop: t = "opaque",
    onOpenChange: C,
    classNames: n,
    ...N
  }, D) => {
    const { isOpen: j, onOpen: M, onClose: k } = E({
      onChange: C
    }), [O, V] = q(t), b = B(
      (s = t) => {
        V(s), M();
      },
      [t, M]
    ), F = B(
      (s) => {
        (s.key === "Enter" || s.key === " ") && (s.preventDefault(), b());
      },
      [b]
    ), i = {
      closeButton: r(h.closeButton, n?.closeButton),
      base: r(h.base, n?.base),
      header: r(h.header, n?.header),
      body: r(n?.body),
      footer: r(h.footer, n?.footer),
      backdrop: r(n?.backdrop)
    };
    return /* @__PURE__ */ y(g, { children: [
      /* @__PURE__ */ o(
        "div",
        {
          role: "button",
          tabIndex: 0,
          onClick: () => b(),
          onKeyDown: F,
          className: "inline-block",
          children: e
        }
      ),
      /* @__PURE__ */ o(
        H,
        {
          ref: D,
          backdrop: O,
          classNames: i,
          isOpen: j,
          onClose: k,
          ...N,
          children: /* @__PURE__ */ o(I, { children: () => /* @__PURE__ */ y(g, { children: [
            d !== void 0 && /* @__PURE__ */ o(P, { className: i.header, children: d }),
            /* @__PURE__ */ o(R, { className: i.body, children: f }),
            /* @__PURE__ */ o(S, { className: i.footer, children: a !== void 0 ? a : /* @__PURE__ */ o(
              $,
              {
                buttonCloseLabel: c,
                buttonActionLabel: m,
                buttonCloseProps: u,
                buttonActionProps: p,
                onAction: l,
                onClose: k
              }
            ) })
          ] }) })
        }
      )
    ] });
  }
);
z.displayName = "Modal";
export {
  z as Modal
};
//# sourceMappingURL=index.js.map
