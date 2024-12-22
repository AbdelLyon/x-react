/* empty css                */
import { j as a } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as q, useState as E } from "react";
import { useDisclosure as K, Modal as R, ModalContent as H, ModalHeader as I, ModalBody as S, ModalFooter as $ } from "@nextui-org/react";
import { cn as f } from "../utils/x-react.es.js";
import { B as g } from "../Buttons-DKd5iRbN.js";
const z = q(
  ({
    trigger: y,
    title: M,
    footer: k,
    onAction: m,
    buttonCloseLabel: s,
    buttonActionLabel: c,
    children: N,
    buttonCloseProps: d,
    buttonActionProps: e,
    ...l
  }, B) => {
    var h, j;
    const { isOpen: w, onOpen: F, onClose: i } = K(), [v, D] = E("opaque"), x = (r = "opaque") => {
      D(r), F();
    }, O = () => {
      m == null || m(), i();
    }, n = (r) => {
      (r.key === "Enter" || r.key === " ") && x();
    };
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(
        "div",
        {
          role: "button",
          tabIndex: 0,
          onClick: () => x(),
          onKeyDown: n,
          children: y
        }
      ),
      /* @__PURE__ */ a.jsx(
        R,
        {
          ref: B,
          backdrop: v,
          classNames: {
            closeButton: f(
              "absolute right-4 top-4",
              (h = l.classNames) == null ? void 0 : h.closeButton
            ),
            base: f(
              "bg-background border border-divider shadow-lg dark:shadow-none rounded-lg",
              (j = l.classNames) == null ? void 0 : j.base
            ),
            ...l.classNames
          },
          isOpen: w,
          onClose: i,
          ...l,
          children: /* @__PURE__ */ a.jsx(H, { children: (r) => /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            /* @__PURE__ */ a.jsx(I, { className: "flex flex-col gap-1", children: M }),
            /* @__PURE__ */ a.jsx(S, { children: N }),
            /* @__PURE__ */ a.jsx($, { children: k || /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
              s && /* @__PURE__ */ a.jsx(
                g,
                {
                  className: "border-primary/40",
                  color: (d == null ? void 0 : d.color) || "primary",
                  radius: (d == null ? void 0 : d.radius) || "sm",
                  variant: (d == null ? void 0 : d.variant) || "bordered",
                  onPress: r,
                  ...d,
                  children: s
                }
              ),
              c && m && /* @__PURE__ */ a.jsx(
                g,
                {
                  color: (e == null ? void 0 : e.color) || "primary",
                  radius: (e == null ? void 0 : e.radius) || "sm",
                  onPress: O,
                  ...e,
                  children: c
                }
              )
            ] }) })
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
