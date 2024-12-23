/* empty css                */
import { j as a } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as D, useState as O } from "react";
import { useDisclosure as q, Modal as v, ModalContent as E, ModalHeader as K, ModalBody as R, ModalFooter as H } from "@nextui-org/react";
import { cn as t } from "../utils/x-react.es.js";
import { B as f } from "../Buttons-DKd5iRbN.js";
const u = {
  closeButton: "absolute right-4 top-4",
  base: "bg-background border border-default-200 shadow-lg dark:shadow-none rounded-lg"
}, B = {
  color: "primary",
  radius: "sm"
}, I = ({
  buttonCloseLabel: r,
  buttonActionLabel: d,
  buttonCloseProps: e,
  buttonActionProps: o,
  onAction: s,
  onClose: l
}) => {
  const m = () => {
    s == null || s(), l();
  };
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    r && /* @__PURE__ */ a.jsx(
      f,
      {
        className: t("border-primary/50", e == null ? void 0 : e.className),
        variant: (e == null ? void 0 : e.variant) || "bordered",
        onPress: l,
        ...B,
        ...e,
        children: r
      }
    ),
    d && s && /* @__PURE__ */ a.jsx(
      f,
      {
        onPress: m,
        ...B,
        ...o,
        children: d
      }
    )
  ] });
}, S = D(
  ({
    trigger: r,
    title: d,
    footer: e,
    children: o,
    onAction: s,
    buttonCloseLabel: l,
    buttonActionLabel: m,
    buttonCloseProps: g,
    buttonActionProps: M,
    ...n
  }, N) => {
    var h, j;
    const { isOpen: y, onOpen: k, onClose: i } = q(), [p, w] = O("opaque"), x = (c = "opaque") => {
      w(c), k();
    }, F = (c) => {
      (c.key === "Enter" || c.key === " ") && x();
    };
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(
        "div",
        {
          role: "button",
          tabIndex: 0,
          onClick: () => x(),
          onKeyDown: F,
          children: r
        }
      ),
      /* @__PURE__ */ a.jsx(
        v,
        {
          ref: N,
          backdrop: p,
          classNames: {
            closeButton: t(
              u.closeButton,
              (h = n.classNames) == null ? void 0 : h.closeButton
            ),
            base: t(u.base, (j = n.classNames) == null ? void 0 : j.base),
            ...n.classNames
          },
          isOpen: y,
          onClose: i,
          ...n,
          children: /* @__PURE__ */ a.jsx(E, { children: () => /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            /* @__PURE__ */ a.jsx(K, { className: "flex flex-col gap-1", children: d }),
            /* @__PURE__ */ a.jsx(R, { children: o }),
            /* @__PURE__ */ a.jsx(H, { children: e || /* @__PURE__ */ a.jsx(
              I,
              {
                buttonCloseLabel: l,
                buttonActionLabel: m,
                buttonCloseProps: g,
                buttonActionProps: M,
                onAction: s,
                onClose: i
              }
            ) })
          ] }) })
        }
      )
    ] });
  }
);
S.displayName = "Modal";
export {
  S as Modal
};
