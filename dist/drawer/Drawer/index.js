import { jsxs as s, Fragment as w, jsx as r } from "react/jsx-runtime";
import { forwardRef as V } from "react";
import { useDisclosure as F, Drawer as K, DrawerContent as O, DrawerHeader as P, DrawerBody as A, DrawerFooter as E } from "@nextui-org/react";
import { cn as e } from "../../utils/index.js";
import { Button as y } from "../../button/Button/index.js";
const D = (a) => typeof a == "string" && a.length > 0, H = V(
  ({
    trigger: a,
    title: i,
    children: b,
    footer: c,
    buttonCloseLabel: l = "Close",
    buttonActionLabel: p,
    onAction: h,
    buttonCloseProps: m,
    buttonActionProps: B,
    classNames: o = {},
    ...g
  }, k) => {
    const { isOpen: v, onOpen: f, onClose: d } = F(), x = async () => {
      try {
        await h?.(), d();
      } catch (n) {
        console.error("Action failed:", n);
      }
    }, C = (n) => {
      (n.key === "Enter" || n.key === " ") && (n.preventDefault(), f());
    }, N = () => {
      const n = D(l), j = D(p) && h !== void 0, u = {
        color: "primary",
        radius: "sm"
      };
      return /* @__PURE__ */ s("div", { className: "flex justify-end gap-2", children: [
        n && /* @__PURE__ */ r(
          y,
          {
            ...u,
            variant: "bordered",
            onPress: d,
            className: e("border-primary/50", m?.className),
            ...m,
            children: l
          }
        ),
        j && /* @__PURE__ */ r(
          y,
          {
            ...u,
            onPress: x,
            ...B,
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
    return /* @__PURE__ */ s(w, { children: [
      /* @__PURE__ */ r(
        "div",
        {
          role: "button",
          tabIndex: 0,
          onClick: f,
          onKeyDown: C,
          className: "inline-block",
          children: a
        }
      ),
      /* @__PURE__ */ r(
        K,
        {
          ref: k,
          isOpen: v,
          onClose: d,
          classNames: t,
          ...g,
          children: /* @__PURE__ */ r(O, { children: () => /* @__PURE__ */ s(w, { children: [
            i !== void 0 && /* @__PURE__ */ r(P, { className: t.header, children: i }),
            /* @__PURE__ */ r(A, { className: t.body, children: b }),
            /* @__PURE__ */ r(E, { className: t.footer, children: c !== void 0 ? c : N() })
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
//# sourceMappingURL=index.js.map
