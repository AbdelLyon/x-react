/* empty css                */
import { j as d } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as q, isValidElement as k } from "react";
import { useDisclosure as z, Drawer as G, DrawerContent as J, DrawerHeader as M, DrawerBody as Q, DrawerFooter as S } from "@nextui-org/react";
import { cn as D } from "../utils/x-react.es.js";
import { B as p } from "../Buttons-BlHNPx1T.js";
const U = q(
  ({
    trigger: v,
    title: y,
    children: F,
    footer: h,
    buttonCloseLabel: w = "Close",
    buttonActionLabel: x,
    onAction: f,
    buttonCloseProps: i,
    buttonActionProps: e,
    classNames: r,
    ...V
  }, E) => {
    const { isOpen: K, onOpen: B, onClose: j } = z(), O = () => {
      f == null || f(), j();
    }, R = (n) => {
      (n.key === "Enter" || n.key === " ") && B();
    }, H = () => {
      const n = typeof w == "string" && w.length > 0, $ = typeof x == "string" && x.length > 0 && f !== void 0;
      return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        n && /* @__PURE__ */ d.jsx(
          p,
          {
            color: (i == null ? void 0 : i.color) || "primary",
            radius: (i == null ? void 0 : i.radius) || "sm",
            variant: (i == null ? void 0 : i.variant) || "bordered",
            onPress: j,
            className: D("border-primary/50", i == null ? void 0 : i.className),
            ...i,
            children: w
          }
        ),
        $ && /* @__PURE__ */ d.jsx(
          p,
          {
            color: (e == null ? void 0 : e.color) || "primary",
            radius: (e == null ? void 0 : e.radius) || "sm",
            onPress: O,
            ...e,
            children: x
          }
        )
      ] });
    }, I = y != null && (typeof y == "string" || k(y)), T = h != null && (typeof h == "string" || k(h)), g = {
      ...r,
      wrapper: typeof (r == null ? void 0 : r.wrapper) == "string" ? r.wrapper : "",
      base: D(
        "bg-background",
        typeof (r == null ? void 0 : r.base) == "string" ? r.base : ""
      ),
      backdrop: typeof (r == null ? void 0 : r.backdrop) == "string" ? r.backdrop : "",
      closeButton: D(
        "absolute right-4 top-4",
        typeof (r == null ? void 0 : r.closeButton) == "string" ? r.closeButton : ""
      ),
      header: typeof (r == null ? void 0 : r.header) == "string" ? r.header : "",
      body: typeof (r == null ? void 0 : r.body) == "string" ? r.body : "",
      footer: typeof (r == null ? void 0 : r.footer) == "string" ? r.footer : ""
    };
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(
        "div",
        {
          role: "button",
          tabIndex: 0,
          onClick: B,
          onKeyDown: R,
          children: v
        }
      ),
      /* @__PURE__ */ d.jsx(
        G,
        {
          ref: E,
          isOpen: K,
          onClose: j,
          classNames: g,
          ...V,
          children: /* @__PURE__ */ d.jsx(J, { children: () => /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
            I && /* @__PURE__ */ d.jsx(M, { className: g.header, children: y }),
            /* @__PURE__ */ d.jsx(Q, { className: g.body, children: F }),
            /* @__PURE__ */ d.jsx(S, { className: g.footer, children: T ? h : H() })
          ] }) })
        }
      )
    ] });
  }
);
U.displayName = "Drawer";
export {
  U as Drawer
};
