import { j as a } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as w } from "react";
import { Navbar as P, NavbarContent as p, NavbarMenuToggle as A, NavbarBrand as R, NavbarItem as v, Link as j, NavbarMenu as B, NavbarMenuItem as D } from "@nextui-org/react";
import { cn as u } from "./utils/x-react.es.js";
import { u as E } from "./useMediaQuery-A9Oq9utn.js";
const L = w(
  ({
    brand: n,
    profile: s,
    navigationItems: i = [],
    menuItems: f = [],
    contentProps: l,
    menuProps: y,
    onItemClick: o,
    className: c,
    classNames: d,
    isMenuOpen: b,
    onMenuOpenChange: e,
    ...h
  }, g) => {
    const t = E("(min-width: 768px)"), N = (r) => {
      var x;
      (x = r.onPress) == null || x.call(r), o == null || o(r), e == null || e(!1);
    };
    return /* @__PURE__ */ a.jsxs(
      P,
      {
        ref: g,
        className: c,
        classNames: {
          base: "bg-background",
          wrapper: "max-w-full",
          ...d
        },
        isMenuOpen: b,
        onMenuOpenChange: e,
        ...h,
        children: [
          !t && /* @__PURE__ */ a.jsxs(p, { children: [
            /* @__PURE__ */ a.jsx(
              A,
              {
                "aria-label": b ? "Close menu" : "Open menu"
              }
            ),
            n && /* @__PURE__ */ a.jsx(R, { children: n })
          ] }),
          /* @__PURE__ */ a.jsxs(p, { justify: "end", ...l, children: [
            t && i.map((r) => /* @__PURE__ */ a.jsx(v, { children: /* @__PURE__ */ a.jsxs(
              j,
              {
                "aria-current": r.isActive ? "page" : void 0,
                className: u(
                  "p-2 hover:bg-content1 rounded-md text-foreground",
                  {
                    "border-l border-primary bg-content1 text-primary": r.isActive
                  },
                  d == null ? void 0 : d.item
                ),
                onPress: () => N(r),
                children: [
                  r.startContent,
                  r.label,
                  r.endContent
                ]
              }
            ) }, r.key)),
            s && /* @__PURE__ */ a.jsx(v, { children: s })
          ] }),
          !t && /* @__PURE__ */ a.jsx(B, { ...y, children: f.map((r) => /* @__PURE__ */ a.jsx(D, { children: /* @__PURE__ */ a.jsxs(
            j,
            {
              className: u(
                "flex items-center gap-3 p-3 hover:bg-content1 rounded-md cursor-pointer",
                {
                  "border-l-2 border-primary bg-content1 text-primary": r.isActive
                },
                d == null ? void 0 : d.item
              ),
              onPress: () => o == null ? void 0 : o(r),
              children: [
                r.startContent,
                t ? r.label : null,
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
L.displayName = "Navbar";
export {
  L as N
};
