/* empty css                */
import { j as r } from "../jsx-runtime-Dx-03ztt.js";
import { u as p } from "../useResponsive-C48eFL5T.js";
import { N as l } from "../Navbar-_hcRJak4.js";
import { S as x } from "../Sidebar-Wp3mReu_.js";
import { cn as c } from "../utils/x-react.es.js";
import { forwardRef as d } from "react";
import { ScrollShadow as f } from "@nextui-org/react";
const g = ({
  children: s,
  navbar: o,
  sidebar: m,
  className: i
}) => {
  const t = p("(min-width: 1024px)"), a = p("(min-width: 768px) and (max-width: 1023px)"), n = !!o, e = !!m;
  return /* @__PURE__ */ r.jsxs("div", { className: "min-h-screen bg-background", children: [
    n && /* @__PURE__ */ r.jsx(l, { ...o }),
    /* @__PURE__ */ r.jsxs("div", { className: "flex", children: [
      e && /* @__PURE__ */ r.jsx(x, { ...m }),
      /* @__PURE__ */ r.jsx(
        "main",
        {
          className: c(
            "flex-1 px-4 transition-all duration-200",
            {
              "pt-16": n,
              "ml-0": !e || !a && !t,
              "ml-[90px]": e && a,
              "ml-[270px]": e && t,
              "px-4 sm:px-6 md:px-8 lg:px-12": !0
            },
            i
          ),
          children: s
        }
      )
    ] })
  ] });
}, u = d(
  ({ width: s = "100%", height: o = "100%", style: m, ...i }, t) => {
    const a = {
      width: typeof s == "number" ? `${s}px` : s,
      height: typeof o == "number" ? `${o}px` : o,
      ...m
    };
    return /* @__PURE__ */ r.jsx(f, { ref: t, style: a, ...i });
  }
);
u.displayName = "Scroll";
export {
  g as Layout,
  u as Scroll
};
