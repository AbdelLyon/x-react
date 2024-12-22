import { j as t } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as A } from "react";
import { Navbar as R, NavbarContent as a, NavbarMenuToggle as B, NavbarBrand as u, NavbarItem as v, Link as i, NavbarMenu as D, NavbarMenuItem as E } from "@nextui-org/react";
import { cn as l } from "./utils/x-react.es.js";
import { u as Q } from "./useMediaQuery-A9Oq9utn.js";
const T = A(
  ({
    appName: s,
    appLogo: b,
    profile: x,
    navigationItems: y = [],
    menuItems: h = [],
    contentProps: c,
    menuProps: p,
    onItemClick: e,
    className: w,
    classNames: d,
    isMenuOpen: j,
    onMenuOpenChange: n,
    ...g
  }, P) => {
    const o = Q("(min-width: 768px)"), N = (r) => {
      var f;
      (f = r.onPress) == null || f.call(r), e == null || e(r), n == null || n(!1);
    };
    return /* @__PURE__ */ t.jsxs(
      R,
      {
        ref: P,
        className: w,
        classNames: {
          base: "bg-background",
          wrapper: "max-w-full",
          ...d
        },
        isMenuOpen: j,
        onMenuOpenChange: n,
        ...g,
        children: [
          !o && /* @__PURE__ */ t.jsxs(a, { children: [
            /* @__PURE__ */ t.jsx(
              B,
              {
                "aria-label": j ? "Close menu" : "Open menu"
              }
            ),
            s && /* @__PURE__ */ t.jsx(u, { children: s })
          ] }),
          o && (s || b) && /* @__PURE__ */ t.jsx(
            a,
            {
              justify: "start",
              className: "w-[270px] flex justify-between",
              children: /* @__PURE__ */ t.jsxs(u, { children: [
                s,
                " ",
                b
              ] })
            }
          ),
          /* @__PURE__ */ t.jsxs(a, { justify: "end", ...c, children: [
            o && y.map((r) => /* @__PURE__ */ t.jsx(v, { children: /* @__PURE__ */ t.jsxs(
              i,
              {
                className: l(
                  "p-2 hover:bg-content1 rounded-md text-foreground",
                  {
                    "border-l-2 border-primary bg-content1 text-primary": r.isActive
                  },
                  d == null ? void 0 : d.item
                ),
                onPress: () => N(r),
                children: [
                  r.startContent,
                  r.label,
                  r.endContent
                ]
              }
            ) }, r.key)),
            x && /* @__PURE__ */ t.jsx(v, { children: x })
          ] }),
          !o && /* @__PURE__ */ t.jsx(D, { ...p, children: h.map((r) => /* @__PURE__ */ t.jsx(E, { children: /* @__PURE__ */ t.jsxs(
            i,
            {
              className: l(
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
T.displayName = "Navbar";
export {
  T as N
};
