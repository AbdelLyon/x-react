import { j as a } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as k } from "react";
import { Navbar as A, NavbarContent as t, NavbarMenuToggle as g, NavbarBrand as w, NavbarItem as v, Link as b, NavbarMenu as C, NavbarMenuItem as m } from "@nextui-org/react";
import { cn as R } from "./utils/x-react.es.js";
import { u as B } from "./useMediaQuery-A9Oq9utn.js";
const D = k(
  ({
    brand: c,
    profile: e,
    navigationItems: x = [],
    menuItems: f = [],
    contentProps: p,
    menuProps: N,
    onItemPress: o,
    className: j,
    classNames: h,
    isMenuOpen: d,
    onMenuOpenChange: s,
    ...u
  }, y) => {
    const l = B("(min-width: 768px)"), n = (r) => {
      var i;
      (i = r.onPress) == null || i.call(r), o == null || o(r), s == null || s(!1);
    };
    return /* @__PURE__ */ a.jsxs(
      A,
      {
        ref: y,
        className: j,
        classNames: {
          base: "bg-background",
          wrapper: "max-w-full",
          ...h
        },
        isMenuOpen: d,
        onMenuOpenChange: s,
        ...u,
        children: [
          !l && /* @__PURE__ */ a.jsxs(t, { children: [
            /* @__PURE__ */ a.jsx(
              g,
              {
                "aria-label": d ? "Close menu" : "Open menu"
              }
            ),
            c && /* @__PURE__ */ a.jsx(w, { children: c })
          ] }),
          /* @__PURE__ */ a.jsxs(t, { justify: "end", ...p, children: [
            l && x.map((r) => /* @__PURE__ */ a.jsx(v, { isActive: r.isActive, children: /* @__PURE__ */ a.jsxs(
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
            e && /* @__PURE__ */ a.jsx(v, { children: e })
          ] }),
          !l && /* @__PURE__ */ a.jsx(C, { ...N, children: f.map((r) => /* @__PURE__ */ a.jsx(
            m,
            {
              className: R("p-2 hover:bg-content1 rounded-md", {
                "border-l border-primary bg-content1": r.isActive
              }),
              children: /* @__PURE__ */ a.jsxs(
                b,
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
