/* empty css                */
import { j as m } from "../jsx-runtime-BFln9wzo.js";
import { a as n } from "../useResponsive-C59ustr5.js";
import { N as f } from "../Navbar-C1bavFYt.js";
import { S as y } from "../Sidebar-C9R_kb9y.js";
import { cn as l } from "../utils/x-react.es.js";
import { forwardRef as o } from "react";
import { ScrollShadow as v } from "@nextui-org/react";
const B = ({
  children: r,
  navbar: s,
  sidebar: e,
  className: t
}) => {
  const i = n("(min-width: 1024px)"), d = n("(min-width: 768px) and (max-width: 1023px)"), a = !!s, x = !!e;
  return /* @__PURE__ */ m.jsxs("div", { className: "min-h-screen bg-background", children: [
    a && /* @__PURE__ */ m.jsx(f, { ...s }),
    /* @__PURE__ */ m.jsxs("div", { className: "flex", children: [
      x && /* @__PURE__ */ m.jsx(y, { ...e }),
      /* @__PURE__ */ m.jsx(
        "main",
        {
          className: l(
            "flex-1 px-4 transition-all duration-200",
            {
              "pt-16": a,
              "ml-0": !x || !d && !i,
              "ml-[90px]": x && d,
              "ml-[270px]": x && i,
              "px-4 sm:px-6 md:px-8 lg:px-12": !0
            },
            t
          ),
          children: r
        }
      )
    ] })
  ] });
}, u = o(
  ({ width: r = "100%", height: s = "100%", style: e, ...t }, i) => {
    const d = {
      width: typeof r == "number" ? `${r}px` : r,
      height: typeof s == "number" ? `${s}px` : s,
      ...e
    };
    return /* @__PURE__ */ m.jsx(v, { ref: i, style: d, ...t });
  }
);
u.displayName = "Scroll";
const I = o(
  ({ children: r, inline: s = !1, className: e }, t) => /* @__PURE__ */ m.jsx(
    "div",
    {
      ref: t,
      className: l(
        s ? "inline-flex" : "flex",
        "items-center justify-center",
        e
      ),
      children: r
    }
  )
), j = o(
  ({ children: r, maxWidth: s = "lg", className: e }, t) => {
    const i = l(
      "mx-auto px-4",
      {
        "max-w-screen-sm": s === "sm",
        "max-w-screen-md": s === "md",
        "max-w-screen-lg": s === "lg",
        "max-w-screen-xl": s === "xl",
        "max-w-screen-2xl": s === "2xl",
        "max-w-full": s === "full"
      },
      e
    );
    return /* @__PURE__ */ m.jsx("div", { ref: t, className: i, children: r });
  }
);
j.displayName = "Container";
const N = o(
  ({
    children: r,
    data: s,
    columns: e = {
      default: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 4
    },
    gap: t = {
      x: 4,
      y: 4
    },
    className: i
  }, d) => {
    const a = l(
      "grid",
      `grid-cols-${e.default}`,
      e.sm !== void 0 && `sm:grid-cols-${e.sm}`,
      e.md !== void 0 && `md:grid-cols-${e.md}`,
      e.lg !== void 0 && `lg:grid-cols-${e.lg}`,
      e.xl !== void 0 && `xl:grid-cols-${e.xl}`,
      t.x !== void 0 && `gap-x-${t.x}`,
      t.y !== void 0 && `gap-y-${t.y}`,
      i
    );
    return /* @__PURE__ */ m.jsx("div", { ref: d, className: a, children: s ? s.map((x) => /* @__PURE__ */ m.jsx(c, { colSpan: x.colSpan, children: x.content }, x.id)) : r });
  }
);
N.displayName = "Grid";
const c = o(
  ({ children: r, colSpan: s, className: e }, t) => {
    const i = l(
      (s == null ? void 0 : s.default) !== void 0 && `col-span-${s.default}`,
      (s == null ? void 0 : s.sm) !== void 0 && `sm:col-span-${s.sm}`,
      (s == null ? void 0 : s.md) !== void 0 && `md:col-span-${s.md}`,
      (s == null ? void 0 : s.lg) !== void 0 && `lg:col-span-${s.lg}`,
      (s == null ? void 0 : s.xl) !== void 0 && `xl:col-span-${s.xl}`,
      e
    );
    return /* @__PURE__ */ m.jsx("div", { ref: t, className: i, children: r });
  }
);
c.displayName = "GridItem";
const g = o(
  ({ children: r, spacing: s = "md", className: e }, t) => {
    const i = l(
      {
        "py-4": s === "sm",
        "py-8": s === "md",
        "py-12": s === "lg",
        "py-16": s === "xl"
      },
      e
    );
    return /* @__PURE__ */ m.jsx("section", { ref: t, className: i, children: r });
  }
);
g.displayName = "Section";
const R = o(
  ({ children: r, spacing: s = 4, align: e = "start", justify: t = "start", className: i }, d) => /* @__PURE__ */ m.jsx(
    "div",
    {
      ref: d,
      className: l(
        "flex flex-col",
        `gap-${s}`,
        {
          "items-start": e === "start",
          "items-center": e === "center",
          "items-end": e === "end",
          "justify-start": t === "start",
          "justify-center": t === "center",
          "justify-end": t === "end",
          "justify-between": t === "between"
        },
        i
      ),
      children: r
    }
  )
);
export {
  I as Center,
  j as Container,
  N as Grid,
  c as GridItem,
  B as Layout,
  u as Scroll,
  g as Section,
  R as Stack
};
