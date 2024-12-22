import { j as s } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as A } from "react";
import { Navbar as g, NavbarContent as i, NavbarMenuToggle as w, NavbarBrand as P, NavbarItem as v, Link as b, NavbarMenu as k, NavbarMenuItem as m } from "@nextui-org/react";
import { cn as R } from "./utils/x-react.es.js";
import { u as B } from "./useMediaQuery-A9Oq9utn.js";
const D = A(
  ({
    brand: l,
    profile: c,
    navigationItems: x = [],
    menuItems: p = [],
    contentProps: N,
    menuProps: f,
    onItemClick: o,
    className: j,
    classNames: u,
    isMenuOpen: d,
    onMenuOpenChange: a,
    ...h
  }, y) => {
    const e = B("(min-width: 768px)"), n = (r) => {
      var t;
      (t = r.onPress) == null || t.call(r), o == null || o(r), a == null || a(!1);
    };
    return /* @__PURE__ */ s.jsxs(
      g,
      {
        ref: y,
        className: j,
        classNames: {
          base: "bg-background",
          wrapper: "max-w-full",
          ...u
        },
        isMenuOpen: d,
        onMenuOpenChange: a,
        ...h,
        children: [
          !e && /* @__PURE__ */ s.jsxs(i, { children: [
            /* @__PURE__ */ s.jsx(
              w,
              {
                "aria-label": d ? "Close menu" : "Open menu"
              }
            ),
            l && /* @__PURE__ */ s.jsx(P, { children: l })
          ] }),
          /* @__PURE__ */ s.jsxs(i, { justify: "end", ...N, children: [
            e && x.map((r) => /* @__PURE__ */ s.jsx(v, { isActive: r.isActive, children: /* @__PURE__ */ s.jsxs(
              b,
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
            ) }, r.key)),
            c && /* @__PURE__ */ s.jsx(v, { children: c })
          ] }),
          !e && /* @__PURE__ */ s.jsx(k, { ...f, children: p.map((r) => /* @__PURE__ */ s.jsx(
            m,
            {
              className: R("p-2 hover:bg-content1 rounded-md", {
                "border-l border-primary bg-content1": r.isActive
              }),
              children: /* @__PURE__ */ s.jsxs(
                b,
                {
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
