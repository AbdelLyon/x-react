/* empty css                */
import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as b } from "react";
import { Navbar as f, NavbarContent as e, NavbarMenuToggle as p, NavbarBrand as g, NavbarItem as c, Link as d, NavbarMenu as A, NavbarMenuItem as y } from "@nextui-org/react";
const M = b(
  ({
    // Content
    brand: l,
    navigationItems: j = [],
    menuItems: x = [],
    profile: n,
    // Props
    contentProps: i,
    menuProps: v,
    // NextUI props
    className: h,
    classNames: m,
    isMenuOpen: o,
    onMenuOpenChange: t,
    ...u
  }, N) => /* @__PURE__ */ r.jsxs(
    f,
    {
      ref: N,
      className: h,
      classNames: m,
      isMenuOpen: o,
      onMenuOpenChange: t,
      ...u,
      children: [
        /* @__PURE__ */ r.jsxs(e, { children: [
          /* @__PURE__ */ r.jsx("div", { className: "md:hidden", children: /* @__PURE__ */ r.jsx(
            p,
            {
              "aria-label": o ? "Close menu" : "Open menu"
            }
          ) }),
          l && /* @__PURE__ */ r.jsx(g, { children: l })
        ] }),
        /* @__PURE__ */ r.jsx(
          e,
          {
            className: "hidden md:flex gap-4",
            justify: "start",
            ...i,
            children: j.map((s, a) => /* @__PURE__ */ r.jsx(c, { isActive: s.isActive, children: /* @__PURE__ */ r.jsx(
              d,
              {
                color: s.color || (s.isActive ? "primary" : "foreground"),
                "aria-current": s.isActive ? "page" : void 0,
                onPress: s.onPress,
                children: s.label
              }
            ) }, a))
          }
        ),
        /* @__PURE__ */ r.jsx(e, { justify: "end", ...i, children: n && /* @__PURE__ */ r.jsx(c, { children: n }) }),
        /* @__PURE__ */ r.jsx(A, { ...v, children: x.map((s, a) => /* @__PURE__ */ r.jsx(y, { children: /* @__PURE__ */ r.jsx(
          d,
          {
            color: s.color || (s.isActive ? "primary" : "foreground"),
            onPress: s.onPress,
            size: "lg",
            className: "w-full",
            children: s.label
          }
        ) }, a)) })
      ]
    }
  )
);
export {
  M as Navbar
};
