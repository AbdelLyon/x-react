import { j as d } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as A } from "react";
import { Navbar as R, NavbarContent as a, NavbarMenuToggle as B, NavbarBrand as x, NavbarItem as l, Link as u, NavbarMenu as D, NavbarMenuItem as E } from "@nextui-org/react";
import { cn as v } from "./utils/x-react.es.js";
import { u as Q } from "./useMediaQuery-A9Oq9utn.js";
const T = A(
  ({
    appName: s,
    appLogo: b,
    profile: j,
    navigationItems: h = [],
    menuItems: y = [],
    contentProps: c,
    menuProps: p,
    onItemClick: e,
    className: w,
    classNames: t,
    isMenuOpen: f,
    onMenuOpenChange: n,
    ...g
  }, P) => {
    const o = Q("(min-width: 768px)"), N = (r) => {
      var i;
      (i = r.onPress) == null || i.call(r), e == null || e(r), n == null || n(!1);
    };
    return /* @__PURE__ */ d.jsxs(
      R,
      {
        ref: P,
        className: w,
        classNames: {
          base: "bg-background",
          wrapper: "max-w-full",
          ...t
        },
        isMenuOpen: f,
        onMenuOpenChange: n,
        ...g,
        children: [
          !o && /* @__PURE__ */ d.jsxs(a, { children: [
            /* @__PURE__ */ d.jsx(
              B,
              {
                "aria-label": f ? "Close menu" : "Open menu"
              }
            ),
            s && /* @__PURE__ */ d.jsx(x, { children: s })
          ] }),
          o && /* @__PURE__ */ d.jsxs(
            a,
            {
              justify: "start",
              className: "w-[270px] flex justify-between",
              children: [
                s && /* @__PURE__ */ d.jsx(x, { children: s }),
                b && /* @__PURE__ */ d.jsx(x, { children: b })
              ]
            }
          ),
          /* @__PURE__ */ d.jsxs(a, { justify: "end", ...c, children: [
            o && h.map((r) => /* @__PURE__ */ d.jsx(l, { children: /* @__PURE__ */ d.jsxs(
              u,
              {
                className: v(
                  "p-2 hover:bg-content1 rounded-md text-foreground",
                  {
                    "border-l-2 border-primary bg-content1 text-primary": r.isActive
                  },
                  t == null ? void 0 : t.item
                ),
                onPress: () => N(r),
                children: [
                  r.startContent,
                  r.label,
                  r.endContent
                ]
              }
            ) }, r.key)),
            j && /* @__PURE__ */ d.jsx(l, { children: j })
          ] }),
          !o && /* @__PURE__ */ d.jsx(D, { ...p, children: y.map((r) => /* @__PURE__ */ d.jsx(E, { children: /* @__PURE__ */ d.jsxs(
            u,
            {
              className: v(
                "flex items-center gap-3 p-3 text-foreground hover:bg-content1 rounded-md cursor-pointer",
                {
                  "border-l-2 border-primary bg-content1 text-primary": r.isActive
                },
                t == null ? void 0 : t.item
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
