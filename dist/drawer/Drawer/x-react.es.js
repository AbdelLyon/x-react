import { jsxs as s, Fragment as y, jsx as r } from "react/jsx-runtime";
import { forwardRef as F } from "react";
import { useDisclosure as K, Drawer as O, DrawerContent as E, DrawerHeader as H, DrawerBody as I, DrawerFooter as R } from "@nextui-org/react";
import { cn as e } from "../../utils/x-react.es.js";
/* empty css                         */
import { Button as u } from "../../button/Button/x-react.es.js";
/* empty css                              */
const D = (d) => typeof d == "string" && d.length > 0, $ = F(
  ({
    trigger: d,
    title: l,
    children: B,
    footer: h,
    buttonCloseLabel: m = "Close",
    buttonActionLabel: p,
    onAction: n,
    buttonCloseProps: i,
    buttonActionProps: b,
    classNames: o = {},
    ...g
  }, k) => {
    const { isOpen: v, onOpen: f, onClose: c } = K(), x = async () => {
      try {
        await (n == null ? void 0 : n()), c();
      } catch (a) {
        console.error("Action failed:", a);
      }
    }, N = (a) => {
      (a.key === "Enter" || a.key === " ") && (a.preventDefault(), f());
    }, j = () => {
      const a = D(m), V = D(p) && n !== void 0, w = {
        color: "primary",
        radius: "sm"
      };
      return /* @__PURE__ */ s("div", { className: "flex justify-end gap-2", children: [
        a && /* @__PURE__ */ r(
          u,
          {
            ...w,
            variant: "bordered",
            onPress: c,
            className: e("border-primary/50", i == null ? void 0 : i.className),
            ...i,
            children: m
          }
        ),
        V && /* @__PURE__ */ r(
          u,
          {
            ...w,
            onPress: x,
            ...b,
            children: p
          }
        )
      ] });
    }, t = {
      wrapper: e(o.wrapper),
      base: e("bg-background rounded-none", o.base),
      backdrop: e(o.backdrop),
      closeButton: e("absolute right-4 top-4", o.closeButton),
      header: e(o.header),
      body: e(o.body),
      footer: e(o.footer)
    };
    return /* @__PURE__ */ s(y, { children: [
      /* @__PURE__ */ r(
        "div",
        {
          role: "button",
          tabIndex: 0,
          onClick: f,
          onKeyDown: N,
          className: "inline-block",
          children: d
        }
      ),
      /* @__PURE__ */ r(
        O,
        {
          ref: k,
          isOpen: v,
          onClose: c,
          classNames: t,
          ...g,
          children: /* @__PURE__ */ r(E, { children: () => /* @__PURE__ */ s(y, { children: [
            l !== void 0 && /* @__PURE__ */ r(H, { className: t.header, children: l }),
            /* @__PURE__ */ r(I, { className: t.body, children: B }),
            /* @__PURE__ */ r(R, { className: t.footer, children: h !== void 0 ? h : j() })
          ] }) })
        }
      )
    ] });
  }
);
$.displayName = "Drawer";
export {
  $ as Drawer
};
