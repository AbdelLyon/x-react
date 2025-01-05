import "../image/image.es.js";
import { jsxs as c, Fragment as y, jsx as r } from "react/jsx-runtime";
import { forwardRef as F } from "react";
import { useDisclosure as K, Drawer as O, DrawerContent as E, DrawerHeader as H, DrawerBody as I, DrawerFooter as R } from "@nextui-org/react";
import { cn as e } from "../utils/utils.es.js";
import { B as u } from "../Button-Bwji-dCD.js";
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
    classNames: a = {},
    ...g
  }, k) => {
    const { isOpen: v, onOpen: f, onClose: s } = K(), x = async () => {
      try {
        await (n == null ? void 0 : n()), s();
      } catch (o) {
        console.error("Action failed:", o);
      }
    }, N = (o) => {
      (o.key === "Enter" || o.key === " ") && (o.preventDefault(), f());
    }, j = () => {
      const o = D(m), V = D(p) && n !== void 0, w = {
        color: "primary",
        radius: "sm"
      };
      return /* @__PURE__ */ c("div", { className: "flex justify-end gap-2", children: [
        o && /* @__PURE__ */ r(
          u,
          {
            ...w,
            variant: "bordered",
            onPress: s,
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
      wrapper: e(a.wrapper),
      base: e("bg-background rounded-none", a.base),
      backdrop: e(a.backdrop),
      closeButton: e("absolute right-4 top-4", a.closeButton),
      header: e(a.header),
      body: e(a.body),
      footer: e(a.footer)
    };
    return /* @__PURE__ */ c(y, { children: [
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
          onClose: s,
          classNames: t,
          ...g,
          children: /* @__PURE__ */ r(E, { children: () => /* @__PURE__ */ c(y, { children: [
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
