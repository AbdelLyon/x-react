/* empty css                */
import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as b } from "react";
import { Navbar as f, NavbarContent as n, NavbarMenuToggle as C, NavbarBrand as t, NavbarItem as i, Link as A, NavbarMenu as P, NavbarMenuItem as g } from "@nextui-org/react";
import { B as y } from "../Buttons-DKd5iRbN.js";
const B = b(
  ({
    // Content
    brand: e,
    navigationItems: c = [],
    menuItems: d = [],
    profile: l,
    // Props
    contentProps: x,
    menuProps: j,
    itemProps: m,
    // NextUI props
    className: v,
    classNames: h,
    isMenuOpen: o,
    onMenuOpenChange: N,
    ...p
  }, u) => /* @__PURE__ */ r.jsxs(
    f,
    {
      ref: u,
      className: v,
      classNames: h,
      isMenuOpen: o,
      onMenuOpenChange: N,
      ...p,
      children: [
        /* @__PURE__ */ r.jsxs(n, { className: "md:hidden", children: [
          /* @__PURE__ */ r.jsx(
            C,
            {
              "aria-label": o ? "Close menu" : "Open menu"
            }
          ),
          e && /* @__PURE__ */ r.jsx(t, { children: e })
        ] }),
        /* @__PURE__ */ r.jsxs(n, { className: "hidden md:flex", children: [
          e && /* @__PURE__ */ r.jsx(t, { children: e }),
          c.map((a, s) => /* @__PURE__ */ r.jsx(i, { isActive: a.isActive, children: /* @__PURE__ */ r.jsx(
            A,
            {
              "aria-current": a.isActive ? "page" : void 0,
              onPress: a.onPress,
              children: a.label
            }
          ) }, s))
        ] }),
        /* @__PURE__ */ r.jsx(n, { justify: "end", ...x, children: l && /* @__PURE__ */ r.jsx(i, { children: l }) }),
        /* @__PURE__ */ r.jsx(P, { ...j, children: d.map((a, s) => /* @__PURE__ */ r.jsx(g, { children: /* @__PURE__ */ r.jsx(
          y,
          {
            color: a.color || (a.isActive ? "primary" : "default"),
            onPress: a.onPress,
            startContent: a.startContent,
            endContent: a.endContent,
            className: "w-full",
            ...m,
            children: a.label
          }
        ) }, s)) })
      ]
    }
  )
);
B.displayName = "Navbar";
export {
  B as Navbar
};
