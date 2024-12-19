/* empty css                */
import { j as a } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as b } from "react";
import { Navbar as t, NavbarContent as r, NavbarMenuToggle as p, NavbarBrand as x, NavbarMenu as y } from "@nextui-org/react";
const g = b(
  ({
    // Mobile Content
    mobileBrand: e,
    mobileContent: i,
    menuContent: d,
    // Desktop Content
    desktopBrand: l,
    desktopContent: c,
    endContent: j,
    // Props
    contentProps: s,
    menuProps: h,
    // NextUI props
    className: N,
    classNames: f,
    isMenuOpen: m,
    onMenuOpenChange: n,
    ...u
  }, v) => /* @__PURE__ */ a.jsxs(
    t,
    {
      ref: v,
      className: N,
      classNames: f,
      isMenuOpen: m,
      onMenuOpenChange: n,
      ...u,
      children: [
        /* @__PURE__ */ a.jsx(r, { className: "sm:hidden", justify: "start", children: /* @__PURE__ */ a.jsx(
          p,
          {
            "aria-label": m ? "Close menu" : "Open menu"
          }
        ) }),
        e && /* @__PURE__ */ a.jsx(
          r,
          {
            className: "sm:hidden pr-3",
            justify: "center",
            ...s,
            children: /* @__PURE__ */ a.jsx(x, { children: e })
          }
        ),
        i && /* @__PURE__ */ a.jsx(r, { className: "sm:hidden", ...s, children: i }),
        /* @__PURE__ */ a.jsxs(
          r,
          {
            className: "hidden sm:flex gap-4",
            justify: "center",
            ...s,
            children: [
              l && /* @__PURE__ */ a.jsx(x, { children: l }),
              c
            ]
          }
        ),
        j && /* @__PURE__ */ a.jsx(r, { justify: "end", ...s, children: j }),
        d && /* @__PURE__ */ a.jsx(y, { ...h, children: d })
      ]
    }
  )
);
g.displayName = "Navbar";
export {
  g as Navbar
};
