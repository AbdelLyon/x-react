/* empty css                */
import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as v, isValidElement as E } from "react";
import { useDisclosure as F, Drawer as K, DrawerContent as O, DrawerHeader as R, DrawerBody as C, DrawerFooter as H } from "@nextui-org/react";
import { cn as a } from "../utils/x-react.es.js";
import { B as x } from "../Buttons-DECBa93a.js";
const y = (e) => e != null && (typeof e == "string" || E(e)), w = (e) => typeof e == "string" && e.length > 0, I = v(
  ({
    trigger: e,
    title: l,
    children: j,
    footer: c,
    buttonCloseLabel: m = "Close",
    buttonActionLabel: h,
    onAction: d,
    buttonCloseProps: n,
    buttonActionProps: u,
    classNames: s = {},
    ...D
  }, g) => {
    const { isOpen: B, onOpen: p, onClose: t } = F(), b = async () => {
      try {
        await (d == null ? void 0 : d()), t();
      } catch (o) {
        console.error("Action failed:", o);
      }
    }, k = (o) => {
      (o.key === "Enter" || o.key === " ") && (o.preventDefault(), p());
    }, N = () => {
      const o = w(m), V = w(h) && d !== void 0, f = {
        color: "primary",
        radius: "sm"
      };
      return /* @__PURE__ */ r.jsxs("div", { className: "flex justify-end gap-2", children: [
        o && /* @__PURE__ */ r.jsx(
          x,
          {
            ...f,
            variant: "bordered",
            onPress: t,
            className: a("border-primary/50", n == null ? void 0 : n.className),
            ...n,
            children: m
          }
        ),
        V && /* @__PURE__ */ r.jsx(
          x,
          {
            ...f,
            onPress: b,
            ...u,
            children: h
          }
        )
      ] });
    }, i = {
      wrapper: a(s.wrapper),
      base: a("bg-background", s.base),
      backdrop: a(s.backdrop),
      closeButton: a("absolute right-4 top-4", s.closeButton),
      header: a(s.header),
      body: a(s.body),
      footer: a(s.footer)
    };
    return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx(
        "div",
        {
          role: "button",
          tabIndex: 0,
          onClick: p,
          onKeyDown: k,
          className: "inline-block",
          children: e
        }
      ),
      /* @__PURE__ */ r.jsx(
        K,
        {
          ref: g,
          isOpen: B,
          onClose: t,
          classNames: i,
          ...D,
          children: /* @__PURE__ */ r.jsx(O, { children: () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            y(l) && /* @__PURE__ */ r.jsx(R, { className: i.header, children: l }),
            /* @__PURE__ */ r.jsx(C, { className: i.body, children: j }),
            /* @__PURE__ */ r.jsx(H, { className: i.footer, children: y(c) ? c : N() })
          ] }) })
        }
      )
    ] });
  }
);
I.displayName = "Drawer";
export {
  I as Drawer
};
