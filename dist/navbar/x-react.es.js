/* empty css                */
import { j as a } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as A } from "react";
import { Navbar as g, NavbarContent as c, NavbarMenuToggle as k, NavbarBrand as v, NavbarItem as x, Link as b, NavbarMenu as m, NavbarMenuItem as w } from "@nextui-org/react";
import { cn as C } from "../utils/x-react.es.js";
const R = A(
  ({
    // Content
    brand: s,
    profile: e,
    navigationItems: t = [],
    menuItems: j = [],
    // Props
    contentProps: N,
    menuProps: f,
    // Callback
    onItemPress: d,
    // NextUI props
    className: p,
    classNames: h,
    isMenuOpen: o,
    onMenuOpenChange: l,
    ...u
  }, y) => {
    const i = (r) => {
      var n;
      (n = r.onPress) == null || n.call(r), d == null || d(r), l == null || l(!1);
    };
    return /* @__PURE__ */ a.jsxs(
      g,
      {
        ref: y,
        className: p,
        classNames: {
          base: "bg-background",
          wrapper: "max-w-full",
          ...h
        },
        isMenuOpen: o,
        onMenuOpenChange: l,
        ...u,
        children: [
          /* @__PURE__ */ a.jsxs(c, { className: "md:hidden", children: [
            /* @__PURE__ */ a.jsx(
              k,
              {
                "aria-label": o ? "Close menu" : "Open menu"
              }
            ),
            s && /* @__PURE__ */ a.jsx(v, { children: s })
          ] }),
          /* @__PURE__ */ a.jsxs(c, { className: "hidden md:flex", children: [
            s && /* @__PURE__ */ a.jsx(v, { children: s }),
            t.map((r) => /* @__PURE__ */ a.jsx(x, { isActive: r.isActive, children: /* @__PURE__ */ a.jsxs(
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
          /* @__PURE__ */ a.jsx(c, { justify: "end", ...N, children: e && /* @__PURE__ */ a.jsx(x, { children: e }) }),
          /* @__PURE__ */ a.jsx(m, { ...f, children: j.map((r) => /* @__PURE__ */ a.jsx(
            w,
            {
              className: C("p-2 hover:bg-default rounded-md", {
                "border-l border-primary bg-default": r.isActive
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
