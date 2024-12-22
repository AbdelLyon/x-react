import { j as o } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as N } from "react";
import { Navbar as w, NavbarContent as x, NavbarMenuToggle as A, NavbarBrand as P, NavbarItem as p, Link as k, NavbarMenu as R, NavbarMenuItem as m } from "@nextui-org/react";
import { cn as c } from "./utils/x-react.es.js";
import { u as B } from "./useMediaQuery-A9Oq9utn.js";
const D = N(
  ({
    brand: e,
    profile: b,
    navigationItems: j = [],
    menuItems: l = [],
    contentProps: u,
    menuProps: f,
    onItemClick: d,
    className: h,
    classNames: a,
    isMenuOpen: s,
    onMenuOpenChange: t,
    ...y
  }, g) => {
    const n = B("(min-width: 768px)"), i = (r) => {
      var v;
      (v = r.onPress) == null || v.call(r), d == null || d(r), t == null || t(!1);
    };
    return /* @__PURE__ */ o.jsxs(
      w,
      {
        ref: g,
        className: h,
        classNames: {
          base: "bg-background",
          wrapper: "max-w-full",
          ...a
        },
        isMenuOpen: s,
        onMenuOpenChange: t,
        ...y,
        children: [
          !n && /* @__PURE__ */ o.jsxs(x, { children: [
            /* @__PURE__ */ o.jsx(
              A,
              {
                "aria-label": s ? "Close menu" : "Open menu"
              }
            ),
            e && /* @__PURE__ */ o.jsx(P, { children: e })
          ] }),
          /* @__PURE__ */ o.jsxs(x, { justify: "end", ...u, children: [
            n && j.map((r) => /* @__PURE__ */ o.jsx(p, { children: /* @__PURE__ */ o.jsxs(
              k,
              {
                "aria-current": r.isActive ? "page" : void 0,
                className: c(
                  "p-2 hover:bg-content1 rounded-md",
                  {
                    "border-l border-primary bg-content1 text-primary": r.isActive
                  },
                  a == null ? void 0 : a.item
                ),
                onPress: () => i(r),
                children: [
                  r.startContent,
                  r.label,
                  r.endContent
                ]
              }
            ) }, r.key)),
            b && /* @__PURE__ */ o.jsx(p, { children: b })
          ] }),
          !n && /* @__PURE__ */ o.jsx(R, { ...f, children: l.map((r) => /* @__PURE__ */ o.jsx(m, { children: /* @__PURE__ */ o.jsxs(
            "button",
            {
              "aria-current": r.isActive ? "page" : void 0,
              onClick: () => i(r),
              className: c(
                "p-2 hover:bg-content1 rounded-md cursor-pointer",
                {
                  "border-l border-primary bg-content1 text-primary": r.isActive
                },
                a == null ? void 0 : a.item
              ),
              children: [
                r.startContent,
                r.label,
                r.endContent
              ]
            }
          ) }, r.key)) })
        ]
      }
    );
  }
);
D.displayName = "Navbar";
export {
  D as N
};
