import { j as a } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as g } from "react";
import { Navbar as w, NavbarContent as v, NavbarMenuToggle as P, NavbarBrand as k, NavbarItem as b, Link as x, NavbarMenu as R, NavbarMenuItem as B } from "@nextui-org/react";
import { cn as p } from "./utils/x-react.es.js";
import { u as D } from "./useMediaQuery-A9Oq9utn.js";
const E = g(
  ({
    brand: n,
    profile: c,
    navigationItems: f = [],
    menuItems: j = [],
    contentProps: u,
    menuProps: N,
    onItemClick: e,
    className: h,
    classNames: s,
    isMenuOpen: l,
    onMenuOpenChange: o,
    ...y
  }, A) => {
    const d = D("(min-width: 768px)"), t = (r) => {
      var i;
      (i = r.onPress) == null || i.call(r), e == null || e(r), o == null || o(!1);
    };
    return /* @__PURE__ */ a.jsxs(
      w,
      {
        ref: A,
        className: h,
        classNames: {
          base: "bg-background",
          wrapper: "max-w-full",
          ...s
        },
        isMenuOpen: l,
        onMenuOpenChange: o,
        ...y,
        children: [
          !d && /* @__PURE__ */ a.jsxs(v, { children: [
            /* @__PURE__ */ a.jsx(
              P,
              {
                "aria-label": l ? "Close menu" : "Open menu"
              }
            ),
            n && /* @__PURE__ */ a.jsx(k, { children: n })
          ] }),
          /* @__PURE__ */ a.jsxs(v, { justify: "end", ...u, children: [
            d && f.map((r) => /* @__PURE__ */ a.jsx(b, { isActive: r.isActive, children: /* @__PURE__ */ a.jsxs(
              x,
              {
                href: r.href,
                className: p(
                  {
                    "text-primary": r.isActive
                  },
                  s == null ? void 0 : s.item
                ),
                color: r.linkColor || (r.isActive ? "primary" : "foreground"),
                "aria-current": r.isActive ? "page" : void 0,
                onPress: () => t(r),
                children: [
                  r.startContent,
                  r.label,
                  r.endContent
                ]
              }
            ) }, r.key)),
            c && /* @__PURE__ */ a.jsx(b, { children: c })
          ] }),
          !d && /* @__PURE__ */ a.jsx(R, { ...N, children: j.map((r) => /* @__PURE__ */ a.jsx(
            B,
            {
              className: p("p-2 hover:bg-content1 rounded-md", {
                "border-l border-primary bg-content1": r.isActive
              }),
              children: /* @__PURE__ */ a.jsxs(
                x,
                {
                  className: "flex items-center gap-2",
                  color: r.linkColor || (r.isActive ? "primary" : "foreground"),
                  "aria-current": r.isActive ? "page" : void 0,
                  onPress: () => t(r),
                  children: [
                    r.startContent,
                    r.label,
                    r.endContent
                  ]
                }
              )
            },
            r.key
          )) })
        ]
      }
    );
  }
);
E.displayName = "Navbar";
export {
  E as N
};
