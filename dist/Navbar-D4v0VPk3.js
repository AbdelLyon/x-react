import { j as a } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as A } from "react";
import { Navbar as g, NavbarContent as c, NavbarMenuToggle as w, NavbarBrand as x, NavbarItem as f, Link as t, NavbarMenu as C, NavbarMenuItem as m } from "@nextui-org/react";
import { cn as R } from "./utils/x-react.es.js";
import { u as B } from "./useMediaQuery-A9Oq9utn.js";
const D = A(
  ({
    brand: s,
    profile: d,
    navigationItems: b = [],
    menuItems: j = [],
    contentProps: p,
    menuProps: N,
    onItemPress: o,
    className: h,
    classNames: u,
    isMenuOpen: i,
    onMenuOpenChange: l,
    ...y
  }, k) => {
    const e = B("(min-width: 768px)"), n = (r) => {
      var v;
      (v = r.onPress) == null || v.call(r), o == null || o(r), l == null || l(!1);
    };
    return /* @__PURE__ */ a.jsxs(
      g,
      {
        ref: k,
        className: h,
        classNames: {
          base: "bg-background",
          wrapper: "max-w-full",
          ...u
        },
        isMenuOpen: i,
        onMenuOpenChange: l,
        ...y,
        children: [
          !e && /* @__PURE__ */ a.jsxs(c, { children: [
            /* @__PURE__ */ a.jsx(
              w,
              {
                "aria-label": i ? "Close menu" : "Open menu"
              }
            ),
            s && /* @__PURE__ */ a.jsx(x, { children: s })
          ] }),
          e && /* @__PURE__ */ a.jsxs(c, { children: [
            s && /* @__PURE__ */ a.jsx(x, { children: s }),
            b.map((r) => /* @__PURE__ */ a.jsx(f, { isActive: r.isActive, children: /* @__PURE__ */ a.jsxs(
              t,
              {
                href: r.href,
                color: r.linkColor || (r.isActive ? "primary" : "foreground"),
                "aria-current": r.isActive ? "page" : void 0,
                onPress: () => n(r),
                children: [
                  r.startContent,
                  r.label,
                  r.endContent
                ]
              }
            ) }, r.key))
          ] }),
          /* @__PURE__ */ a.jsx(c, { justify: "end", ...p, children: d && /* @__PURE__ */ a.jsx(f, { children: d }) }),
          !e && /* @__PURE__ */ a.jsx(C, { ...N, children: j.map((r) => /* @__PURE__ */ a.jsx(
            m,
            {
              className: R("p-2 hover:bg-default rounded-md", {
                "border-l border-primary bg-default": r.isActive
              }),
              children: /* @__PURE__ */ a.jsxs(
                t,
                {
                  href: r.href,
                  className: "flex items-center gap-2",
                  color: r.linkColor || (r.isActive ? "primary" : "foreground"),
                  "aria-current": r.isActive ? "page" : void 0,
                  onPress: () => n(r),
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
D.displayName = "Navbar";
export {
  D as N
};
