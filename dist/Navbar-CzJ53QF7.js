import { j as t } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as P } from "react";
import { Navbar as A, NavbarContent as n, NavbarMenuToggle as R, NavbarBrand as p, NavbarItem as v, Link as f, NavbarMenu as B, NavbarMenuItem as D } from "@nextui-org/react";
import { cn as u } from "./utils/x-react.es.js";
import { u as E } from "./useMediaQuery-A9Oq9utn.js";
const L = P(
  ({
    brand: o,
    profile: x,
    navigationItems: i = [],
    menuItems: h = [],
    contentProps: l,
    menuProps: y,
    onItemClick: e,
    className: c,
    classNames: d,
    isMenuOpen: b,
    onMenuOpenChange: a,
    ...g
  }, N) => {
    const s = E("(min-width: 768px)"), w = (r) => {
      var j;
      (j = r.onPress) == null || j.call(r), e == null || e(r), a == null || a(!1);
    };
    return /* @__PURE__ */ t.jsxs(
      A,
      {
        ref: N,
        className: c,
        classNames: {
          base: "bg-background",
          wrapper: "max-w-full",
          ...d
        },
        isMenuOpen: b,
        onMenuOpenChange: a,
        ...g,
        children: [
          !s && /* @__PURE__ */ t.jsxs(n, { children: [
            /* @__PURE__ */ t.jsx(
              R,
              {
                "aria-label": b ? "Close menu" : "Open menu"
              }
            ),
            o && /* @__PURE__ */ t.jsx(p, { children: o })
          ] }),
          /* @__PURE__ */ t.jsx(n, { justify: "start", children: o && /* @__PURE__ */ t.jsx(p, { children: o }) }),
          /* @__PURE__ */ t.jsxs(n, { justify: "end", ...l, children: [
            s && i.map((r) => /* @__PURE__ */ t.jsx(v, { children: /* @__PURE__ */ t.jsxs(
              f,
              {
                className: u(
                  "p-2 hover:bg-content1 rounded-md text-foreground",
                  {
                    "border-l-2 border-primary bg-content1 text-primary": r.isActive
                  },
                  d == null ? void 0 : d.item
                ),
                onPress: () => w(r),
                children: [
                  r.startContent,
                  r.label,
                  r.endContent
                ]
              }
            ) }, r.key)),
            x && /* @__PURE__ */ t.jsx(v, { children: x })
          ] }),
          !s && /* @__PURE__ */ t.jsx(B, { ...y, children: h.map((r) => /* @__PURE__ */ t.jsx(D, { children: /* @__PURE__ */ t.jsxs(
            f,
            {
              className: u(
                "flex items-center gap-3 p-3 text-foreground hover:bg-content1 rounded-md cursor-pointer",
                {
                  "border-l-2 border-primary bg-content1 text-primary": r.isActive
                },
                d == null ? void 0 : d.item
              ),
              onPress: () => e == null ? void 0 : e(r),
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
