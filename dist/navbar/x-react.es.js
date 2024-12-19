/* empty css                */
import { j as i } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as y } from "react";
import { Navbar as m, NavbarContent as d, NavbarMenuToggle as g, NavbarBrand as R, NavbarMenu as B } from "@nextui-org/react";
import { cn as x } from "../utils/x-react.es.js";
const E = y(
  ({
    // Content
    brand: f,
    startContent: t,
    centerContent: h,
    endContent: n,
    menuContent: o,
    // Props
    contentProps: j,
    menuProps: e,
    showMenuOnMobile: v = !0,
    // NextUI props
    className: u,
    classNames: r,
    ...b
  }, p) => /* @__PURE__ */ i.jsxs(
    m,
    {
      ref: p,
      className: u,
      classNames: r,
      ...b,
      children: [
        v && /* @__PURE__ */ i.jsx(d, { className: "sm:hidden", justify: "start", children: /* @__PURE__ */ i.jsx(g, {}) }),
        f && /* @__PURE__ */ i.jsx(R, { children: f }),
        t && /* @__PURE__ */ i.jsx(
          d,
          {
            className: x("hidden sm:flex", r == null ? void 0 : r.content),
            justify: "start",
            ...j,
            children: t
          }
        ),
        h && /* @__PURE__ */ i.jsx(
          d,
          {
            className: x("hidden sm:flex", r == null ? void 0 : r.content),
            justify: "center",
            ...j,
            children: h
          }
        ),
        n && /* @__PURE__ */ i.jsx(
          d,
          {
            className: x("hidden sm:flex", r == null ? void 0 : r.content),
            justify: "end",
            ...j,
            children: n
          }
        ),
        v && o && /* @__PURE__ */ i.jsx(B, { ...e, children: o })
      ]
    }
  )
);
E.displayName = "Navbar";
export {
  E as Navbar
};
