import { jsxs as e, jsx as a } from "react/jsx-runtime";
import { useMediaQuery as n } from "../hooks/useMediaQuery.es.js";
import { Navbar as x } from "../navbar/Navbar.es.js";
import { Sidebar as c } from "../sidebar/Sidebar.es.js";
import { cn as d } from "../utils.es.js";
const g = ({
  children: p,
  navbar: i,
  sidebar: m,
  className: l
}) => {
  const r = n("(min-width: 1024px)"), t = n("(min-width: 768px) and (max-width: 1023px)"), s = !!i, o = !!m;
  return /* @__PURE__ */ e("div", { className: "min-h-screen bg-background", children: [
    s && /* @__PURE__ */ a(x, { ...i }),
    /* @__PURE__ */ e("div", { className: "flex", children: [
      o && /* @__PURE__ */ a(c, { ...m }),
      /* @__PURE__ */ a(
        "main",
        {
          className: d(
            "flex-1 px-4 transition-all duration-200",
            {
              "pt-16": s,
              "ml-0": !o || !t && !r,
              "ml-[90px]": o && t,
              "ml-[270px]": o && r,
              "px-4 sm:px-6 md:px-8 lg:px-12": !0
            },
            l
          ),
          children: p
        }
      )
    ] })
  ] });
};
export {
  g as Layout
};
