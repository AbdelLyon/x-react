/* empty css                */
import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as m } from "react";
import { Navbar as v, NavbarContent as d, NavbarMenuToggle as k, NavbarBrand as h, NavbarItem as C, Link as y, NavbarMenu as w, NavbarMenuItem as g } from "@nextui-org/react";
import { B } from "../Buttons-DKd5iRbN.js";
const M = m(
  ({
    brand: e,
    sections: t,
    mobileMenu: c = [],
    contentProps: x,
    menuProps: N,
    itemProps: b,
    onItemPress: l,
    className: f,
    classNames: j,
    isMenuOpen: n,
    onMenuOpenChange: u,
    ...i
  }, p) => {
    const o = (a) => {
      l == null || l(a);
    };
    return /* @__PURE__ */ r.jsxs(
      v,
      {
        ref: p,
        className: f,
        classNames: {
          base: "bg-background",
          wrapper: "max-w-full",
          ...j
        },
        isMenuOpen: n,
        onMenuOpenChange: u,
        ...i,
        children: [
          /* @__PURE__ */ r.jsxs(d, { className: "md:hidden", children: [
            /* @__PURE__ */ r.jsx(
              k,
              {
                "aria-label": n ? "Close menu" : "Open menu"
              }
            ),
            e && /* @__PURE__ */ r.jsx(h, { children: e })
          ] }),
          t.map((a) => /* @__PURE__ */ r.jsxs(
            d,
            {
              className: [
                a.showOnDesktop ? "hidden md:flex" : "hidden",
                a.showOnMobile ? "flex md:hidden" : ""
              ].join(" "),
              justify: a.justify || "start",
              ...x,
              children: [
                a.key === "brand" && e && /* @__PURE__ */ r.jsx(h, { children: e }),
                a.items.map((s) => /* @__PURE__ */ r.jsx(
                  C,
                  {
                    isActive: s.isActive,
                    className: s.className,
                    children: /* @__PURE__ */ r.jsxs(
                      y,
                      {
                        color: s.linkColor || "foreground",
                        href: s.href,
                        onPress: () => o(s),
                        children: [
                          s.startContent,
                          s.label,
                          s.endContent
                        ]
                      }
                    )
                  },
                  s.key
                ))
              ]
            },
            a.key
          )),
          /* @__PURE__ */ r.jsx(w, { ...N, children: c.map((a) => /* @__PURE__ */ r.jsx(g, { children: /* @__PURE__ */ r.jsxs(
            B,
            {
              color: a.buttonColor || "default",
              onPress: () => o(a),
              className: "w-full",
              ...b,
              children: [
                a.startContent,
                a.label,
                a.endContent
              ]
            }
          ) }, a.key)) })
        ]
      }
    );
  }
);
M.displayName = "Navbar";
export {
  M as Navbar
};
