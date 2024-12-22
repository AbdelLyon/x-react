import { j as d } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as w } from "react";
import { Navbar as P, NavbarContent as p, NavbarMenuToggle as A, NavbarBrand as R, NavbarItem as j, Link as v, NavbarMenu as B, NavbarMenuItem as D } from "@nextui-org/react";
import { cn as f } from "./utils/x-react.es.js";
import { u as E } from "./useMediaQuery-A9Oq9utn.js";
const L = w(
  ({
    brand: n,
    profile: b,
    navigationItems: u = [],
    menuItems: y = [],
    contentProps: h,
    menuProps: i,
    onItemClick: t,
    className: l,
    classNames: o,
    isMenuOpen: s,
    onMenuOpenChange: a,
    ...c
  }, g) => {
    const e = E("(min-width: 768px)"), N = (r) => {
      var x;
      (x = r.onPress) == null || x.call(r), t == null || t(r), a == null || a(!1);
    };
    return /* @__PURE__ */ d.jsxs(
      P,
      {
        ref: g,
        className: l,
        classNames: {
          base: "bg-background",
          wrapper: "max-w-full",
          ...o
        },
        isMenuOpen: s,
        onMenuOpenChange: a,
        ...c,
        children: [
          !e && /* @__PURE__ */ d.jsxs(p, { children: [
            /* @__PURE__ */ d.jsx(
              A,
              {
                "aria-label": s ? "Close menu" : "Open menu"
              }
            ),
            n && /* @__PURE__ */ d.jsx(R, { children: n })
          ] }),
          /* @__PURE__ */ d.jsxs(p, { justify: "end", ...h, children: [
            e && u.map((r) => /* @__PURE__ */ d.jsx(j, { children: /* @__PURE__ */ d.jsxs(
              v,
              {
                className: f(
                  "p-2 hover:bg-content1 rounded-md text-foreground",
                  {
                    "border-l-2 border-primary bg-content1 text-primary": r.isActive
                  },
                  o == null ? void 0 : o.item
                ),
                onPress: () => N(r),
                children: [
                  r.startContent,
                  r.label,
                  r.endContent
                ]
              }
            ) }, r.key)),
            b && /* @__PURE__ */ d.jsx(j, { children: b })
          ] }),
          !e && /* @__PURE__ */ d.jsx(B, { ...i, children: y.map((r) => /* @__PURE__ */ d.jsx(D, { children: /* @__PURE__ */ d.jsxs(
            v,
            {
              className: f(
                "flex items-center gap-3 p-3 text-foreground hover:bg-content1 rounded-md cursor-pointer",
                {
                  "border-l-2 border-primary bg-content1 text-primary": r.isActive
                },
                o == null ? void 0 : o.item
              ),
              onPress: () => t == null ? void 0 : t(r),
              children: [
                r.startContent,
                r.label,
                r.endContent
              ]
            },
            r.key
          ) }, r.key)) })
        ]
      }
    );
  }
);
L.displayName = "Navbar";
export {
  L as N
};
