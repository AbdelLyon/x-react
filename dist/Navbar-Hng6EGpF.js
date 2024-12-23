import { j as t } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as A } from "react";
import { Navbar as T, NavbarContent as a, NavbarMenuToggle as D, NavbarItem as s, Link as f, NavbarMenu as E, NavbarMenuItem as $ } from "@nextui-org/react";
import { cn as v } from "./utils/x-react.es.js";
import "@tanstack/react-query";
import "next-themes";
import { a as q } from "./useResponsive-C48eFL5T.js";
const z = A(
  ({
    appName: n,
    appLogo: b,
    profile: l,
    navigationItems: h = [],
    menuItems: p = [],
    contentProps: c,
    menuProps: y,
    onItemClick: d,
    className: g,
    classNames: e,
    isMenuOpen: x,
    onMenuOpenChange: o,
    ...w
  }, P) => {
    const { isDesktop: u, isMobile: j, isTablet: N } = q(), R = (r) => {
      var i;
      (i = r.onPress) == null || i.call(r), d == null || d(r), o == null || o(!1);
    };
    return /* @__PURE__ */ t.jsxs(
      T,
      {
        ref: P,
        className: g,
        classNames: {
          base: "bg-white dark:bg-background",
          wrapper: "max-w-full",
          ...e
        },
        isMenuOpen: x,
        onMenuOpenChange: o,
        ...w,
        children: [
          j && /* @__PURE__ */ t.jsx(a, { children: /* @__PURE__ */ t.jsx(
            D,
            {
              "aria-label": x === !0 ? "Close menu" : "Open menu"
            }
          ) }),
          !j && (n !== null || b !== null) && /* @__PURE__ */ t.jsxs(a, { justify: "start", children: [
            !N && n !== null && /* @__PURE__ */ t.jsx(s, { className: "w-[247px] border-r-2 border-default-200", children: n }),
            b !== null && /* @__PURE__ */ t.jsx(s, { children: b })
          ] }),
          /* @__PURE__ */ t.jsxs(a, { justify: "end", ...c, children: [
            u && h.map((r) => /* @__PURE__ */ t.jsx(s, { children: /* @__PURE__ */ t.jsxs(
              f,
              {
                className: v(
                  "p-2 hover:bg-content1 rounded-md text-foreground",
                  {
                    "border-l-2 border-primary bg-content1 text-primary": r.isActive
                  },
                  e == null ? void 0 : e.item
                ),
                onPress: () => R(r),
                children: [
                  r.startContent,
                  r.label,
                  r.endContent
                ]
              }
            ) }, r.key)),
            l !== null && /* @__PURE__ */ t.jsx(s, { children: l })
          ] }),
          !u && /* @__PURE__ */ t.jsx(E, { ...y, children: p.map((r) => /* @__PURE__ */ t.jsx($, { children: /* @__PURE__ */ t.jsxs(
            f,
            {
              className: v(
                "flex items-center gap-3 p-3 text-foreground hover:bg-content1 rounded-md cursor-pointer",
                {
                  "border-l-2 border-primary bg-content1 text-primary": r.isActive
                },
                e == null ? void 0 : e.item
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
