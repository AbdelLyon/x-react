import { j as d } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as A } from "react";
import { Navbar as N, NavbarContent as x, NavbarMenuToggle as R, NavbarBrand as B, NavbarItem as a, Link as f, NavbarMenu as D, NavbarMenuItem as E } from "@nextui-org/react";
import { cn as i } from "./utils/x-react.es.js";
import { u as L } from "./useMediaQuery-A9Oq9utn.js";
const Q = A(
  ({
    appName: s,
    appLogo: l,
    profile: b,
    navigationItems: u = [],
    menuItems: h = [],
    contentProps: c,
    menuProps: y,
    onItemClick: o,
    className: p,
    classNames: t,
    isMenuOpen: j,
    onMenuOpenChange: e,
    ...g
  }, w) => {
    const n = L("(min-width: 768px)"), P = (r) => {
      var v;
      (v = r.onPress) == null || v.call(r), o == null || o(r), e == null || e(!1);
    };
    return /* @__PURE__ */ d.jsxs(
      N,
      {
        ref: w,
        className: p,
        classNames: {
          base: "bg-background",
          wrapper: "max-w-full",
          ...t
        },
        isMenuOpen: j,
        onMenuOpenChange: e,
        ...g,
        children: [
          !n && /* @__PURE__ */ d.jsxs(x, { children: [
            /* @__PURE__ */ d.jsx(
              R,
              {
                "aria-label": j ? "Close menu" : "Open menu"
              }
            ),
            s && /* @__PURE__ */ d.jsx(B, { children: s })
          ] }),
          n && (s || l) && /* @__PURE__ */ d.jsxs(x, { justify: "start", children: [
            /* @__PURE__ */ d.jsx(a, { className: "w-[270px]", children: s }),
            /* @__PURE__ */ d.jsx(a, { children: s })
          ] }),
          /* @__PURE__ */ d.jsxs(x, { justify: "end", ...c, children: [
            n && u.map((r) => /* @__PURE__ */ d.jsx(a, { children: /* @__PURE__ */ d.jsxs(
              f,
              {
                className: i(
                  "p-2 hover:bg-content1 rounded-md text-foreground",
                  {
                    "border-l-2 border-primary bg-content1 text-primary": r.isActive
                  },
                  t == null ? void 0 : t.item
                ),
                onPress: () => P(r),
                children: [
                  r.startContent,
                  r.label,
                  r.endContent
                ]
              }
            ) }, r.key)),
            b && /* @__PURE__ */ d.jsx(a, { children: b })
          ] }),
          !n && /* @__PURE__ */ d.jsx(D, { ...y, children: h.map((r) => /* @__PURE__ */ d.jsx(E, { children: /* @__PURE__ */ d.jsxs(
            f,
            {
              className: i(
                "flex items-center gap-3 p-3 text-foreground hover:bg-content1 rounded-md cursor-pointer",
                {
                  "border-l-2 border-primary bg-content1 text-primary": r.isActive
                },
                t == null ? void 0 : t.item
              ),
              onPress: () => o == null ? void 0 : o(r),
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
Q.displayName = "Navbar";
export {
  Q as N
};
