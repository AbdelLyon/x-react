import { j as d } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as A } from "react";
import { Navbar as N, NavbarContent as a, NavbarMenuToggle as R, NavbarBrand as B, NavbarItem as b, Link as v, NavbarMenu as D, NavbarMenuItem as E } from "@nextui-org/react";
import { cn as f } from "./utils/x-react.es.js";
import { u as L } from "./useMediaQuery-A9Oq9utn.js";
const Q = A(
  ({
    appName: e,
    appLogo: l,
    profile: x,
    navigationItems: u = [],
    menuItems: h = [],
    contentProps: c,
    menuProps: y,
    onItemClick: t,
    className: p,
    classNames: o,
    isMenuOpen: j,
    onMenuOpenChange: s,
    ...g
  }, w) => {
    const n = L("(min-width: 768px)"), P = (r) => {
      var i;
      (i = r.onPress) == null || i.call(r), t == null || t(r), s == null || s(!1);
    };
    return /* @__PURE__ */ d.jsxs(
      N,
      {
        ref: w,
        className: p,
        classNames: {
          base: "bg-background",
          wrapper: "max-w-full",
          ...o
        },
        isMenuOpen: j,
        onMenuOpenChange: s,
        ...g,
        children: [
          !n && /* @__PURE__ */ d.jsxs(a, { children: [
            /* @__PURE__ */ d.jsx(
              R,
              {
                "aria-label": j ? "Close menu" : "Open menu"
              }
            ),
            e && /* @__PURE__ */ d.jsx(B, { children: e })
          ] }),
          n && (e || l) && /* @__PURE__ */ d.jsxs(a, { justify: "start", children: [
            /* @__PURE__ */ d.jsx(b, { className: "w-[245px] border-r-2 border-divider", children: e }),
            /* @__PURE__ */ d.jsx(b, { children: e })
          ] }),
          /* @__PURE__ */ d.jsxs(a, { justify: "end", ...c, children: [
            n && u.map((r) => /* @__PURE__ */ d.jsx(b, { children: /* @__PURE__ */ d.jsxs(
              v,
              {
                className: f(
                  "p-2 hover:bg-content1 rounded-md text-foreground",
                  {
                    "border-l-2 border-primary bg-content1 text-primary": r.isActive
                  },
                  o == null ? void 0 : o.item
                ),
                onPress: () => P(r),
                children: [
                  r.startContent,
                  r.label,
                  r.endContent
                ]
              }
            ) }, r.key)),
            x && /* @__PURE__ */ d.jsx(b, { children: x })
          ] }),
          !n && /* @__PURE__ */ d.jsx(D, { ...y, children: h.map((r) => /* @__PURE__ */ d.jsx(E, { children: /* @__PURE__ */ d.jsxs(
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
Q.displayName = "Navbar";
export {
  Q as N
};
