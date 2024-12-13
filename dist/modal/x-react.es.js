/* empty css                */
import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as k, useState as w } from "react";
import { useDisclosure as B, Modal as C, ModalContent as F, ModalHeader as D, ModalBody as O, ModalFooter as q, Button as p } from "@nextui-org/react";
import { cn as n } from "../utils/x-react.es.js";
const E = k(
  ({
    trigger: x,
    title: a = "Modal Title",
    footer: h,
    onAction: d,
    buttonCloseLabel: u = "Close",
    buttonActionLabel: t,
    classNames: o,
    children: j,
    ...b
  }, c) => {
    const { isOpen: f, onOpen: y, onClose: i } = B(), [M, s] = w("opaque"), l = (e = "opaque") => {
      s(e), y();
    }, g = () => {
      d == null || d(), i();
    }, m = (e) => {
      (e.key === "Enter" || e.key === " ") && l();
    };
    return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx(
        "div",
        {
          role: "button",
          tabIndex: 0,
          onClick: () => l(),
          onKeyDown: m,
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
            base: n("bg-background", o == null ? void 0 : o.base),
            wrapper: n("border border-border", o == null ? void 0 : o.wrapper),
            ...o
          },
          isOpen: f,
          onClose: i,
          ...b,
          children: /* @__PURE__ */ r.jsx(F, { children: (e) => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            /* @__PURE__ */ r.jsx(D, { className: "flex flex-col gap-1", children: a }),
            /* @__PURE__ */ r.jsx(O, { children: j }),
            /* @__PURE__ */ r.jsx(q, { children: h || /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              /* @__PURE__ */ r.jsx(
                p,
                {
                  className: "border-primary/20",
                  color: "primary",
                  radius: "sm",
                  variant: "bordered",
                  onPress: e,
                  children: u
                }
              ),
              t && d && /* @__PURE__ */ r.jsx(
                p,
                {
                  color: "primary",
                  radius: "sm",
                  onPress: g,
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
