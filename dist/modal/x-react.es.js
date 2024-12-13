/* empty css                */
import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as k, useState as B } from "react";
import { useDisclosure as C, Modal as F, ModalContent as w, ModalHeader as D, ModalBody as O, ModalFooter as q, Button as i } from "@nextui-org/react";
import { cn as a } from "../utils/x-react.es.js";
const E = k(
  ({
    trigger: s,
    title: p = "Modal Title",
    footer: x,
    onAction: d,
    buttonCloseLabel: c = "Close",
    buttonActionLabel: n,
    classNames: o,
    children: u,
    ...h
  }, j) => {
    const { isOpen: m, onOpen: b, onClose: t } = C(), [f, y] = B("opaque"), l = (e = "opaque") => {
      y(e), b();
    }, M = () => {
      d == null || d(), t();
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
          children: s
        }
      ),
      /* @__PURE__ */ r.jsx(
        F,
        {
          ref: j,
          backdrop: f,
          classNames: {
            closeButton: a("absolute right-4 top-4", o == null ? void 0 : o.closeButton),
            base: a(
              "bg-background border border-border rounded-md",
              o == null ? void 0 : o.base
            ),
            ...o
          },
          isOpen: m,
          onClose: t,
          ...h,
          children: /* @__PURE__ */ r.jsx(w, { children: (e) => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            /* @__PURE__ */ r.jsx(D, { className: "flex flex-col gap-1", children: p }),
            /* @__PURE__ */ r.jsx(O, { children: u }),
            /* @__PURE__ */ r.jsx(q, { children: x || /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              /* @__PURE__ */ r.jsx(
                i,
                {
                  className: "border-primary/20",
                  color: "primary",
                  radius: "sm",
                  variant: "bordered",
                  onPress: e,
                  children: c
                }
              ),
              n && d && /* @__PURE__ */ r.jsx(
                i,
                {
                  color: "primary",
                  radius: "sm",
                  onPress: M,
                  children: n
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
