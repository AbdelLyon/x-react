/* empty css                */
import { j as a } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as A } from "react";
import { Navbar as g, NavbarContent as e, NavbarMenuToggle as k, NavbarBrand as x, NavbarItem as t, Link as v, NavbarMenu as m, NavbarMenuItem as w } from "@nextui-org/react";
import { cn as C } from "../utils/x-react.es.js";
const R = A(
  ({
    // Content
    brand: s,
    profile: c,
    navigationItems: b = [],
    menuItems: j = [],
    // Props
    contentProps: f,
    menuProps: p,
    // Callback
    onItemPress: d,
    // NextUI props
    className: N,
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
        className: N,
        classNames: {
          base: "bg-background",
          wrapper: "max-w-full",
          ...h
        },
        isMenuOpen: o,
        onMenuOpenChange: l,
        ...u,
        children: [
          /* @__PURE__ */ a.jsxs(e, { className: "md:hidden", children: [
            /* @__PURE__ */ a.jsx(
              k,
              {
                "aria-label": o ? "Close menu" : "Open menu"
              }
            ),
            s && /* @__PURE__ */ a.jsx(x, { children: s })
          ] }),
          /* @__PURE__ */ a.jsxs(e, { className: "hidden md:flex", children: [
            s && /* @__PURE__ */ a.jsx(x, { children: s }),
            b.map((r) => /* @__PURE__ */ a.jsx(t, { isActive: r.isActive, children: /* @__PURE__ */ a.jsxs(
              v,
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
          /* @__PURE__ */ a.jsx(e, { justify: "end", ...f, children: c && /* @__PURE__ */ a.jsx(t, { children: c }) }),
          /* @__PURE__ */ a.jsx(m, { ...p, children: j.map((r) => /* @__PURE__ */ a.jsx(
            w,
            {
              className: C("p-2 hover:bg-default rounded-md", {
                "border-l border-primary bg-default": r.isActive
              }),
              children: /* @__PURE__ */ a.jsxs(
                v,
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
R.displayName = "Sidebar";
export {
  R as Sidebar
};
