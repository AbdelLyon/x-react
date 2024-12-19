/* empty css                */
import { j as n } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as p } from "react";
import { Navbar as C, NavbarContent as s, NavbarMenuToggle as m, NavbarBrand as A, NavbarItem as c, NavbarMenu as g, NavbarMenuItem as y } from "@nextui-org/react";
import { B as i } from "../Buttons-DKd5iRbN.js";
const w = p(
  ({
    // Content
    brand: e,
    navigationItems: j = [],
    menuItems: x = [],
    profile: t,
    // Props
    contentProps: o,
    menuProps: v,
    // NextUI props
    className: h,
    classNames: u,
    isMenuOpen: l,
    onMenuOpenChange: b,
    itemProps: d,
    ...N
  }, f) => /* @__PURE__ */ n.jsxs(
    C,
    {
      ref: f,
      className: h,
      classNames: u,
      isMenuOpen: l,
      onMenuOpenChange: b,
      ...N,
      children: [
        /* @__PURE__ */ n.jsxs(s, { children: [
          /* @__PURE__ */ n.jsx(
            m,
            {
              className: "sm:hidden",
              "aria-label": l ? "Close menu" : "Open menu"
            }
          ),
          e && /* @__PURE__ */ n.jsx(A, { children: e })
        ] }),
        /* @__PURE__ */ n.jsx(
          s,
          {
            className: "hidden sm:flex gap-4",
            justify: "start",
            ...o,
            children: j.map((r, a) => /* @__PURE__ */ n.jsx(c, { isActive: r.isActive, children: /* @__PURE__ */ n.jsx(
              i,
              {
                color: r.color || (r.isActive ? "primary" : "default"),
                "aria-current": r.isActive ? "page" : void 0,
                onPress: r.onPress,
                startContent: r.startContent,
                endContent: r.endContent,
                ...d,
                children: r.label
              }
            ) }, a))
          }
        ),
        /* @__PURE__ */ n.jsx(s, { justify: "end", ...o, children: t && /* @__PURE__ */ n.jsx(c, { children: t }) }),
        /* @__PURE__ */ n.jsx(g, { ...v, children: x.map((r, a) => /* @__PURE__ */ n.jsx(y, { children: /* @__PURE__ */ n.jsx(
          i,
          {
            color: r.color || (r.isActive ? "primary" : "default"),
            onPress: r.onPress,
            startContent: r.startContent,
            endContent: r.endContent,
            ...d,
            children: r.label
          }
        ) }, a)) })
      ]
    }
  )
);
export {
  w as Navbar
};
