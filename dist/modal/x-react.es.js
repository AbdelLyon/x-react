/* empty css                */
import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as k, useState as w } from "react";
import { useDisclosure as B, Modal as F, ModalContent as D, ModalHeader as O, ModalBody as q, ModalFooter as v, Button as a } from "@nextui-org/react";
import { cn as s } from "../utils/x-react.es.js";
const C = k(
  ({
    trigger: p,
    title: x,
    footer: h,
    onAction: d,
    buttonCloseLabel: n,
    buttonActionLabel: t,
    classNames: o,
    children: c,
    ...u
  }, j) => {
    const { isOpen: m, onOpen: f, onClose: i } = B(), [g, y] = w("opaque"), l = (e = "opaque") => {
      y(e), f();
    }, b = () => {
      d == null || d(), i();
    }, M = (e) => {
      (e.key === "Enter" || e.key === " ") && l();
    };
    return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx(
        "div",
        {
          role: "button",
          tabIndex: 0,
          onClick: () => l(),
          onKeyDown: M,
          children: p
        }
      ),
      /* @__PURE__ */ r.jsx(
        F,
        {
          ref: j,
          backdrop: g,
          classNames: {
            closeButton: s("absolute right-4 top-4", o == null ? void 0 : o.closeButton),
            base: s(
              "bg-background border border-divider shadow-lg dark:shadow-none rounded-lg",
              o == null ? void 0 : o.base
            ),
            ...o
          },
          isOpen: m,
          onClose: i,
          ...u,
          children: /* @__PURE__ */ r.jsx(D, { children: (e) => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            /* @__PURE__ */ r.jsx(O, { className: "flex flex-col gap-1", children: x }),
            /* @__PURE__ */ r.jsx(q, { children: c }),
            /* @__PURE__ */ r.jsx(v, { children: h || /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              n && /* @__PURE__ */ r.jsx(
                a,
                {
                  className: "border-primary/20",
                  color: "primary",
                  radius: "sm",
                  variant: "bordered",
                  onPress: e,
                  children: n
                }
              ),
              t && d && /* @__PURE__ */ r.jsx(
                a,
                {
                  color: "primary",
                  radius: "sm",
                  onPress: b,
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
C.displayName = "Modal";
export {
  C as Modal
};
