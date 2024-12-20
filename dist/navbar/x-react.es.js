/* empty css                */
import { j as a } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as C } from "react";
import { Navbar as k, NavbarContent as e, NavbarMenuToggle as y, NavbarBrand as i, NavbarItem as v, Link as x, NavbarMenu as A, NavbarMenuItem as w } from "@nextui-org/react";
const M = C(
  ({
    // Content
    brand: s,
    profile: l,
    navigationItems: j = [],
    menuItems: h = [],
    // Props
    contentProps: p,
    menuProps: N,
    // Callback
    onItemPress: n,
    // NextUI props
    className: b,
    classNames: u,
    isMenuOpen: o,
    onMenuOpenChange: t,
    ...f
  }, g) => {
    const c = (r) => {
      var d;
      (d = r.onPress) == null || d.call(r), n == null || n(r);
    };
    return /* @__PURE__ */ a.jsxs(
      k,
      {
        ref: g,
        className: b,
        classNames: {
          base: "bg-background",
          wrapper: "max-w-full",
          ...u
        },
        isMenuOpen: o,
        onMenuOpenChange: t,
        ...f,
        children: [
          /* @__PURE__ */ a.jsxs(e, { className: "md:hidden", children: [
            /* @__PURE__ */ a.jsx(
              y,
              {
                "aria-label": o ? "Close menu" : "Open menu"
              }
            ),
            s && /* @__PURE__ */ a.jsx(i, { children: s })
          ] }),
          /* @__PURE__ */ a.jsxs(e, { className: "hidden md:flex", children: [
            s && /* @__PURE__ */ a.jsx(i, { children: s }),
            j.map((r) => /* @__PURE__ */ a.jsx(v, { isActive: r.isActive, children: /* @__PURE__ */ a.jsxs(
              x,
              {
                color: r.linkColor || (r.isActive ? "primary" : "foreground"),
                "aria-current": r.isActive ? "page" : void 0,
                onPress: () => c(r),
                children: [
                  r.startContent,
                  r.label,
                  r.endContent
                ]
              }
            ) }, r.key))
          ] }),
          /* @__PURE__ */ a.jsx(e, { justify: "end", ...p, children: l && /* @__PURE__ */ a.jsx(v, { children: l }) }),
          /* @__PURE__ */ a.jsx(A, { ...N, children: h.map((r) => /* @__PURE__ */ a.jsx(w, { children: /* @__PURE__ */ a.jsxs(
            x,
            {
              color: r.linkColor || (r.isActive ? "primary" : "foreground"),
              "aria-current": r.isActive ? "page" : void 0,
              onPress: () => c(r),
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
M.displayName = "Navbar";
export {
  M as Navbar
};
