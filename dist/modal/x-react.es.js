/* empty css                */
import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as k, useState as w } from "react";
import { useDisclosure as B, Modal as C, ModalContent as F, ModalHeader as D, ModalBody as O, ModalFooter as q, Button as a } from "@nextui-org/react";
import { cn as s } from "../utils/x-react.es.js";
const E = k(
  ({
    trigger: i,
    title: p = "Modal Title",
    footer: x,
    onAction: d,
    buttonCloseLabel: h = "Close",
    buttonActionLabel: n,
    classNames: o,
    children: c,
    ...u
  }, j) => {
    const { isOpen: m, onOpen: b, onClose: l } = B(), [f, g] = w("opaque"), t = (e = "opaque") => {
      g(e), b();
    }, y = () => {
      d == null || d(), l();
    }, M = (e) => {
      (e.key === "Enter" || e.key === " ") && t();
    };
    return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx(
        "div",
        {
          role: "button",
          tabIndex: 0,
          onClick: () => t(),
          onKeyDown: M,
          children: i
        }
      ),
      /* @__PURE__ */ r.jsx(
        C,
        {
          ref: j,
          backdrop: f,
          classNames: {
            closeButton: s("absolute right-4 top-4", o == null ? void 0 : o.closeButton),
            base: s(
              "bg-background border border-small shadow-lg dark:shadow-none rounded-lg",
              o == null ? void 0 : o.base
            ),
            ...o
          },
          isOpen: m,
          onClose: l,
          ...u,
          children: /* @__PURE__ */ r.jsx(F, { children: (e) => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            /* @__PURE__ */ r.jsx(D, { className: "flex flex-col gap-1", children: p }),
            /* @__PURE__ */ r.jsx(O, { children: c }),
            /* @__PURE__ */ r.jsx(q, { children: x || /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              /* @__PURE__ */ r.jsx(
                a,
                {
                  className: "border-primary/20",
                  color: "primary",
                  radius: "sm",
                  variant: "bordered",
                  onPress: e,
                  children: h
                }
              ),
              n && d && /* @__PURE__ */ r.jsx(
                a,
                {
                  color: "primary",
                  radius: "sm",
                  onPress: y,
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
