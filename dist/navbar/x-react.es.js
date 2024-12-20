/* empty css                */
import { j as a } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as y } from "react";
import { Navbar as A, NavbarContent as d, NavbarMenuToggle as g, NavbarBrand as v, NavbarItem as x, Link as j, NavbarMenu as w, NavbarMenuItem as C } from "@nextui-org/react";
const R = y(
  ({
    // Content
    brand: s,
    profile: o,
    navigationItems: N = [],
    menuItems: b = [],
    // Props
    contentProps: t,
    menuProps: f,
    // Callback
    onItemPress: c,
    // NextUI props
    className: h,
    classNames: p,
    isMenuOpen: e,
    onMenuOpenChange: l,
    ...u
  }, k) => {
    const i = (r) => {
      var n;
      (n = r.onPress) == null || n.call(r), c == null || c(r), l == null || l(!1);
    };
    return /* @__PURE__ */ a.jsxs(
      A,
      {
        ref: k,
        className: h,
        classNames: {
          base: "bg-background",
          wrapper: "max-w-full",
          ...p
        },
        isMenuOpen: e,
        onMenuOpenChange: l,
        ...u,
        children: [
          /* @__PURE__ */ a.jsxs(d, { className: "md:hidden", children: [
            /* @__PURE__ */ a.jsx(
              g,
              {
                "aria-label": e ? "Close menu" : "Open menu"
              }
            ),
            s && /* @__PURE__ */ a.jsx(v, { children: s })
          ] }),
          /* @__PURE__ */ a.jsxs(d, { className: "hidden md:flex", children: [
            s && /* @__PURE__ */ a.jsx(v, { children: s }),
            N.map((r) => /* @__PURE__ */ a.jsx(x, { isActive: r.isActive, children: /* @__PURE__ */ a.jsxs(
              j,
              {
                color: r.linkColor || (r.isActive ? "primary" : "foreground"),
                "aria-current": r.isActive ? "page" : void 0,
                onPress: () => i(r),
                children: [
                  r.startContent,
                  r.label,
                  r.endContent
                ]
              }
            ) }, r.key))
          ] }),
          /* @__PURE__ */ a.jsx(d, { justify: "end", ...t, children: o && /* @__PURE__ */ a.jsx(x, { children: o }) }),
          /* @__PURE__ */ a.jsx(w, { ...f, children: b.map((r) => /* @__PURE__ */ a.jsx(C, { children: /* @__PURE__ */ a.jsxs(
            j,
            {
              color: r.linkColor || (r.isActive ? "primary" : "foreground"),
              "aria-current": r.isActive ? "page" : void 0,
              onPress: () => i(r),
              children: [
                r.startContent,
                r.label,
                r.endContent
              ]
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
