/* empty css                */
import { j as a } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as E, useState as K } from "react";
import { useDisclosure as R, Modal as H, ModalContent as I, ModalHeader as S, ModalBody as $, ModalFooter as z } from "@nextui-org/react";
import { cn as c } from "../utils/x-react.es.js";
import { B as g } from "../Buttons-DKd5iRbN.js";
const G = E(
  ({
    trigger: y,
    title: M,
    footer: N,
    onAction: m,
    buttonCloseLabel: i,
    buttonActionLabel: x,
    children: k,
    buttonCloseProps: d,
    buttonActionProps: e,
    ...l
  }, B) => {
    var j, f;
    const { isOpen: w, onOpen: F, onClose: h } = R(), [v, D] = K("opaque"), s = (r = "opaque") => {
      D(r), F();
    }, O = () => {
      m == null || m(), h();
    }, q = (r) => {
      (r.key === "Enter" || r.key === " ") && s();
    };
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(
        "div",
        {
          role: "button",
          tabIndex: 0,
          onClick: () => s(),
          onKeyDown: q,
          children: y
        }
      ),
      /* @__PURE__ */ a.jsx(
        H,
        {
          ref: B,
          backdrop: v,
          classNames: {
            closeButton: c(
              "absolute right-4 top-4",
              (j = l.classNames) == null ? void 0 : j.closeButton
            ),
            base: c(
              "bg-background border border-divider shadow-lg dark:shadow-none rounded-lg",
              (f = l.classNames) == null ? void 0 : f.base
            ),
            ...l.classNames
          },
          isOpen: w,
          onClose: h,
          ...l,
          children: /* @__PURE__ */ a.jsx(I, { children: (r) => /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            /* @__PURE__ */ a.jsx(S, { className: "flex flex-col gap-1", children: M }),
            /* @__PURE__ */ a.jsx($, { children: k }),
            /* @__PURE__ */ a.jsx(z, { children: N || /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
              i && /* @__PURE__ */ a.jsx(
                g,
                {
                  className: c(
                    "border-primary/50",
                    d == null ? void 0 : d.className
                  ),
                  color: (d == null ? void 0 : d.color) || "primary",
                  radius: (d == null ? void 0 : d.radius) || "sm",
                  variant: (d == null ? void 0 : d.variant) || "bordered",
                  onPress: r,
                  ...d,
                  children: i
                }
              ),
              x && m && /* @__PURE__ */ a.jsx(
                g,
                {
                  color: (e == null ? void 0 : e.color) || "primary",
                  radius: (e == null ? void 0 : e.radius) || "sm",
                  onPress: O,
                  ...e,
                  children: x
                }
              )
            ] }) })
          ] }) })
        }
      )
    ] });
  }
);
G.displayName = "Modal";
export {
  G as Modal
};
