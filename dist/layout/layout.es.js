import "../image/image.es.js";
import { jsxs as x, jsx as d } from "react/jsx-runtime";
import { u as c } from "../useResponsive-C48eFL5T.js";
import { Navbar as y } from "../navbar/navbar.es.js";
import { Sidebar as v } from "../sidebar/sidebar.es.js";
import { cn as o } from "../utils/utils.es.js";
import { forwardRef as a } from "react";
import { ScrollShadow as u } from "@nextui-org/react";
const I = ({
  children: r,
  navbar: e,
  sidebar: s,
  className: t
}) => {
  const i = c("(min-width: 1024px)"), m = c("(min-width: 768px) and (max-width: 1023px)"), n = !!e, l = !!s;
  return /* @__PURE__ */ x("div", { className: "min-h-screen bg-background", children: [
    n && /* @__PURE__ */ d(y, { ...e }),
    /* @__PURE__ */ x("div", { className: "flex", children: [
      l && /* @__PURE__ */ d(v, { ...s }),
      /* @__PURE__ */ d(
        "main",
        {
          className: o(
            "flex-1 px-4 transition-all duration-200",
            {
              "pt-16": n,
              "ml-0": !l || !m && !i,
              "ml-[90px]": l && m,
              "ml-[270px]": l && i,
              "px-4 sm:px-6 md:px-8 lg:px-12": !0
            },
            t
          ),
          children: r
        }
      )
    ] })
  ] });
}, N = a(
  ({ width: r = "100%", height: e = "100%", style: s, ...t }, i) => {
    const m = {
      width: typeof r == "number" ? `${r}px` : r,
      height: typeof e == "number" ? `${e}px` : e,
      ...s
    };
    return /* @__PURE__ */ d(u, { ref: i, style: m, ...t });
  }
);
N.displayName = "Scroll";
const D = a(
  ({ children: r, inline: e = !1, className: s }, t) => /* @__PURE__ */ d(
    "div",
    {
      ref: t,
      className: o(
        e ? "inline-flex" : "flex",
        "items-center justify-center",
        s
      ),
      children: r
    }
  )
), g = a(
  ({ children: r, maxWidth: e = "lg", className: s }, t) => {
    const i = o(
      "mx-auto px-4",
      {
        "max-w-screen-sm": e === "sm",
        "max-w-screen-md": e === "md",
        "max-w-screen-lg": e === "lg",
        "max-w-screen-xl": e === "xl",
        "max-w-screen-2xl": e === "2xl",
        "max-w-full": e === "full"
      },
      s
    );
    return /* @__PURE__ */ d("div", { ref: t, className: i, children: r });
  }
);
g.displayName = "Container";
const $ = a(
  ({
    children: r,
    data: e,
    columns: s = {
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
  }, m) => {
    const n = o(
      "grid",
      `grid-cols-${s.default}`,
      s.sm !== void 0 && `sm:grid-cols-${s.sm}`,
      s.md !== void 0 && `md:grid-cols-${s.md}`,
      s.lg !== void 0 && `lg:grid-cols-${s.lg}`,
      s.xl !== void 0 && `xl:grid-cols-${s.xl}`,
      t.x !== void 0 && `gap-x-${t.x}`,
      t.y !== void 0 && `gap-y-${t.y}`,
      i
    );
    return /* @__PURE__ */ d("div", { ref: m, className: n, children: e ? e.map((l) => /* @__PURE__ */ d(f, { colSpan: l.colSpan, children: l.content }, l.id)) : r });
  }
);
$.displayName = "Grid";
const f = a(
  ({ children: r, colSpan: e, className: s }, t) => {
    const i = o(
      (e == null ? void 0 : e.default) !== void 0 && `col-span-${e.default}`,
      (e == null ? void 0 : e.sm) !== void 0 && `sm:col-span-${e.sm}`,
      (e == null ? void 0 : e.md) !== void 0 && `md:col-span-${e.md}`,
      (e == null ? void 0 : e.lg) !== void 0 && `lg:col-span-${e.lg}`,
      (e == null ? void 0 : e.xl) !== void 0 && `xl:col-span-${e.xl}`,
      s
    );
    return /* @__PURE__ */ d("div", { ref: t, className: i, children: r });
  }
);
f.displayName = "GridItem";
const w = a(
  ({ children: r, spacing: e = "md", className: s }, t) => {
    const i = o(
      {
        "py-4": e === "sm",
        "py-8": e === "md",
        "py-12": e === "lg",
        "py-16": e === "xl"
      },
      s
    );
    return /* @__PURE__ */ d("section", { ref: t, className: i, children: r });
  }
);
w.displayName = "Section";
const L = a(
  ({ children: r, spacing: e = 4, align: s = "start", justify: t = "start", className: i }, m) => /* @__PURE__ */ d(
    "div",
    {
      ref: m,
      className: o(
        "flex flex-col",
        `gap-${e}`,
        {
          "items-start": s === "start",
          "items-center": s === "center",
          "items-end": s === "end",
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
  D as Center,
  g as Container,
  $ as Grid,
  f as GridItem,
  I as Layout,
  N as Scroll,
  w as Section,
  L as Stack
};
