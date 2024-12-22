import { j as e } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as A } from "react";
import { Navbar as T, NavbarContent as a, NavbarMenuToggle as D, NavbarItem as s, Link as l, NavbarMenu as E, NavbarMenuItem as $ } from "@nextui-org/react";
import { cn as f } from "./utils/x-react.es.js";
import "@tanstack/react-query";
import "next-themes";
import { a as q } from "./useResponsive-Bo4ImEVM.js";
const z = A(
  ({
    appName: b,
    appLogo: n,
    profile: x,
    navigationItems: h = [],
    menuItems: u = [],
    contentProps: y,
    menuProps: c,
    onItemClick: d,
    className: w,
    classNames: t,
    isMenuOpen: i,
    onMenuOpenChange: o,
    ...g
  }, N) => {
    const { isDesktop: j, isMobile: p, isTablet: P } = q(), R = (r) => {
      var v;
      (v = r.onPress) == null || v.call(r), d == null || d(r), o == null || o(!1);
    };
    return /* @__PURE__ */ e.jsxs(
      T,
      {
        ref: N,
        className: w,
        classNames: {
          base: "bg-white",
          wrapper: "max-w-full",
          ...t
        },
        isMenuOpen: i,
        onMenuOpenChange: o,
        ...g,
        children: [
          p && /* @__PURE__ */ e.jsx(a, { children: /* @__PURE__ */ e.jsx(
            D,
            {
              "aria-label": i ? "Close menu" : "Open menu"
            }
          ) }),
          !p && (b || n) && /* @__PURE__ */ e.jsxs(a, { justify: "start", children: [
            !P && /* @__PURE__ */ e.jsx(s, { className: "w-[247px] border-r-2 border-divider", children: b }),
            /* @__PURE__ */ e.jsx(s, { children: n })
          ] }),
          /* @__PURE__ */ e.jsxs(a, { justify: "end", ...y, children: [
            j && h.map((r) => /* @__PURE__ */ e.jsx(s, { children: /* @__PURE__ */ e.jsxs(
              l,
              {
                className: f(
                  "p-2 hover:bg-content1 rounded-md text-foreground",
                  {
                    "border-l-2 border-primary bg-content1 text-primary": r.isActive
                  },
                  t == null ? void 0 : t.item
                ),
                onPress: () => R(r),
                children: [
                  r.startContent,
                  r.label,
                  r.endContent
                ]
              }
            ) }, r.key)),
            x && /* @__PURE__ */ e.jsx(s, { children: x })
          ] }),
          !j && /* @__PURE__ */ e.jsx(E, { ...c, children: u.map((r) => /* @__PURE__ */ e.jsx($, { children: /* @__PURE__ */ e.jsxs(
            l,
            {
              className: f(
                "flex items-center gap-3 p-3 text-foreground hover:bg-content1 rounded-md cursor-pointer",
                {
                  "border-l-2 border-primary bg-content1 text-primary": r.isActive
                },
                t == null ? void 0 : t.item
              ),
              onPress: () => d == null ? void 0 : d(r),
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
z.displayName = "Navbar";
export {
  z as N
};
