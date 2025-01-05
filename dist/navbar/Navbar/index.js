import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as C } from "react";
import { Navbar as P, NavbarContent as s, NavbarMenuToggle as A, NavbarItem as t, Link as m, NavbarMenu as I, NavbarMenuItem as M } from "@nextui-org/react";
import { cn as f } from "../../utils/index.js";
import { useResponsive as R } from "../../hooks/useResponsive/index.js";
const T = C(
  ({
    appName: a,
    appLogo: o,
    profile: d,
    navigationItems: v = [],
    menuItems: p = [],
    contentProps: x,
    menuProps: y,
    onItemClick: b,
    className: N,
    classNames: l,
    isMenuOpen: c,
    onMenuOpenChange: i,
    ...g
  }, k) => {
    const { isDesktop: u, isMobile: h, isTablet: w } = R(), j = (r) => {
      r.onPress?.(), b?.(r), i?.(!1);
    };
    return /* @__PURE__ */ n(
      P,
      {
        ref: k,
        className: N,
        classNames: {
          base: "bg-white dark:bg-background",
          wrapper: "max-w-full",
          ...l
        },
        isMenuOpen: c,
        onMenuOpenChange: i,
        ...g,
        children: [
          h && /* @__PURE__ */ e(s, { children: /* @__PURE__ */ e(
            A,
            {
              "aria-label": c === !0 ? "Close menu" : "Open menu"
            }
          ) }),
          !h && (a !== null || o !== null) && /* @__PURE__ */ n(s, { justify: "start", children: [
            !w && a !== null && /* @__PURE__ */ e(t, { className: "w-[247px] border-r-2 border-default", children: a }),
            o !== null && /* @__PURE__ */ e(t, { children: o })
          ] }),
          /* @__PURE__ */ n(s, { justify: "end", ...x, children: [
            u && v.map((r) => /* @__PURE__ */ e(t, { children: /* @__PURE__ */ n(
              m,
              {
                className: f(
                  "p-2 hover:bg-content1 rounded-md text-foreground",
                  {
                    "border-l-2 border-primary bg-content1 text-primary": r.isActive
                  },
                  l?.item
                ),
                onPress: () => j(r),
                children: [
                  r.startContent,
                  r.label,
                  r.endContent
                ]
              }
            ) }, r.key)),
            d !== null && /* @__PURE__ */ e(t, { children: d })
          ] }),
          !u && /* @__PURE__ */ e(I, { ...y, children: p.map((r) => /* @__PURE__ */ e(M, { children: /* @__PURE__ */ n(
            m,
            {
              className: f(
                "flex items-center gap-3 p-3 text-foreground hover:bg-content1 rounded-md cursor-pointer",
                {
                  "border-l-2 border-primary bg-content1 text-primary": r.isActive
                },
                l?.item
              ),
              onPress: () => b?.(r),
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
  T as Navbar
};
//# sourceMappingURL=index.js.map
