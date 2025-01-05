import { jsx as e } from "react/jsx-runtime";
import { forwardRef as m } from "react";
import { cn as t } from "../../utils/index.js";
const $ = m(
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
    className: l
  }, v) => {
    const x = t(
      "grid",
      `grid-cols-${i.default}`,
      i.sm !== void 0 && `sm:grid-cols-${i.sm}`,
      i.md !== void 0 && `md:grid-cols-${i.md}`,
      i.lg !== void 0 && `lg:grid-cols-${i.lg}`,
      i.xl !== void 0 && `xl:grid-cols-${i.xl}`,
      r.x !== void 0 && `gap-x-${r.x}`,
      r.y !== void 0 && `gap-y-${r.y}`,
      l
    );
    return /* @__PURE__ */ e("div", { ref: v, className: x, children: d ? d.map((o) => /* @__PURE__ */ e(g, { colSpan: o.colSpan, children: o.content }, o.id)) : s });
  }
);
$.displayName = "Grid";
const g = m(
  ({ children: s, colSpan: d, className: i }, r) => {
    const l = t(
      d?.default !== void 0 && `col-span-${d.default}`,
      d?.sm !== void 0 && `sm:col-span-${d.sm}`,
      d?.md !== void 0 && `md:col-span-${d.md}`,
      d?.lg !== void 0 && `lg:col-span-${d.lg}`,
      d?.xl !== void 0 && `xl:col-span-${d.xl}`,
      i
    );
    return /* @__PURE__ */ e("div", { ref: r, className: l, children: s });
  }
);
g.displayName = "GridItem";
export {
  $ as Grid,
  g as GridItem
};
//# sourceMappingURL=index.js.map
