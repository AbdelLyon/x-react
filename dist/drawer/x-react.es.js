/* empty css                */
import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as N } from "react";
import { useDisclosure as F, Drawer as V, DrawerContent as E, DrawerHeader as K, DrawerBody as O, DrawerFooter as R } from "@nextui-org/react";
import { cn as e } from "../utils/x-react.es.js";
import { B as x } from "../Buttons-COIoW96c.js";
const w = (s) => typeof s == "string" && s.length > 0, H = N(
  ({
    trigger: s,
    title: c,
    children: y,
    footer: l,
    buttonCloseLabel: m = "Close",
    buttonActionLabel: h,
    onAction: n,
    buttonCloseProps: d,
    buttonActionProps: j,
    classNames: a = {},
    ...u
  }, D) => {
    const { isOpen: B, onOpen: p, onClose: i } = F(), g = async () => {
      try {
        await (n == null ? void 0 : n()), i();
      } catch (o) {
        console.error("Action failed:", o);
      }
    }, b = (o) => {
      (o.key === "Enter" || o.key === " ") && (o.preventDefault(), p());
    }, k = () => {
      const o = w(m), v = w(h) && n !== void 0, f = {
        color: "primary",
        radius: "sm"
      };
      return /* @__PURE__ */ r.jsxs("div", { className: "flex justify-end gap-2", children: [
        o && /* @__PURE__ */ r.jsx(
          x,
          {
            ...f,
            variant: "bordered",
            onPress: i,
            className: e("border-primary/50", d == null ? void 0 : d.className),
            ...d,
            children: m
          }
        ),
        v && /* @__PURE__ */ r.jsx(
          x,
          {
            ...f,
            onPress: g,
            ...j,
            children: h
          }
        )
      ] });
    }, t = {
      wrapper: e(a.wrapper),
      base: e("bg-background rounded-none", a.base),
      backdrop: e(a.backdrop),
      closeButton: e("absolute right-4 top-4", a.closeButton),
      header: e(a.header),
      body: e(a.body),
      footer: e(a.footer)
    };
    return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx(
        "div",
        {
          role: "button",
          tabIndex: 0,
          onClick: p,
          onKeyDown: b,
          className: "inline-block",
          children: s
        }
      ),
      /* @__PURE__ */ r.jsx(
        V,
        {
          ref: D,
          isOpen: B,
          onClose: i,
          classNames: t,
          ...u,
          children: /* @__PURE__ */ r.jsx(E, { children: () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            c !== void 0 && /* @__PURE__ */ r.jsx(K, { className: t.header, children: c }),
            /* @__PURE__ */ r.jsx(O, { className: t.body, children: y }),
            /* @__PURE__ */ r.jsx(R, { className: t.footer, children: l !== void 0 ? l : k() })
          ] }) })
        }
      )
    ] });
  }
);
H.displayName = "Drawer";
export {
  H as Drawer
};
