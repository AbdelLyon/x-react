/* empty css                */
import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as b } from "react";
import { Navbar as p, NavbarContent as e, NavbarMenuToggle as g, NavbarBrand as o, NavbarItem as d, Link as j, NavbarMenu as y, NavbarMenuItem as A } from "@nextui-org/react";
const w = b(
  ({
    // Content
    brand: a,
    navigationItems: x = [],
    menuItems: m = [],
    profile: n,
    // Props
    contentProps: l,
    menuProps: h,
    // NextUI props
    className: v,
    classNames: N,
    isMenuOpen: c,
    onMenuOpenChange: t,
    ...u
  }, f) => /* @__PURE__ */ r.jsxs(
    p,
    {
      ref: f,
      className: v,
      classNames: N,
      isMenuOpen: c,
      onMenuOpenChange: t,
      ...u,
      children: [
        /* @__PURE__ */ r.jsx(e, { className: "sm:hidden", justify: "start", children: /* @__PURE__ */ r.jsx(
          g,
          {
            "aria-label": c ? "Close menu" : "Open menu"
          }
        ) }),
        a && /* @__PURE__ */ r.jsx(
          e,
          {
            className: "sm:hidden pr-3",
            justify: "center",
            ...l,
            children: /* @__PURE__ */ r.jsx(o, { children: a })
          }
        ),
        /* @__PURE__ */ r.jsxs(
          e,
          {
            className: "sm:flex gap-4",
            justify: "end",
            ...l,
            children: [
              a && /* @__PURE__ */ r.jsx(o, { children: a }),
              x.map((s, i) => /* @__PURE__ */ r.jsx(d, { isActive: s.isActive, children: /* @__PURE__ */ r.jsx(
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
        /* @__PURE__ */ r.jsx(e, { justify: "end", ...l, children: n && /* @__PURE__ */ r.jsx(d, { children: n }) }),
        /* @__PURE__ */ r.jsx(y, { ...h, children: m.map((s, i) => /* @__PURE__ */ r.jsx(A, { children: /* @__PURE__ */ r.jsx(
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
