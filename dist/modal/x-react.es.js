/* empty css                */
import { j as a } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as V, useState as D, isValidElement as E } from "react";
import { useDisclosure as O, Modal as q, ModalContent as K, ModalHeader as R, ModalBody as H, ModalFooter as I } from "@nextui-org/react";
import { cn as h } from "../utils/x-react.es.js";
import { B as u } from "../Buttons-BlHNPx1T.js";
const y = {
  closeButton: "absolute right-4 top-4",
  base: "bg-background border border-default-200 shadow-lg dark:shadow-none rounded-lg"
}, B = {
  color: "primary",
  radius: "sm"
}, S = ({
  buttonCloseLabel: d,
  buttonActionLabel: r,
  buttonCloseProps: e,
  buttonActionProps: i,
  onAction: s,
  onClose: l
}) => {
  const t = () => {
    s == null || s(), l();
  }, o = typeof d == "string" && d.length > 0, m = typeof r == "string" && r.length > 0 && s !== void 0;
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    o && /* @__PURE__ */ a.jsx(
      u,
      {
        className: h("border-primary/50", e == null ? void 0 : e.className),
        variant: (e == null ? void 0 : e.variant) || "bordered",
        onPress: l,
        ...B,
        ...e,
        children: d
      }
    ),
    m && /* @__PURE__ */ a.jsx(
      u,
      {
        onPress: t,
        ...B,
        ...i,
        children: r
      }
    )
  ] });
}, $ = V(
  ({
    trigger: d,
    title: r,
    footer: e,
    children: i,
    onAction: s,
    buttonCloseLabel: l,
    buttonActionLabel: t,
    buttonCloseProps: o,
    buttonActionProps: m,
    ...n
  }, M) => {
    var j, f;
    const { isOpen: N, onOpen: p, onClose: x } = O(), [k, w] = D("opaque"), g = (c = "opaque") => {
      w(c), p();
    }, F = (c) => {
      (c.key === "Enter" || c.key === " ") && g();
    }, v = e != null && (typeof e == "string" || E(e));
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(
        "div",
        {
          role: "button",
          tabIndex: 0,
          onClick: () => g(),
          onKeyDown: F,
          children: d
        }
      ),
      /* @__PURE__ */ a.jsx(
        q,
        {
          ref: M,
          backdrop: k,
          classNames: {
            closeButton: h(
              y.closeButton,
              (j = n.classNames) == null ? void 0 : j.closeButton
            ),
            base: h(y.base, (f = n.classNames) == null ? void 0 : f.base),
            ...n.classNames
          },
          isOpen: N,
          onClose: x,
          ...n,
          children: /* @__PURE__ */ a.jsx(K, { children: () => /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            /* @__PURE__ */ a.jsx(R, { className: "flex flex-col gap-1", children: r }),
            /* @__PURE__ */ a.jsx(H, { children: i }),
            /* @__PURE__ */ a.jsx(I, { children: v ? e : /* @__PURE__ */ a.jsx(
              S,
              {
                buttonCloseLabel: l,
                buttonActionLabel: t,
                buttonCloseProps: o,
                buttonActionProps: m,
                onAction: s,
                onClose: x
              }
            ) })
          ] }) })
        }
      )
    ] });
  }
);
$.displayName = "Modal";
export {
  $ as Modal
};
