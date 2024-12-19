/* empty css                */
import { j as e } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as j } from "react";
import { Navbar as b, NavbarBrand as B, Link as f, NavbarContent as h, NavbarItem as d, Button as y } from "@nextui-org/react";
import { cn as i } from "../utils/x-react.es.js";
const U = j(
  ({
    // Props
    brand: o,
    navItems: u = [],
    actions: r,
    hideNavItemsOnMobile: p = !0,
    classNames: t,
    ...v
  }, x) => {
    const l = [
      "flex",
      "relative",
      "h-full",
      "items-center",
      "data-[active=true]:after:content-['']",
      "data-[active=true]:after:absolute",
      "data-[active=true]:after:bottom-0",
      "data-[active=true]:after:left-0",
      "data-[active=true]:after:right-0",
      "data-[active=true]:after:h-[2px]",
      "data-[active=true]:after:rounded-[2px]",
      "data-[active=true]:after:bg-primary"
    ];
    return /* @__PURE__ */ e.jsxs(b, { ref: x, className: i(t == null ? void 0 : t.root), ...v, children: [
      o && /* @__PURE__ */ e.jsxs(B, { className: i(t == null ? void 0 : t.brand), children: [
        o.logo,
        o.title && /* @__PURE__ */ e.jsx(f, { href: o.link || "#", className: "font-bold text-inherit", children: o.title })
      ] }),
      u.length > 0 && /* @__PURE__ */ e.jsx(
        h,
        {
          className: i(
            p ? "hidden sm:flex" : "flex",
            "gap-4",
            t == null ? void 0 : t.content
          ),
          justify: "center",
          children: u.map((n, g) => /* @__PURE__ */ e.jsx(
            d,
            {
              isActive: n.isActive,
              className: i(l, t == null ? void 0 : t.item),
              children: /* @__PURE__ */ e.jsxs(
                f,
                {
                  color: n.isActive ? "primary" : "foreground",
                  href: n.href,
                  "aria-current": n.isActive ? "page" : void 0,
                  className: t == null ? void 0 : t.link,
                  children: [
                    n.icon,
                    n.label
                  ]
                }
              )
            },
            g
          ))
        }
      ),
      r && /* @__PURE__ */ e.jsxs(h, { justify: "end", children: [
        r.loginButton && /* @__PURE__ */ e.jsx(
          d,
          {
            className: i(
              r.hideLoginOnMobile ? "hidden lg:flex" : "flex",
              t == null ? void 0 : t.item
            ),
            children: /* @__PURE__ */ e.jsx(
              f,
              {
                href: r.loginButton.href,
                className: i(
                  t == null ? void 0 : t.link,
                  r.loginButton.className
                ),
                children: r.loginButton.label
              }
            )
          }
        ),
        r.signUpButton && /* @__PURE__ */ e.jsx(d, { children: /* @__PURE__ */ e.jsx(
          y,
          {
            as: f,
            href: r.signUpButton.href,
            color: r.signUpButton.color || "primary",
            variant: r.signUpButton.variant || "flat",
            className: i(
              t == null ? void 0 : t.button,
              r.signUpButton.className
            ),
            children: r.signUpButton.label
          }
        ) })
      ] })
    ] });
  }
);
U.displayName = "Navbar";
export {
  U as Navbar
};
