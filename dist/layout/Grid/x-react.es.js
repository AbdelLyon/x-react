import { jsx as t } from "react/jsx-runtime";
import { forwardRef as g } from "react";
import { cn as v } from "../../utils/x-react.es.js";
const y = g(
  ({
    children: s,
    data: d,
    columns: i = {
      default: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 4
    },
    gap: r = {
      x: 4,
      y: 4
    },
    className: e
  }, $) => {
    const f = v(
      "grid",
      `grid-cols-${i.default}`,
      i.sm !== void 0 && `sm:grid-cols-${i.sm}`,
      i.md !== void 0 && `md:grid-cols-${i.md}`,
      i.lg !== void 0 && `lg:grid-cols-${i.lg}`,
      i.xl !== void 0 && `xl:grid-cols-${i.xl}`,
      r.x !== void 0 && `gap-x-${r.x}`,
      r.y !== void 0 && `gap-y-${r.y}`,
      e
    );
    return /* @__PURE__ */ t("div", { ref: $, className: f, children: d ? d.map((m) => /* @__PURE__ */ t(x, { colSpan: m.colSpan, children: m.content }, m.id)) : s });
  }
);
y.displayName = "Grid";
const x = g(
  ({ children: s, colSpan: d, className: i }, r) => {
    const e = v(
      (d == null ? void 0 : d.default) !== void 0 && `col-span-${d.default}`,
      (d == null ? void 0 : d.sm) !== void 0 && `sm:col-span-${d.sm}`,
      (d == null ? void 0 : d.md) !== void 0 && `md:col-span-${d.md}`,
      (d == null ? void 0 : d.lg) !== void 0 && `lg:col-span-${d.lg}`,
      (d == null ? void 0 : d.xl) !== void 0 && `xl:col-span-${d.xl}`,
      i
    );
    return /* @__PURE__ */ t("div", { ref: r, className: e, children: s });
  }
);
x.displayName = "GridItem";
export {
  y as Grid,
  x as GridItem
};
