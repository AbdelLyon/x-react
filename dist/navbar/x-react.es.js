/* empty css                */
import { j as i } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as g } from "react";
import { Navbar as $, NavbarContent as f, NavbarMenuToggle as R, NavbarBrand as k, NavbarMenu as m } from "@nextui-org/react";
import { cn as x } from "../utils/x-react.es.js";
const E = g(
  ({
    // Content
    brand: n,
    startContent: t,
    centerContent: h,
    endContent: o,
    menuContent: e,
    // Props
    contentProps: j,
    menuProps: v,
    mobileBreakpoint: p = "md",
    showMenuButton: b = !0,
    // NextUI props
    className: u,
    classNames: r,
    ...l
  }, y) => {
    const d = {
      sm: "sm:flex",
      md: "md:flex",
      lg: "lg:flex",
      xl: "xl:flex",
      "2xl": "2xl:flex"
    }[p];
    return /* @__PURE__ */ i.jsxs(
      $,
      {
        ref: y,
        className: u,
        classNames: r,
        ...l,
        children: [
          b && /* @__PURE__ */ i.jsx(f, { className: x(`${d}:hidden`), justify: "start", children: /* @__PURE__ */ i.jsx(R, {}) }),
          n && /* @__PURE__ */ i.jsx(k, { children: n }),
          t && /* @__PURE__ */ i.jsx(
            f,
            {
              className: x("hidden", d, r == null ? void 0 : r.content),
              justify: "start",
              ...j,
              children: t
            }
          ),
          h && /* @__PURE__ */ i.jsx(
            f,
            {
              className: x("hidden", d, r == null ? void 0 : r.content),
              justify: "center",
              ...j,
              children: h
            }
          ),
          o && /* @__PURE__ */ i.jsx(
            f,
            {
              className: x("hidden", d, r == null ? void 0 : r.content),
              justify: "end",
              ...j,
              children: o
            }
          ),
          b && e && /* @__PURE__ */ i.jsx(
            m,
            {
              className: x(`${d}:hidden`, r == null ? void 0 : r.menu),
              ...v,
              children: e
            }
          )
        ]
      }
    );
  }
);
E.displayName = "Navbar";
export {
  E as Navbar
};
