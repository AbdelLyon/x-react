import { j as e } from "./jsx-runtime-Bq5baZvQ.js";
import { forwardRef as A } from "react";
import { Navbar as T, NavbarContent as a, NavbarMenuToggle as D, NavbarItem as n, Link as f, NavbarMenu as E, NavbarMenuItem as $ } from "@nextui-org/react";
import { cn as v } from "./utils/x-react.es.js";
import "next-themes";
import { u as q } from "./useResponsive-C59ustr5.js";
const z = A(
  ({
    appName: o,
    appLogo: b,
    profile: l,
    navigationItems: h = [],
    menuItems: c = [],
    contentProps: p,
    menuProps: y,
    onItemClick: d,
    className: g,
    classNames: t,
    isMenuOpen: x,
    onMenuOpenChange: s,
    ...w
  }, P) => {
    const { isDesktop: u, isMobile: j, isTablet: N } = q(), R = (r) => {
      var i;
      (i = r.onPress) == null || i.call(r), d == null || d(r), s == null || s(!1);
    };
    return /* @__PURE__ */ e.jsxs(
      T,
      {
        ref: P,
        className: g,
        classNames: {
          base: "bg-white dark:bg-background",
          wrapper: "max-w-full",
          ...t
        },
        isMenuOpen: x,
        onMenuOpenChange: s,
        ...w,
        children: [
          j && /* @__PURE__ */ e.jsx(a, { children: /* @__PURE__ */ e.jsx(
            D,
            {
              "aria-label": x === !0 ? "Close menu" : "Open menu"
            }
          ) }),
          !j && (o !== null || b !== null) && /* @__PURE__ */ e.jsxs(a, { justify: "start", children: [
            !N && o !== null && /* @__PURE__ */ e.jsx(n, { className: "w-[247px] border-r-2 border-default", children: o }),
            b !== null && /* @__PURE__ */ e.jsx(n, { children: b })
          ] }),
          /* @__PURE__ */ e.jsxs(a, { justify: "end", ...p, children: [
            u && h.map((r) => /* @__PURE__ */ e.jsx(n, { children: /* @__PURE__ */ e.jsxs(
              f,
              {
                className: v(
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
            l !== null && /* @__PURE__ */ e.jsx(n, { children: l })
          ] }),
          !u && /* @__PURE__ */ e.jsx(E, { ...y, children: c.map((r) => /* @__PURE__ */ e.jsx($, { children: /* @__PURE__ */ e.jsxs(
            f,
            {
              className: v(
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
