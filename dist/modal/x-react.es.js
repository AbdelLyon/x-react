/* empty css                */
import { j as e } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as w, useState as F } from "react";
import { useDisclosure as v, Modal as D, ModalContent as O, ModalHeader as b, ModalBody as q, ModalFooter as C } from "@nextui-org/react";
import { cn as t } from "../utils/x-react.es.js";
import { B as x } from "../Buttons-DKd5iRbN.js";
const E = w(
  ({
    trigger: h,
    title: j,
    footer: f,
    onAction: s,
    buttonCloseLabel: o,
    buttonActionLabel: l,
    children: u,
    buttonProps: r = {},
    ...d
  }, g) => {
    var i, m;
    const { isOpen: p, onOpen: y, onClose: n } = v(), [M, k] = F("opaque"), c = (a = "opaque") => {
      k(a), y();
    }, N = () => {
      s == null || s(), n();
    }, B = (a) => {
      (a.key === "Enter" || a.key === " ") && c();
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
        D,
        {
          ref: g,
          backdrop: M,
          classNames: {
            closeButton: t(
              "absolute right-4 top-4",
              (i = d.classNames) == null ? void 0 : i.closeButton
            ),
            base: t(
              "bg-background border border-divider shadow-lg dark:shadow-none rounded-lg",
              (m = d.classNames) == null ? void 0 : m.base
            ),
            ...d.classNames
          },
          isOpen: p,
          onClose: n,
          ...d,
          children: /* @__PURE__ */ e.jsx(O, { children: (a) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(b, { className: "flex flex-col gap-1", children: j }),
            /* @__PURE__ */ e.jsx(q, { children: u }),
            /* @__PURE__ */ e.jsx(C, { children: f || /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              o && /* @__PURE__ */ e.jsx(
                x,
                {
                  className: "border-primary/40",
                  color: r.color || "primary",
                  radius: r.radius || "sm",
                  variant: r.variant || "bordered",
                  onPress: a,
                  ...r,
                  children: o
                }
              ),
              l && s && /* @__PURE__ */ e.jsx(
                x,
                {
                  color: r.color || "primary",
                  radius: r.radius || "sm",
                  onPress: N,
                  ...r,
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
