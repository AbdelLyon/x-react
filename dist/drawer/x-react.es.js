/* empty css                */
import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as v, isValidElement as E } from "react";
import { useDisclosure as F, Drawer as K, DrawerContent as O, DrawerHeader as R, DrawerBody as C, DrawerFooter as H } from "@nextui-org/react";
import { cn as e } from "../utils/x-react.es.js";
import { B as x } from "../Buttons-COIoW96c.js";
const w = (a) => a !== void 0 && E(a), y = (a) => typeof a == "string" && a.length > 0, I = v(
  ({
    trigger: a,
    title: c,
    children: j,
    footer: l,
    buttonCloseLabel: m = "Close",
    buttonActionLabel: h,
    onAction: n,
    buttonCloseProps: d,
    buttonActionProps: u,
    classNames: o = {},
    ...D
  }, B) => {
    const { isOpen: g, onOpen: p, onClose: t } = F(), b = async () => {
      try {
        await (n == null ? void 0 : n()), t();
      } catch (s) {
        console.error("Action failed:", s);
      }
    }, k = (s) => {
      (s.key === "Enter" || s.key === " ") && (s.preventDefault(), p());
    }, N = () => {
      const s = y(m), V = y(h) && n !== void 0, f = {
        color: "primary",
        radius: "sm"
      };
      return /* @__PURE__ */ r.jsxs("div", { className: "flex justify-end gap-2", children: [
        s && /* @__PURE__ */ r.jsx(
          x,
          {
            ...f,
            variant: "bordered",
            onPress: t,
            className: e("border-primary/50", d == null ? void 0 : d.className),
            ...d,
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
      wrapper: e(o.wrapper),
      base: e("bg-background", o.base),
      backdrop: e(o.backdrop),
      closeButton: e("absolute right-4 top-4", o.closeButton),
      header: e(o.header),
      body: e(o.body),
      footer: e(o.footer)
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
          children: a
        }
      ),
      /* @__PURE__ */ r.jsx(
        K,
        {
          ref: B,
          isOpen: g,
          onClose: t,
          classNames: i,
          ...D,
          children: /* @__PURE__ */ r.jsx(O, { children: () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            w(c) && /* @__PURE__ */ r.jsx(R, { className: i.header, children: c }),
            /* @__PURE__ */ r.jsx(C, { className: i.body, children: j }),
            /* @__PURE__ */ r.jsx(H, { className: i.footer, children: w(l) ? l : N() })
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
