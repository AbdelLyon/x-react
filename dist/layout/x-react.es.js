/* empty css                */
import { j as s } from "../jsx-runtime-Dx-03ztt.js";
import { u as e } from "../useMediaQuery-A9Oq9utn.js";
import { N as p } from "../Navbar-k0ZUELna.js";
import { S as l } from "../Sidebar-CUlo8Gad.js";
import { cn as c } from "../utils/x-react.es.js";
const b = ({
  children: n,
  navbar: o,
  sidebar: t,
  className: x
}) => {
  const i = e("(min-width: 1024px)"), m = e("(min-width: 768px) and (max-width: 1023px)"), r = !!o, a = !!t;
  return /* @__PURE__ */ s.jsxs("div", { className: "min-h-screen bg-background", children: [
    r && /* @__PURE__ */ s.jsx(p, { ...o }),
    /* @__PURE__ */ s.jsxs("div", { className: "flex", children: [
      a && /* @__PURE__ */ s.jsx(l, { ...t }),
      /* @__PURE__ */ s.jsx(
        "main",
        {
          className: c(
            "flex-1 px-4 transition-all duration-200",
            {
              // Padding top si navbar présente
              "pt-16": r,
              // Margin left selon présence sidebar et breakpoint
              "ml-0": !a || !m && !i,
              "ml-[90px]": a && m,
              "ml-[270px]": a && i,
              // Padding sur les côtés selon breakpoint
              "px-4 sm:px-6 md:px-8 lg:px-12": !0
            },
            x
          ),
          children: n
        }
      )
    ] })
  ] });
};
export {
  b as Layout
};
