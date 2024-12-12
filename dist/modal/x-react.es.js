import { j as r } from "../jsx-runtime-Bq5baZvQ.js";
import { useDisclosure as g, Modal as k, ModalContent as B, ModalHeader as C, ModalBody as F, ModalFooter as D, Button as i } from "@nextui-org/react";
import { useState as O } from "react";
import { cn as s } from "../utils/x-react.es.js";
const P = ({
  trigger: a,
  title: p = "Modal Title",
  footer: x,
  modalProps: c,
  onAction: n,
  buttonCloseLabel: h = "Close",
  buttonActionLabel: d,
  classNames: o,
  children: u
}) => {
  const { isOpen: j, onOpen: m, onClose: t } = g(), [b, y] = O("opaque"), l = (e = "opaque") => {
    y(e), m();
  }, M = () => {
    n == null || n(), t();
  }, f = (e) => {
    (e.key === "Enter" || e.key === " ") && l();
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(
      "div",
      {
        role: "button",
        tabIndex: 0,
        onClick: () => l(),
        onKeyDown: f,
        children: a
      }
    ),
    /* @__PURE__ */ r.jsx(
      k,
      {
        backdrop: b,
        classNames: {
          closeButton: s("absolute right-4 top-4", o == null ? void 0 : o.closeButton),
          base: s("bg-background", o == null ? void 0 : o.base),
          ...o
        },
        isOpen: j,
        onClose: t,
        ...c,
        children: /* @__PURE__ */ r.jsx(B, { children: (e) => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx(C, { className: "flex flex-col gap-1", children: p }),
          /* @__PURE__ */ r.jsx(F, { children: u }),
          /* @__PURE__ */ r.jsx(D, { children: x || /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            /* @__PURE__ */ r.jsx(
              i,
              {
                className: "border-primary/20",
                color: "primary",
                radius: "sm",
                variant: "bordered",
                onPress: e,
                children: h
              }
            ),
            d && n && /* @__PURE__ */ r.jsx(
              i,
              {
                color: "primary",
                radius: "sm",
                onPress: M,
                children: d
              }
            )
          ] }) })
        ] }) })
      }
    )
  ] });
};
export {
  P as Modal
};
