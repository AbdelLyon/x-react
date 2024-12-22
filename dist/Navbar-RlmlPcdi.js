import { j as d } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as N } from "react";
import { Navbar as A, NavbarContent as b, NavbarMenuToggle as R, NavbarBrand as B, NavbarItem as a, Link as v, NavbarMenu as D, NavbarMenuItem as E } from "@nextui-org/react";
import { cn as l } from "./utils/x-react.es.js";
import { u as L } from "./useMediaQuery-A9Oq9utn.js";
const Q = N(
  ({
    appName: s,
    appLogo: f,
    profile: x,
    navigationItems: u = [],
    menuItems: c = [],
    contentProps: h,
    menuProps: y,
    onItemClick: o,
    className: p,
    classNames: e,
    isMenuOpen: j,
    onMenuOpenChange: t,
    ...g
  }, w) => {
    const n = L("(min-width: 768px)"), P = (r) => {
      var i;
      (i = r.onPress) == null || i.call(r), o == null || o(r), t == null || t(!1);
    };
    return /* @__PURE__ */ d.jsxs(
      A,
      {
        ref: w,
        className: p,
        classNames: {
          base: "bg-background",
          wrapper: "max-w-full",
          ...e
        },
        isMenuOpen: j,
        onMenuOpenChange: t,
        ...g,
        children: [
          !n && /* @__PURE__ */ d.jsxs(b, { children: [
            /* @__PURE__ */ d.jsx(
              R,
              {
                "aria-label": j ? "Close menu" : "Open menu"
              }
            ),
            s && /* @__PURE__ */ d.jsx(B, { children: s })
          ] }),
          n && (s || f) && /* @__PURE__ */ d.jsxs(b, { justify: "start", className: "gap-0", children: [
            /* @__PURE__ */ d.jsx(a, { className: "w-[250px] border-r-2 border-divider", children: s }),
            /* @__PURE__ */ d.jsx(a, { children: s })
          ] }),
          /* @__PURE__ */ d.jsxs(b, { justify: "end", ...h, children: [
            n && u.map((r) => /* @__PURE__ */ d.jsx(a, { children: /* @__PURE__ */ d.jsxs(
              v,
              {
                className: l(
                  "p-2 hover:bg-content1 rounded-md text-foreground",
                  {
                    "border-l-2 border-primary bg-content1 text-primary": r.isActive
                  },
                  e == null ? void 0 : e.item
                ),
                onPress: () => P(r),
                children: [
                  r.startContent,
                  r.label,
                  r.endContent
                ]
              }
            ) }, r.key)),
            x && /* @__PURE__ */ d.jsx(a, { children: x })
          ] }),
          !n && /* @__PURE__ */ d.jsx(D, { ...y, children: c.map((r) => /* @__PURE__ */ d.jsx(E, { children: /* @__PURE__ */ d.jsxs(
            v,
            {
              className: l(
                "flex items-center gap-3 p-3 text-foreground hover:bg-content1 rounded-md cursor-pointer",
                {
                  "border-l-2 border-primary bg-content1 text-primary": r.isActive
                },
                e == null ? void 0 : e.item
              ),
              onPress: () => o == null ? void 0 : o(r),
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
