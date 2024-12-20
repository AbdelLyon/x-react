/* empty css                */
import { j as a } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as g } from "react";
import { Navbar as m, NavbarContent as e, NavbarMenuToggle as y, NavbarBrand as d, NavbarItem as i, Link as k, NavbarMenu as w, NavbarMenuItem as A } from "@nextui-org/react";
import { B } from "../Buttons-DKd5iRbN.js";
import { cn as M } from "../utils/x-react.es.js";
const R = g(
  ({
    // Content
    brand: n,
    profile: l,
    navigationItems: x = [],
    menuItems: j = [],
    // Props
    contentProps: h,
    menuProps: u,
    itemProps: v,
    // Callback
    onItemPress: s,
    // NextUI props
    className: N,
    classNames: b,
    isMenuOpen: o,
    onMenuOpenChange: p,
    ...f
  }, C) => {
    const t = (r) => {
      var c;
      (c = r.onPress) == null || c.call(r), s == null || s(r);
    };
    return /* @__PURE__ */ a.jsxs(
      m,
      {
        ref: C,
        className: N,
        classNames: {
          base: "bg-background",
          wrapper: "max-w-full",
          ...b
        },
        isMenuOpen: o,
        onMenuOpenChange: p,
        ...f,
        children: [
          /* @__PURE__ */ a.jsxs(e, { className: "md:hidden", children: [
            /* @__PURE__ */ a.jsx(
              y,
              {
                "aria-label": o ? "Close menu" : "Open menu"
              }
            ),
            n && /* @__PURE__ */ a.jsx(d, { children: n })
          ] }),
          /* @__PURE__ */ a.jsxs(e, { className: "hidden md:flex", children: [
            n && /* @__PURE__ */ a.jsx(d, { children: n }),
            x.map((r) => /* @__PURE__ */ a.jsx(i, { isActive: r.isActive, children: /* @__PURE__ */ a.jsxs(
              k,
              {
                color: r.linkColor || (r.isActive ? "primary" : "foreground"),
                "aria-current": r.isActive ? "page" : void 0,
                onPress: () => t(r),
                children: [
                  r.startContent,
                  r.label,
                  r.endContent
                ]
              }
            ) }, r.key))
          ] }),
          /* @__PURE__ */ a.jsx(e, { justify: "end", ...h, children: l && /* @__PURE__ */ a.jsx(i, { children: l }) }),
          /* @__PURE__ */ a.jsx(w, { ...u, children: j.map((r) => /* @__PURE__ */ a.jsx(A, { children: /* @__PURE__ */ a.jsx(
            B,
            {
              color: r.buttonColor || "default",
              onPress: () => t(r),
              startContent: r.startContent,
              endContent: r.endContent,
              className: M("w-full justify-start"),
              variant: "light",
              ...v,
              children: r.label
            }
          ) }, r.key)) })
        ]
      }
    );
  }
);
R.displayName = "Navbar";
export {
  R as Navbar
};
