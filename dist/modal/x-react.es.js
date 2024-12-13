/* empty css                */
import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as k, useState as w } from "react";
import { useDisclosure as B, Modal as C, ModalContent as F, ModalHeader as D, ModalBody as O, ModalFooter as q, Button as p } from "@nextui-org/react";
import { cn as n } from "../utils/x-react.es.js";
const E = k(
  ({
    trigger: x,
    title: a = "Modal Title",
    footer: u,
    onAction: d,
    buttonCloseLabel: b = "Close",
    buttonActionLabel: t,
    classNames: o,
    children: h,
    ...j
  }, c) => {
    const { isOpen: f, onOpen: y, onClose: i } = B(), [M, m] = w("opaque"), l = (e = "opaque") => {
      m(e), y();
    }, s = () => {
      d == null || d(), i();
    }, g = (e) => {
      (e.key === "Enter" || e.key === " ") && l();
    };
    return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx(
        "div",
        {
          role: "button",
          tabIndex: 0,
          onClick: () => l(),
          onKeyDown: g,
          children: x
        }
      ),
      /* @__PURE__ */ r.jsx(
        C,
        {
          ref: c,
          backdrop: M,
          classNames: {
            closeButton: n("absolute right-4 top-4", o == null ? void 0 : o.closeButton),
            base: n(
              "bg-background border border-border rounded-md",
              o == null ? void 0 : o.base
            ),
            wrapper: n("border border-border", o == null ? void 0 : o.wrapper),
            ...o
          },
          isOpen: f,
          onClose: i,
          ...j,
          children: /* @__PURE__ */ r.jsx(F, { children: (e) => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            /* @__PURE__ */ r.jsx(D, { className: "flex flex-col gap-1", children: a }),
            /* @__PURE__ */ r.jsx(O, { children: h }),
            /* @__PURE__ */ r.jsx(q, { children: u || /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              /* @__PURE__ */ r.jsx(
                p,
                {
                  className: "border-primary/20",
                  color: "primary",
                  radius: "sm",
                  variant: "bordered",
                  onPress: e,
                  children: b
                }
              ),
              t && d && /* @__PURE__ */ r.jsx(
                p,
                {
                  color: "primary",
                  radius: "sm",
                  onPress: s,
                  children: t
                }
              )
            ] }) })
          ] }) })
        }
      )
    ] });
  }
);
E.displayName = "Modal";
export {
  E as Modal
};
