import { j as d } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as N } from "react";
import { Navbar as A, NavbarContent as x, NavbarMenuToggle as R, NavbarBrand as B, NavbarItem as a, Link as v, NavbarMenu as D, NavbarMenuItem as E } from "@nextui-org/react";
import { cn as f } from "./utils/x-react.es.js";
import { u as L } from "./useMediaQuery-A9Oq9utn.js";
const Q = N(
  ({
    appName: o,
    appLogo: i,
    profile: b,
    navigationItems: u = [],
    menuItems: c = [],
    contentProps: h,
    menuProps: y,
    onItemClick: t,
    className: p,
    classNames: s,
    isMenuOpen: j,
    onMenuOpenChange: e,
    ...g
  }, w) => {
    const n = L("(min-width: 768px)"), P = (r) => {
      var l;
      (l = r.onPress) == null || l.call(r), t == null || t(r), e == null || e(!1);
    };
    return /* @__PURE__ */ d.jsxs(
      A,
      {
        ref: w,
        className: p,
        classNames: {
          base: "bg-background",
          wrapper: "max-w-full",
          ...s
        },
        isMenuOpen: j,
        onMenuOpenChange: e,
        ...g,
        children: [
          !n && /* @__PURE__ */ d.jsxs(x, { children: [
            /* @__PURE__ */ d.jsx(
              R,
              {
                "aria-label": j ? "Close menu" : "Open menu"
              }
            ),
            o && /* @__PURE__ */ d.jsx(B, { children: o })
          ] }),
          n && (o || i) && /* @__PURE__ */ d.jsxs(x, { justify: "start", className: "gap-0", children: [
            /* @__PURE__ */ d.jsx(a, { className: "w-[270px]", children: o }),
            /* @__PURE__ */ d.jsx(a, { children: o })
          ] }),
          /* @__PURE__ */ d.jsxs(x, { justify: "end", ...h, children: [
            n && u.map((r) => /* @__PURE__ */ d.jsx(a, { children: /* @__PURE__ */ d.jsxs(
              v,
              {
                className: f(
                  "p-2 hover:bg-content1 rounded-md text-foreground",
                  {
                    "border-l-2 border-primary bg-content1 text-primary": r.isActive
                  },
                  s == null ? void 0 : s.item
                ),
                onPress: () => P(r),
                children: [
                  r.startContent,
                  r.label,
                  r.endContent
                ]
              }
            ) }, r.key)),
            b && /* @__PURE__ */ d.jsx(a, { children: b })
          ] }),
          !n && /* @__PURE__ */ d.jsx(D, { ...y, children: c.map((r) => /* @__PURE__ */ d.jsx(E, { children: /* @__PURE__ */ d.jsxs(
            v,
            {
              className: f(
                "flex items-center gap-3 p-3 text-foreground hover:bg-content1 rounded-md cursor-pointer",
                {
                  "border-l-2 border-primary bg-content1 text-primary": r.isActive
                },
                s == null ? void 0 : s.item
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
Q.displayName = "Navbar";
export {
  Q as N
};
