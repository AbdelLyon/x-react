/* empty css                */
import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as N } from "react";
import { Navbar as p, NavbarContent as s, NavbarMenuToggle as f, NavbarBrand as C, NavbarItem as l, Link as g, NavbarMenu as A, NavbarMenuItem as y } from "@nextui-org/react";
import { B } from "../Buttons-DKd5iRbN.js";
const w = N(
  ({
    // Content
    brand: n,
    navigationItems: d = [],
    menuItems: c = [],
    profile: t,
    // Props
    contentProps: o,
    menuProps: j,
    // NextUI props
    className: x,
    classNames: v,
    isMenuOpen: i,
    onMenuOpenChange: h,
    itemProps: m,
    ...b
  }, u) => /* @__PURE__ */ r.jsxs(
    p,
    {
      ref: u,
      className: x,
      classNames: v,
      isMenuOpen: i,
      onMenuOpenChange: h,
      ...b,
      children: [
        /* @__PURE__ */ r.jsxs(s, { children: [
          /* @__PURE__ */ r.jsx(
            f,
            {
              className: "md:hidden",
              "aria-label": i ? "Close menu" : "Open menu"
            }
          ),
          n && /* @__PURE__ */ r.jsx(C, { children: n })
        ] }),
        /* @__PURE__ */ r.jsx(
          s,
          {
            className: "hidden md:flex gap-4",
            justify: "start",
            ...o,
            children: d.map((a, e) => /* @__PURE__ */ r.jsx(l, { isActive: a.isActive, children: /* @__PURE__ */ r.jsx(
              g,
              {
                "aria-current": a.isActive ? "page" : void 0,
                onPress: a.onPress,
                children: a.label
              }
            ) }, e))
          }
        ),
        /* @__PURE__ */ r.jsx(s, { justify: "end", ...o, children: t && /* @__PURE__ */ r.jsx(l, { children: t }) }),
        /* @__PURE__ */ r.jsx(A, { ...j, children: c.map((a, e) => /* @__PURE__ */ r.jsx(y, { children: /* @__PURE__ */ r.jsx(
          B,
          {
            color: a.color || (a.isActive ? "primary" : "default"),
            onPress: a.onPress,
            startContent: a.startContent,
            endContent: a.endContent,
            ...m,
            children: a.label
          }
        ) }, e)) })
      ]
    }
  )
);
export {
  w as Navbar
};
