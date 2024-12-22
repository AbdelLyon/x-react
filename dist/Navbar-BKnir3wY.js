import { j as d } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as N } from "react";
import { Navbar as R, NavbarContent as a, NavbarMenuToggle as B, NavbarBrand as b, NavbarItem as i, Link as u, NavbarMenu as D, NavbarMenuItem as E } from "@nextui-org/react";
import { cn as h } from "./utils/x-react.es.js";
import { u as Q } from "./useMediaQuery-A9Oq9utn.js";
const T = N(
  ({
    appName: n,
    appLogo: x,
    profile: j,
    navigationItems: l = [],
    menuItems: y = [],
    contentProps: c,
    menuProps: p,
    onItemClick: e,
    className: g,
    classNames: t,
    isMenuOpen: v,
    onMenuOpenChange: o,
    ...w
  }, P) => {
    const s = Q("(min-width: 768px)"), A = (r) => {
      var f;
      (f = r.onPress) == null || f.call(r), e == null || e(r), o == null || o(!1);
    };
    return /* @__PURE__ */ d.jsxs(
      R,
      {
        ref: P,
        className: g,
        classNames: {
          base: "bg-background",
          wrapper: "max-w-full",
          ...t
        },
        isMenuOpen: v,
        onMenuOpenChange: o,
        ...w,
        children: [
          !s && /* @__PURE__ */ d.jsxs(a, { children: [
            /* @__PURE__ */ d.jsx(
              B,
              {
                "aria-label": v ? "Close menu" : "Open menu"
              }
            ),
            n && /* @__PURE__ */ d.jsx(b, { children: n })
          ] }),
          /* @__PURE__ */ d.jsxs(a, { justify: "start", children: [
            n && /* @__PURE__ */ d.jsx(b, { children: n }),
            x && /* @__PURE__ */ d.jsx(b, { children: x })
          ] }),
          /* @__PURE__ */ d.jsxs(a, { justify: "end", ...c, children: [
            s && l.map((r) => /* @__PURE__ */ d.jsx(i, { children: /* @__PURE__ */ d.jsxs(
              u,
              {
                className: h(
                  "p-2 hover:bg-content1 rounded-md text-foreground",
                  {
                    "border-l-2 border-primary bg-content1 text-primary": r.isActive
                  },
                  t == null ? void 0 : t.item
                ),
                onPress: () => A(r),
                children: [
                  r.startContent,
                  r.label,
                  r.endContent
                ]
              }
            ) }, r.key)),
            j && /* @__PURE__ */ d.jsx(i, { children: j })
          ] }),
          !s && /* @__PURE__ */ d.jsx(D, { ...p, children: y.map((r) => /* @__PURE__ */ d.jsx(E, { children: /* @__PURE__ */ d.jsxs(
            u,
            {
              className: h(
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
