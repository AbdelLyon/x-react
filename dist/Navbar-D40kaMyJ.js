import { j as a } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as k } from "react";
import { Navbar as A, NavbarContent as v, NavbarMenuToggle as g, NavbarBrand as w, NavbarItem as b, Link as f, NavbarMenu as C, NavbarMenuItem as m } from "@nextui-org/react";
import { cn as R } from "./utils/x-react.es.js";
import { u as B } from "./useMediaQuery-A9Oq9utn.js";
const D = k(
  ({
    brand: e,
    profile: c,
    navigationItems: t = [],
    menuItems: x = [],
    contentProps: p,
    menuProps: N,
    onItemPress: o,
    className: j,
    classNames: u,
    isMenuOpen: d,
    onMenuOpenChange: s,
    ...h
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
          ...u
        },
        isMenuOpen: d,
        onMenuOpenChange: s,
        ...h,
        children: [
          !l && /* @__PURE__ */ a.jsxs(v, { children: [
            /* @__PURE__ */ a.jsx(
              g,
              {
                "aria-label": d ? "Close menu" : "Open menu"
              }
            ),
            e && /* @__PURE__ */ a.jsx(w, { children: e })
          ] }),
          /* @__PURE__ */ a.jsxs(v, { justify: "end", ...p, children: [
            c && /* @__PURE__ */ a.jsx(b, { children: c }),
            l && t.map((r) => /* @__PURE__ */ a.jsx(b, { isActive: r.isActive, children: /* @__PURE__ */ a.jsxs(
              f,
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
          !l && /* @__PURE__ */ a.jsx(C, { ...N, children: x.map((r) => /* @__PURE__ */ a.jsx(
            m,
            {
              className: R("p-2 hover:bg-default rounded-md", {
                "border-l border-primary bg-default": r.isActive
              }),
              children: /* @__PURE__ */ a.jsxs(
                f,
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
