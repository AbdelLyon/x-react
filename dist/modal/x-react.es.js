/* empty css                */
import { j as e } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as w, useState as b } from "react";
import { useDisclosure as F, Modal as v, ModalContent as D, ModalHeader as O, ModalBody as q, ModalFooter as C } from "@nextui-org/react";
import { cn as t } from "../utils/x-react.es.js";
import { B as x } from "../Buttons-DKd5iRbN.js";
const E = w(
  ({
    trigger: h,
    title: j,
    footer: u,
    onAction: a,
    buttonCloseLabel: d,
    buttonActionLabel: l,
    children: p,
    buttonProps: s = {},
    ...o
  }, f) => {
    var i, m;
    const { isOpen: g, onOpen: y, onClose: n } = F(), [M, k] = b("opaque"), c = (r = "opaque") => {
      k(r), y();
    }, N = () => {
      a == null || a(), n();
    }, B = (r) => {
      (r.key === "Enter" || r.key === " ") && c();
    };
    return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          role: "button",
          tabIndex: 0,
          onClick: () => c(),
          onKeyDown: B,
          children: h
        }
      ),
      /* @__PURE__ */ e.jsx(
        v,
        {
          ref: f,
          backdrop: M,
          classNames: {
            closeButton: t(
              "absolute right-4 top-4",
              (i = o.classNames) == null ? void 0 : i.closeButton
            ),
            base: t(
              "bg-background border border-divider shadow-lg dark:shadow-none rounded-lg",
              (m = o.classNames) == null ? void 0 : m.base
            ),
            ...o.classNames
          },
          isOpen: g,
          onClose: n,
          ...o,
          children: /* @__PURE__ */ e.jsx(D, { children: (r) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(O, { className: "flex flex-col gap-1", children: j }),
            /* @__PURE__ */ e.jsx(q, { children: p }),
            /* @__PURE__ */ e.jsx(C, { children: u || /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              d && /* @__PURE__ */ e.jsx(
                x,
                {
                  className: "border-primary/20",
                  color: s.color || "primary",
                  radius: s.radius || "sm",
                  variant: s.variant || "bordered",
                  onPress: r,
                  children: d
                }
              ),
              l && a && /* @__PURE__ */ e.jsx(
                x,
                {
                  color: s.color || "primary",
                  radius: s.radius || "sm",
                  onPress: N,
                  children: l
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
