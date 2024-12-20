/* empty css                */
import { j as a } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as g } from "react";
import { Navbar as m, NavbarContent as e, NavbarMenuToggle as y, NavbarBrand as c, NavbarItem as i, Link as k, NavbarMenu as w, NavbarMenuItem as A } from "@nextui-org/react";
import { B } from "../Buttons-DKd5iRbN.js";
import { cn as M } from "../utils/x-react.es.js";
const R = g(
  ({
    // Content
    brand: n,
    profile: o,
    navigationItems: x = [],
    menuItems: j = [],
    // Props
    contentProps: v,
    menuProps: h,
    itemProps: u,
    // Callback
    onItemPress: s,
    // NextUI props
    className: b,
    classNames: N,
    isMenuOpen: l,
    onMenuOpenChange: p,
    ...f
  }, C) => {
    const d = (r) => {
      var t;
      (t = r.onPress) == null || t.call(r), s == null || s(r);
    };
    return /* @__PURE__ */ a.jsxs(
      m,
      {
        ref: C,
        className: b,
        classNames: {
          base: "bg-background",
          wrapper: "max-w-full",
          ...N
        },
        isMenuOpen: l,
        onMenuOpenChange: p,
        ...f,
        children: [
          /* @__PURE__ */ a.jsxs(e, { className: "md:hidden", children: [
            /* @__PURE__ */ a.jsx(
              y,
              {
                "aria-label": l ? "Close menu" : "Open menu"
              }
            ),
            n && /* @__PURE__ */ a.jsx(c, { children: n })
          ] }),
          /* @__PURE__ */ a.jsxs(e, { className: "hidden md:flex", children: [
            n && /* @__PURE__ */ a.jsx(c, { children: n }),
            x.map((r) => /* @__PURE__ */ a.jsx(i, { isActive: r.isActive, children: /* @__PURE__ */ a.jsxs(
              k,
              {
                color: r.linkColor || (r.isActive ? "primary" : "foreground"),
                "aria-current": r.isActive ? "page" : void 0,
                onPress: () => d(r),
                children: [
                  r.startContent,
                  r.label,
                  r.endContent
                ]
              }
            ) }, r.key))
          ] }),
          /* @__PURE__ */ a.jsx(e, { justify: "end", ...v, children: o && /* @__PURE__ */ a.jsx(i, { children: o }) }),
          /* @__PURE__ */ a.jsx(w, { ...h, children: j.map((r) => /* @__PURE__ */ a.jsx(A, { children: /* @__PURE__ */ a.jsx(
            B,
            {
              color: r.buttonColor || "default",
              onPress: () => d(r),
              startContent: r.startContent,
              endContent: r.endContent,
              className: M("w-full justify-start border-divider"),
              variant: "light",
              ...u,
              children: r.label
            }
          ) }, r.key)) })
        ]
      }
    );
  }
);
R.displayName = "Navbar";
export {
  R as Navbar
};
