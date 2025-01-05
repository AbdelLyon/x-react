import "../image/image.es.js";
import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as T } from "react";
import { Navbar as D, NavbarContent as u, NavbarMenuToggle as $, NavbarItem as b, Link as c, NavbarMenu as q, NavbarMenuItem as z } from "@nextui-org/react";
import { cn as x } from "../utils/utils.es.js";
import { a as B } from "../useResponsive-C48eFL5T.js";
const E = T(
  ({
    appName: a,
    appLogo: l,
    profile: f,
    navigationItems: y = [],
    menuItems: p = [],
    contentProps: g,
    menuProps: w,
    onItemClick: t,
    className: j,
    classNames: d,
    isMenuOpen: i,
    onMenuOpenChange: o,
    ...P
  }, A) => {
    const { isDesktop: s, isMobile: v, isTablet: N } = B(), R = (r) => {
      var h;
      (h = r.onPress) == null || h.call(r), t == null || t(r), o == null || o(!1);
    };
    return /* @__PURE__ */ n(
      D,
      {
        ref: A,
        className: j,
        classNames: {
          base: "bg-white dark:bg-background",
          wrapper: "max-w-full",
          ...d
        },
        isMenuOpen: i,
        onMenuOpenChange: o,
        ...P,
        children: [
          v && /* @__PURE__ */ e(u, { children: /* @__PURE__ */ e(
            $,
            {
              "aria-label": i === !0 ? "Close menu" : "Open menu"
            }
          ) }),
          !v && (a !== null || l !== null) && /* @__PURE__ */ n(u, { justify: "start", children: [
            !N && a !== null && /* @__PURE__ */ e(b, { className: "w-[247px] border-r-2 border-default", children: a }),
            l !== null && /* @__PURE__ */ e(b, { children: l })
          ] }),
          /* @__PURE__ */ n(u, { justify: "end", ...g, children: [
            s && y.map((r) => /* @__PURE__ */ e(b, { children: /* @__PURE__ */ n(
              c,
              {
                className: x(
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
            f !== null && /* @__PURE__ */ e(b, { children: f })
          ] }),
          !s && /* @__PURE__ */ e(q, { ...w, children: p.map((r) => /* @__PURE__ */ e(z, { children: /* @__PURE__ */ n(
            c,
            {
              className: x(
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
E.displayName = "Navbar";
export {
  E as Navbar
};
