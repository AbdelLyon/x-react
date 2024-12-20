/* empty css                */
import { j as a } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as A } from "react";
import { Navbar as k, NavbarContent as d, NavbarMenuToggle as m, NavbarBrand as v, NavbarItem as x, Link as b, NavbarMenu as g, NavbarMenuItem as w } from "@nextui-org/react";
import { cn as C } from "../utils/x-react.es.js";
const R = A(
  ({
    // Content
    brand: s,
    profile: o,
    navigationItems: j = [],
    menuItems: t = [],
    // Props
    contentProps: N,
    menuProps: f,
    // Callback
    onItemPress: c,
    // NextUI props
    className: p,
    classNames: h,
    isMenuOpen: e,
    onMenuOpenChange: l,
    ...u
  }, y) => {
    const i = (r) => {
      var n;
      (n = r.onPress) == null || n.call(r), c == null || c(r), l == null || l(!1);
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
          /* @__PURE__ */ a.jsxs(d, { className: "md:hidden", children: [
            /* @__PURE__ */ a.jsx(
              m,
              {
                "aria-label": e ? "Close menu" : "Open menu"
              }
            ),
            s && /* @__PURE__ */ a.jsx(v, { children: s })
          ] }),
          /* @__PURE__ */ a.jsxs(d, { className: "hidden md:flex", children: [
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
          /* @__PURE__ */ a.jsx(d, { justify: "end", ...N, children: o && /* @__PURE__ */ a.jsx(x, { children: o }) }),
          /* @__PURE__ */ a.jsx(g, { ...f, children: t.map((r) => /* @__PURE__ */ a.jsx(
            w,
            {
              className: C("py-2 hover:bg-default-100 rounded-md", {
                "border-l border-primary": r.isActive
              }),
              children: /* @__PURE__ */ a.jsxs(
                b,
                {
                  className: "flex items-center gap-2",
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
