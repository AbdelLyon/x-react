/* empty css                */
import { j as e } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as R, useState as z } from "react";
import { Navbar as E, NavbarContent as u, NavbarMenuToggle as L, NavbarBrand as S, Link as l, NavbarItem as x, Button as T, NavbarMenu as $, NavbarMenuItem as q } from "@nextui-org/react";
import { cn as o } from "../utils/x-react.es.js";
const C = R(
  ({
    // Props personnalisées
    brand: t,
    navigationItems: p = [],
    mobileMenuItems: j = [],
    actions: n,
    showNavigationOnMobile: v = !1,
    // Props des sous-composants
    contentProps: h,
    brandProps: B,
    menuProps: b,
    menuItemProps: y,
    menuToggleProps: O,
    // Props de base NextUI
    className: U,
    classNames: r,
    isMenuOpen: M,
    onMenuOpenChange: d,
    ...A
  }, w) => {
    const [g, I] = z(!1), k = (i) => {
      I(i), d == null || d(i);
    };
    return /* @__PURE__ */ e.jsxs(
      E,
      {
        ref: w,
        className: U,
        classNames: r,
        isMenuOpen: M ?? g,
        onMenuOpenChange: k,
        ...A,
        children: [
          /* @__PURE__ */ e.jsx(u, { className: "sm:hidden", justify: "start", ...h, children: /* @__PURE__ */ e.jsx(
            L,
            {
              "aria-label": g ? "Close menu" : "Open menu",
              className: r == null ? void 0 : r.toggle,
              ...O
            }
          ) }),
          t && /* @__PURE__ */ e.jsx(
            u,
            {
              className: o(
                t.mobileOnly ? "sm:hidden" : "hidden sm:flex",
                r == null ? void 0 : r.content
              ),
              justify: t.mobileOnly ? "center" : "start",
              ...h,
              children: /* @__PURE__ */ e.jsxs(
                S,
                {
                  className: r == null ? void 0 : r.brand,
                  ...B,
                  ...t.props,
                  children: [
                    t.logo,
                    t.title && /* @__PURE__ */ e.jsx(
                      l,
                      {
                        href: t.link || "#",
                        className: "font-bold text-inherit",
                        children: t.title
                      }
                    )
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ e.jsx(
            u,
            {
              className: o(
                "hidden sm:flex gap-4",
                v && "flex",
                r == null ? void 0 : r.content
              ),
              justify: "center",
              ...h,
              children: p.map((i, f) => /* @__PURE__ */ e.jsx(
                x,
                {
                  isActive: i.isActive,
                  className: o(r == null ? void 0 : r.item, i.className),
                  children: /* @__PURE__ */ e.jsx(
                    l,
                    {
                      color: i.color || (i.isActive ? "primary" : "foreground"),
                      href: i.href,
                      "aria-current": i.isActive ? "page" : void 0,
                      children: i.label
                    }
                  )
                },
                f
              ))
            }
          ),
          /* @__PURE__ */ e.jsxs(u, { justify: "end", ...h, children: [
            (n == null ? void 0 : n.loginButton) && /* @__PURE__ */ e.jsx(
              x,
              {
                className: o(
                  !n.loginButton.showOnMobile && "hidden lg:flex",
                  r == null ? void 0 : r.item
                ),
                children: /* @__PURE__ */ e.jsx(
                  l,
                  {
                    href: n.loginButton.href,
                    color: n.loginButton.color,
                    className: n.loginButton.className,
                    children: n.loginButton.label
                  }
                )
              }
            ),
            (n == null ? void 0 : n.signUpButton) && /* @__PURE__ */ e.jsx(x, { children: /* @__PURE__ */ e.jsx(
              T,
              {
                as: l,
                href: n.signUpButton.href,
                color: n.signUpButton.color,
                variant: n.signUpButton.variant,
                className: n.signUpButton.className,
                children: n.signUpButton.label
              }
            ) })
          ] }),
          j.length > 0 && /* @__PURE__ */ e.jsx($, { className: r == null ? void 0 : r.menu, ...b, children: j.map((i, f) => /* @__PURE__ */ e.jsx(
            q,
            {
              className: o(r == null ? void 0 : r.menuItem, i.className),
              ...y,
              children: /* @__PURE__ */ e.jsx(
                l,
                {
                  color: i.color || "foreground",
                  href: i.href,
                  size: "lg",
                  className: "w-full",
                  children: i.label
                }
              )
            },
            f
          )) })
        ]
      }
    );
  }
);
C.displayName = "Navbar";
export {
  C as Navbar
};
