import { j as o } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as w } from "react";
import { Navbar as A, NavbarContent as v, NavbarMenuToggle as P, NavbarBrand as k, NavbarItem as p, Link as c, NavbarMenu as R, NavbarMenuItem as m } from "@nextui-org/react";
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
    onItemClick: d,
    className: y,
    classNames: t,
    isMenuOpen: s,
    onMenuOpenChange: a,
    ...g
  }, N) => {
    const e = B("(min-width: 768px)"), i = (r) => {
      var x;
      (x = r.onPress) == null || x.call(r), d == null || d(r), a == null || a(!1);
    };
    return /* @__PURE__ */ o.jsxs(
      A,
      {
        ref: N,
        className: y,
        classNames: {
          base: "bg-background",
          wrapper: "max-w-full",
          ...t
        },
        isMenuOpen: s,
        onMenuOpenChange: a,
        ...g,
        children: [
          !e && /* @__PURE__ */ o.jsxs(v, { children: [
            /* @__PURE__ */ o.jsx(
              P,
              {
                "aria-label": s ? "Close menu" : "Open menu"
              }
            ),
            n && /* @__PURE__ */ o.jsx(k, { children: n })
          ] }),
          /* @__PURE__ */ o.jsxs(v, { justify: "end", ...f, children: [
            e && l.map((r) => /* @__PURE__ */ o.jsx(p, { children: /* @__PURE__ */ o.jsxs(
              c,
              {
                "aria-current": r.isActive ? "page" : void 0,
                className: j(
                  "p-2 hover:bg-content1 rounded-md text-foreground",
                  {
                    "border-l border-primary bg-content1 text-primary": r.isActive
                  },
                  t == null ? void 0 : t.item
                ),
                onPress: () => i(r),
                children: [
                  r.startContent,
                  r.label,
                  r.endContent
                ]
              }
            ) }, r.key)),
            b && /* @__PURE__ */ o.jsx(p, { children: b })
          ] }),
          !e && /* @__PURE__ */ o.jsx(R, { ...h, children: u.map((r) => /* @__PURE__ */ o.jsx(m, { children: /* @__PURE__ */ o.jsxs(
            c,
            {
              "aria-current": r.isActive ? "page" : void 0,
              onClick: () => i(r),
              className: j(
                "p-2 hover:bg-content1 text-foreground rounded-md cursor-pointer",
                {
                  "border-l border-primary bg-content1 text-primary": r.isActive
                },
                t == null ? void 0 : t.item
              ),
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
D.displayName = "Navbar";
export {
  D as N
};
