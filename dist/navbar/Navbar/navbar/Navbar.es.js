import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as T } from "react";
import { Navbar as D, NavbarContent as u, NavbarMenuToggle as $, NavbarItem as b, Link as c, NavbarMenu as q, NavbarMenuItem as z } from "@nextui-org/react";
import { cn as x } from "../../../utils/utils.es.js";
import { useResponsive as B } from "../../../hooks/useResponsive/hooks/useResponsive.es.js";
const E = T(
  ({
    appName: l,
    appLogo: a,
    profile: f,
    navigationItems: y = [],
    menuItems: p = [],
    contentProps: g,
    menuProps: w,
    onItemClick: t,
    className: j,
    classNames: d,
    isMenuOpen: v,
    onMenuOpenChange: o,
    ...P
  }, A) => {
    const { isDesktop: i, isMobile: s, isTablet: N } = B(), R = (r) => {
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
        isMenuOpen: v,
        onMenuOpenChange: o,
        ...P,
        children: [
          s && /* @__PURE__ */ e(u, { children: /* @__PURE__ */ e(
            $,
            {
              "aria-label": v === !0 ? "Close menu" : "Open menu"
            }
          ) }),
          !s && (l !== null || a !== null) && /* @__PURE__ */ n(u, { justify: "start", children: [
            !N && l !== null && /* @__PURE__ */ e(b, { className: "w-[247px] border-r-2 border-default", children: l }),
            a !== null && /* @__PURE__ */ e(b, { children: a })
          ] }),
          /* @__PURE__ */ n(u, { justify: "end", ...g, children: [
            i && y.map((r) => /* @__PURE__ */ e(b, { children: /* @__PURE__ */ n(
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
          !i && /* @__PURE__ */ e(q, { ...w, children: p.map((r) => /* @__PURE__ */ e(z, { children: /* @__PURE__ */ n(
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
