import { j as d } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as R } from "react";
import { Navbar as A, NavbarContent as a, NavbarMenuToggle as B, NavbarBrand as D, NavbarItem as n, Link as l, NavbarMenu as E, NavbarMenuItem as T } from "@nextui-org/react";
import { cn as f } from "./utils/x-react.es.js";
import "@tanstack/react-query";
import "next-themes";
import { a as $ } from "./useResponsive-Bo4ImEVM.js";
const q = R(
  ({
    appName: o,
    appLogo: x,
    profile: i,
    navigationItems: h = [],
    menuItems: p = [],
    contentProps: c,
    menuProps: u,
    onItemClick: t,
    className: y,
    classNames: e,
    isMenuOpen: j,
    onMenuOpenChange: s,
    ...w
  }, g) => {
    const { isDesktop: b, isMobile: P } = $(), N = (r) => {
      var v;
      (v = r.onPress) == null || v.call(r), t == null || t(r), s == null || s(!1);
    };
    return /* @__PURE__ */ d.jsxs(
      A,
      {
        ref: g,
        className: y,
        classNames: {
          base: "bg-white",
          wrapper: "max-w-full",
          ...e
        },
        isMenuOpen: j,
        onMenuOpenChange: s,
        ...w,
        children: [
          P && /* @__PURE__ */ d.jsxs(a, { children: [
            /* @__PURE__ */ d.jsx(
              B,
              {
                "aria-label": j ? "Close menu" : "Open menu"
              }
            ),
            o && /* @__PURE__ */ d.jsx(D, { children: o })
          ] }),
          b && (o || x) && /* @__PURE__ */ d.jsxs(a, { justify: "start", children: [
            /* @__PURE__ */ d.jsx(n, { className: "w-[247px] border-r-2 border-divider", children: o }),
            /* @__PURE__ */ d.jsx(n, { children: x })
          ] }),
          /* @__PURE__ */ d.jsxs(a, { justify: "end", ...c, children: [
            b && h.map((r) => /* @__PURE__ */ d.jsx(n, { children: /* @__PURE__ */ d.jsxs(
              l,
              {
                className: f(
                  "p-2 hover:bg-content1 rounded-md text-foreground",
                  {
                    "border-l-2 border-primary bg-content1 text-primary": r.isActive
                  },
                  e == null ? void 0 : e.item
                ),
                onPress: () => N(r),
                children: [
                  r.startContent,
                  r.label,
                  r.endContent
                ]
              }
            ) }, r.key)),
            i && /* @__PURE__ */ d.jsx(n, { children: i })
          ] }),
          !b && /* @__PURE__ */ d.jsx(E, { ...u, children: p.map((r) => /* @__PURE__ */ d.jsx(T, { children: /* @__PURE__ */ d.jsxs(
            l,
            {
              className: f(
                "flex items-center gap-3 p-3 text-foreground hover:bg-content1 rounded-md cursor-pointer",
                {
                  "border-l-2 border-primary bg-content1 text-primary": r.isActive
                },
                e == null ? void 0 : e.item
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
q.displayName = "Navbar";
export {
  q as N
};
