/* empty css                */
import { j as a } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as A } from "react";
import { Navbar as k, NavbarContent as o, NavbarMenuToggle as g, NavbarBrand as v, NavbarItem as x, Link as b, NavbarMenu as m, NavbarMenuItem as w } from "@nextui-org/react";
import { cn as C } from "../utils/x-react.es.js";
const R = A(
  ({
    // Content
    brand: s,
    profile: c,
    navigationItems: j = [],
    menuItems: t = [],
    // Props
    contentProps: N,
    menuProps: f,
    // Callback
    onItemPress: d,
    // NextUI props
    className: p,
    classNames: h,
    isMenuOpen: e,
    onMenuOpenChange: l,
    ...u
  }, y) => {
    const i = (r) => {
      var n;
      (n = r.onPress) == null || n.call(r), d == null || d(r), l == null || l(!1);
    };
    return /* @__PURE__ */ a.jsxs(
      k,
      {
        ref: y,
        className: p,
        classNames: {
          base: "bg-background",
          wrapper: "max-w-full",
          ...h
        },
        isMenuOpen: e,
        onMenuOpenChange: l,
        ...u,
        children: [
          /* @__PURE__ */ a.jsxs(o, { className: "md:hidden", children: [
            /* @__PURE__ */ a.jsx(
              g,
              {
                "aria-label": e ? "Close menu" : "Open menu"
              }
            ),
            s && /* @__PURE__ */ a.jsx(v, { children: s })
          ] }),
          /* @__PURE__ */ a.jsxs(o, { className: "hidden md:flex", children: [
            s && /* @__PURE__ */ a.jsx(v, { children: s }),
            j.map((r) => /* @__PURE__ */ a.jsx(x, { isActive: r.isActive, children: /* @__PURE__ */ a.jsxs(
              b,
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
          /* @__PURE__ */ a.jsx(o, { justify: "end", ...N, children: c && /* @__PURE__ */ a.jsx(x, { children: c }) }),
          /* @__PURE__ */ a.jsx(m, { ...f, children: t.map((r) => /* @__PURE__ */ a.jsx(
            w,
            {
              className: C(
                "py-2 hover:bg-default-100 flex items-center gap-2 rounded-md",
                {
                  "border-l border-primary": r.isActive
                }
              ),
              children: /* @__PURE__ */ a.jsxs(
                b,
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
              )
            },
            r.key
          )) })
        ]
      }
    );
  }
);
R.displayName = "Navbar";
export {
  R as Navbar
};
