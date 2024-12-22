import { j as d } from "./jsx-runtime-Dx-03ztt.js";
import { forwardRef as N } from "react";
import { Navbar as A, NavbarContent as b, NavbarMenuToggle as R, NavbarBrand as B, NavbarItem as a, Link as f, NavbarMenu as D, NavbarMenuItem as E } from "@nextui-org/react";
import { cn as h } from "./utils/x-react.es.js";
import { u as Q } from "./useMediaQuery-A9Oq9utn.js";
const T = N(
  ({
    appName: s,
    appLogo: x,
    profile: j,
    navigationItems: l = [],
    menuItems: u = [],
    contentProps: y,
    menuProps: c,
    onItemClick: t,
    className: p,
    classNames: e,
    isMenuOpen: i,
    onMenuOpenChange: o,
    ...w
  }, g) => {
    const n = Q("(min-width: 768px)"), P = (r) => {
      var v;
      (v = r.onPress) == null || v.call(r), t == null || t(r), o == null || o(!1);
    };
    return /* @__PURE__ */ d.jsxs(
      A,
      {
        ref: g,
        className: p,
        classNames: {
          base: "bg-white",
          wrapper: "max-w-full",
          ...e
        },
        isMenuOpen: i,
        onMenuOpenChange: o,
        ...w,
        children: [
          !n && /* @__PURE__ */ d.jsxs(b, { children: [
            /* @__PURE__ */ d.jsx(
              R,
              {
                "aria-label": i ? "Close menu" : "Open menu"
              }
            ),
            s && /* @__PURE__ */ d.jsx(B, { children: s })
          ] }),
          n && (s || x) && /* @__PURE__ */ d.jsxs(b, { justify: "start", children: [
            /* @__PURE__ */ d.jsx(a, { className: "w-[247px] border-r-2 border-divider", children: s }),
            /* @__PURE__ */ d.jsx(a, { children: x })
          ] }),
          /* @__PURE__ */ d.jsxs(b, { justify: "end", ...y, children: [
            n && l.map((r) => /* @__PURE__ */ d.jsx(a, { children: /* @__PURE__ */ d.jsxs(
              f,
              {
                className: h(
                  "p-2 hover:bg-content1 rounded-md text-foreground",
                  {
                    "border-l-2 border-primary bg-content1 text-primary": r.isActive
                  },
                  e == null ? void 0 : e.item
                ),
                onPress: () => P(r),
                children: [
                  r.startContent,
                  r.label,
                  r.endContent
                ]
              }
            ) }, r.key)),
            j && /* @__PURE__ */ d.jsx(a, { children: j })
          ] }),
          !n && /* @__PURE__ */ d.jsx(D, { ...c, children: u.map((r) => /* @__PURE__ */ d.jsx(E, { children: /* @__PURE__ */ d.jsxs(
            f,
            {
              className: h(
                "flex items-center gap-3 p-3 text-foreground hover:bg-content1 rounded-md cursor-pointer",
                {
                  "border-l-2 border-primary bg-content1 text-primary": r.isActive
                },
                e == null ? void 0 : e.item
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
T.displayName = "Navbar";
export {
  T as N
};
