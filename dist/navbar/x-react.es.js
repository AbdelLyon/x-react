/* empty css                */
import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as b } from "react";
import { Navbar as p, NavbarContent as e, NavbarMenuToggle as g, NavbarBrand as d, NavbarItem as o, Link as j, NavbarMenu as y, NavbarMenuItem as A } from "@nextui-org/react";
const w = b(
  ({
    // Content
    brand: a,
    navigationItems: x = [],
    menuItems: h = [],
    profile: n,
    // Props
    contentProps: l,
    menuProps: m,
    // NextUI props
    className: t,
    classNames: v,
    isMenuOpen: c,
    onMenuOpenChange: N,
    ...u
  }, f) => /* @__PURE__ */ r.jsxs(
    p,
    {
      ref: f,
      className: t,
      classNames: v,
      isMenuOpen: c,
      onMenuOpenChange: N,
      ...u,
      children: [
        /* @__PURE__ */ r.jsx(e, { className: "md:hidden", justify: "start", children: /* @__PURE__ */ r.jsx(
          g,
          {
            "aria-label": c ? "Close menu" : "Open menu"
          }
        ) }),
        a && /* @__PURE__ */ r.jsx(
          e,
          {
            className: "md:hidden pr-3",
            justify: "center",
            ...l,
            children: /* @__PURE__ */ r.jsx(d, { children: a })
          }
        ),
        /* @__PURE__ */ r.jsxs(
          e,
          {
            className: "hidden md:flex gap-4",
            justify: "start",
            ...l,
            children: [
              a && /* @__PURE__ */ r.jsx(d, { children: a }),
              x.map((s, i) => /* @__PURE__ */ r.jsx(o, { isActive: s.isActive, children: /* @__PURE__ */ r.jsx(
                j,
                {
                  color: s.color || (s.isActive ? "primary" : "foreground"),
                  "aria-current": s.isActive ? "page" : void 0,
                  onPress: s.onPress,
                  children: s.label
                }
              ) }, i))
            ]
          }
        ),
        /* @__PURE__ */ r.jsx(e, { justify: "end", ...l, children: n && /* @__PURE__ */ r.jsx(o, { children: n }) }),
        /* @__PURE__ */ r.jsx(y, { ...m, children: h.map((s, i) => /* @__PURE__ */ r.jsx(A, { children: /* @__PURE__ */ r.jsx(
          j,
          {
            color: s.color || "foreground",
            onPress: s.onPress,
            size: "lg",
            className: "w-full",
            children: s.label
          }
        ) }, i)) })
      ]
    }
  )
);
w.displayName = "Navbar";
export {
  w as Navbar
};
