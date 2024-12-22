import { j as a } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as w } from "react";
import { Navbar as A, NavbarContent as x, NavbarMenuToggle as P, NavbarBrand as R, NavbarItem as p, Link as c, NavbarMenu as k, NavbarMenuItem as m } from "@nextui-org/react";
import { cn as j } from "./utils/x-react.es.js";
import { u as B } from "./useMediaQuery-A9Oq9utn.js";
const D = w(
  ({
    brand: n,
    profile: b,
    navigationItems: l = [],
    menuItems: u = [],
    contentProps: f,
    menuProps: h,
    onItemClick: t,
    className: y,
    classNames: o,
    isMenuOpen: s,
    onMenuOpenChange: d,
    ...g
  }, N) => {
    const e = B("(min-width: 768px)"), i = (r) => {
      var v;
      (v = r.onPress) == null || v.call(r), t == null || t(r), d == null || d(!1);
    };
    return /* @__PURE__ */ a.jsxs(
      A,
      {
        ref: N,
        className: y,
        classNames: {
          base: "bg-background",
          wrapper: "max-w-full",
          ...o
        },
        isMenuOpen: s,
        onMenuOpenChange: d,
        ...g,
        children: [
          !e && /* @__PURE__ */ a.jsxs(x, { children: [
            /* @__PURE__ */ a.jsx(
              P,
              {
                "aria-label": s ? "Close menu" : "Open menu"
              }
            ),
            n && /* @__PURE__ */ a.jsx(R, { children: n })
          ] }),
          /* @__PURE__ */ a.jsxs(x, { justify: "end", ...f, children: [
            e && l.map((r) => /* @__PURE__ */ a.jsx(
              p,
              {
                className: j(
                  "p-2 hover:bg-content1 rounded-md",
                  {
                    "border-l border-primary bg-content1 text-primary": r.isActive
                  },
                  o == null ? void 0 : o.item
                ),
                children: /* @__PURE__ */ a.jsxs(
                  c,
                  {
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
            )),
            b && /* @__PURE__ */ a.jsx(p, { children: b })
          ] }),
          !e && /* @__PURE__ */ a.jsx(k, { ...h, children: u.map((r) => /* @__PURE__ */ a.jsx(
            m,
            {
              className: j(
                "p-2 hover:bg-content1 rounded-md",
                {
                  "border-l border-primary bg-content1 text-primary": r.isActive
                },
                o == null ? void 0 : o.item
              ),
              children: /* @__PURE__ */ a.jsxs(
                c,
                {
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
D.displayName = "Navbar";
export {
  D as N
};
