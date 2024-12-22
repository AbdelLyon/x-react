import { j as e } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as g } from "react";
import { Navbar as A, NavbarContent as b, NavbarMenuToggle as B, NavbarBrand as D, NavbarItem as n, Link as l, NavbarMenu as E, NavbarMenuItem as T } from "@nextui-org/react";
import { cn as f } from "./utils/x-react.es.js";
import "@tanstack/react-query";
import "next-themes";
import { a as $ } from "./useResponsive-Bo4ImEVM.js";
const q = g(
  ({
    appName: x,
    appLogo: s,
    profile: i,
    navigationItems: h = [],
    menuItems: p = [],
    contentProps: c,
    menuProps: u,
    onItemClick: t,
    className: y,
    classNames: d,
    isMenuOpen: j,
    onMenuOpenChange: o,
    ...w
  }, N) => {
    const { isDesktop: a, isMobile: P } = $(), R = (r) => {
      var v;
      (v = r.onPress) == null || v.call(r), t == null || t(r), o == null || o(!1);
    };
    return /* @__PURE__ */ e.jsxs(
      A,
      {
        ref: N,
        className: y,
        classNames: {
          base: "bg-white",
          wrapper: "max-w-full",
          ...d
        },
        isMenuOpen: j,
        onMenuOpenChange: o,
        ...w,
        children: [
          P && /* @__PURE__ */ e.jsxs(b, { children: [
            /* @__PURE__ */ e.jsx(
              B,
              {
                "aria-label": j ? "Close menu" : "Open menu"
              }
            ),
            s && /* @__PURE__ */ e.jsx(D, { children: s })
          ] }),
          a && (x || s) && /* @__PURE__ */ e.jsxs(b, { justify: "start", children: [
            /* @__PURE__ */ e.jsx(n, { className: "w-[247px] border-r-2 border-divider", children: x }),
            /* @__PURE__ */ e.jsx(n, { children: s })
          ] }),
          /* @__PURE__ */ e.jsxs(b, { justify: "end", ...c, children: [
            a && h.map((r) => /* @__PURE__ */ e.jsx(n, { children: /* @__PURE__ */ e.jsxs(
              l,
              {
                className: f(
                  "p-2 hover:bg-content1 rounded-md text-foreground",
                  {
                    "border-l-2 border-primary bg-content1 text-primary": r.isActive
                  },
                  d == null ? void 0 : d.item
                ),
                onPress: () => R(r),
                children: [
                  r.startContent,
                  r.label,
                  r.endContent
                ]
              }
            ) }, r.key)),
            i && /* @__PURE__ */ e.jsx(n, { children: i })
          ] }),
          !a && /* @__PURE__ */ e.jsx(E, { ...u, children: p.map((r) => /* @__PURE__ */ e.jsx(T, { children: /* @__PURE__ */ e.jsxs(
            l,
            {
              className: f(
                "flex items-center gap-3 p-3 text-foreground hover:bg-content1 rounded-md cursor-pointer",
                {
                  "border-l-2 border-primary bg-content1 text-primary": r.isActive
                },
                d == null ? void 0 : d.item
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
