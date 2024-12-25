/* empty css                */
import { j as s } from "../jsx-runtime-Dx-03ztt.js";
import { u as e } from "../useResponsive-C48eFL5T.js";
import { N as p } from "../Navbar-Hng6EGpF.js";
import { S as l } from "../Sidebar-XdsFKim9.js";
import { cn as c } from "../utils/x-react.es.js";
import { S as v } from "../Scroll-Ca_ONdIj.js";
const b = ({
  children: x,
  navbar: a,
  sidebar: r,
  className: n
}) => {
  const t = e("(min-width: 1024px)"), m = e("(min-width: 768px) and (max-width: 1023px)"), i = !!a, o = !!r;
  return /* @__PURE__ */ s.jsxs("div", { className: "min-h-screen bg-background", children: [
    i && /* @__PURE__ */ s.jsx(p, { ...a }),
    /* @__PURE__ */ s.jsxs("div", { className: "flex", children: [
      o && /* @__PURE__ */ s.jsx(l, { ...r }),
      /* @__PURE__ */ s.jsx(
        "main",
        {
          className: c(
            "flex-1 px-4 transition-all duration-200",
            {
              "pt-16": i,
              "ml-0": !o || !m && !t,
              "ml-[90px]": o && m,
              "ml-[270px]": o && t,
              "px-4 sm:px-6 md:px-8 lg:px-12": !0
            },
            n
          ),
          children: x
        }
      )
    ] })
  ] });
};
export {
  b as Layout,
  v as Scroll
};
