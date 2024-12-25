/* empty css                */
import { j as s } from "../jsx-runtime-Dx-03ztt.js";
import * as A from "react";
import { useState as I, useEffect as B } from "react";
import { cn as v } from "../utils/x-react.es.js";
import { Table as G, TableHeader as M, TableColumn as L, Skeleton as T, TableBody as O, TableRow as H, TableCell as E, Checkbox as $ } from "@nextui-org/react";
import { IconChevronUp as W, IconChevronDown as q } from "@tabler/icons-react";
const J = {
  key: null,
  direction: "asc"
}, Q = ({
  rows: e,
  onSelectionChange: t,
  onSortChange: n
}) => {
  const [i, o] = I([]), [u, r] = I(!1), [d, f] = I(!1), [a, g] = I(J);
  return B(() => {
    const c = i.length === e.length && e.length > 0;
    r(c);
  }, [i, e]), {
    selectedRows: i,
    isAllChecked: u,
    sortConfig: a,
    handleSelectionChange: (c) => {
      o((b) => {
        const h = b.some((y) => y.id === c.id) ? b.filter((y) => y.id !== c.id) : [...b, c];
        return t == null || t(h), h;
      });
    },
    handleSelectAll: (c) => {
      const b = c ? [...e] : [];
      o(b), f(c), t == null || t(b);
    },
    handleSortChange: (c, b) => {
      g({ key: c, direction: b }), n == null || n(c, b);
    },
    handelSelectRow: (c) => {
      f(i.some((b) => b.id === c.id));
    },
    isChecked: d
  };
}, X = ({
  columns: e = 5,
  rows: t = 5,
  checkboxSelection: n = !0,
  variant: i = "unstyled",
  className: o
}) => {
  const u = F[i], r = n ? e + 1 : e;
  return /* @__PURE__ */ s.jsxs(G, { radius: "sm", "aria-label": "Loading data", className: o, children: [
    /* @__PURE__ */ s.jsx(M, { className: v(u.header), children: Array(r).fill(null).map((d, f) => /* @__PURE__ */ s.jsx(L, { className: v(u.column), children: f === 0 && n ? /* @__PURE__ */ s.jsx(T, { className: "size-4 rounded-md" }) : /* @__PURE__ */ s.jsx(T, { className: "h-4 w-24 rounded-md" }) }, f)) }),
    /* @__PURE__ */ s.jsx(O, { children: Array(t).fill(null).map((d, f) => /* @__PURE__ */ s.jsx(H, { className: v(u.row), children: Array(r).fill(null).map((a, g) => /* @__PURE__ */ s.jsx(E, { children: g === 0 && n ? /* @__PURE__ */ s.jsx(T, { className: "size-4 rounded-md" }) : /* @__PURE__ */ s.jsx(T, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, g)) }, f)) })
  ] });
};
var z = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new WeakMap(), D = 0, Y = void 0;
function Z(e) {
  return e ? (V.has(e) || (D += 1, V.set(e, D.toString())), V.get(e)) : "0";
}
function K(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? Z(e.root) : e[t]}`).toString();
}
function N(e) {
  const t = K(e);
  let n = z.get(t);
  if (!n) {
    const i = /* @__PURE__ */ new Map();
    let o;
    const u = new IntersectionObserver((r) => {
      r.forEach((d) => {
        var f;
        const a = d.isIntersecting && o.some((g) => d.intersectionRatio >= g);
        e.trackVisibility && typeof d.isVisible > "u" && (d.isVisible = a), (f = i.get(d.target)) == null || f.forEach((g) => {
          g(a, d);
        });
      });
    }, e);
    o = u.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
      id: t,
      observer: u,
      elements: i
    }, z.set(t, n);
  }
  return n;
}
function P(e, t, n = {}, i = Y) {
  if (typeof window.IntersectionObserver > "u" && i !== void 0) {
    const f = e.getBoundingClientRect();
    return t(i, {
      isIntersecting: i,
      target: e,
      intersectionRatio: typeof n.threshold == "number" ? n.threshold : 0,
      time: 0,
      boundingClientRect: f,
      intersectionRect: f,
      rootBounds: f
    }), () => {
    };
  }
  const { id: o, observer: u, elements: r } = N(n), d = r.get(e) || [];
  return r.has(e) || r.set(e, d), d.push(t), u.observe(e), function() {
    d.splice(d.indexOf(t), 1), d.length === 0 && (r.delete(e), u.unobserve(e)), r.size === 0 && (u.disconnect(), z.delete(o));
  };
}
function ee({
  threshold: e,
  delay: t,
  trackVisibility: n,
  rootMargin: i,
  root: o,
  triggerOnce: u,
  skip: r,
  initialInView: d,
  fallbackInView: f,
  onChange: a
} = {}) {
  var g;
  const [S, x] = A.useState(null), p = A.useRef(a), [k, c] = A.useState({
    inView: !!d,
    entry: void 0
  });
  p.current = a, A.useEffect(
    () => {
      if (r || !S) return;
      let y;
      return y = P(
        S,
        (m, R) => {
          c({
            inView: m,
            entry: R
          }), p.current && p.current(m, R), R.isIntersecting && u && y && (y(), y = void 0);
        },
        {
          root: o,
          rootMargin: i,
          threshold: e,
          // @ts-ignore
          trackVisibility: n,
          // @ts-ignore
          delay: t
        },
        f
      ), () => {
        y && y();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(e) ? e.toString() : e,
      S,
      o,
      i,
      u,
      r,
      n,
      f,
      t
    ]
  );
  const b = (g = k.entry) == null ? void 0 : g.target, C = A.useRef(void 0);
  !S && b && !u && !r && C.current !== b && (C.current = b, c({
    inView: !!d,
    entry: void 0
  }));
  const h = [x, k.inView, k.entry];
  return h.ref = h[0], h.inView = h[1], h.entry = h[2], h;
}
const F = {
  bordered: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4 h-12",
    row: "py-4 border-b border-default-200 last:border-b-0 hover:bg-content2 h-12"
  },
  striped: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4 h-12",
    row: "py-4 even:bg-content2 h-12"
  },
  unstyled: {
    header: "bg-content2 border border-default-200",
    column: "bg-content2 py-4 h-12",
    row: "py-4 hover:bg-content2 h-12"
  }
};
function te(e) {
  return typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column";
}
function re(e) {
  return typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column";
}
function ne(e, t, n) {
  const i = n.find(
    (o) => typeof o.field == "string" && String(o.field) === String(e)
  );
  if (i === void 0)
    return null;
  if (i.cell !== void 0)
    return i.cell(t);
  if (typeof i.field == "string" && i.field.length > 0 && i.field in t) {
    const o = t[i.field];
    return typeof o == "string" || typeof o == "number" ? String(o) : null;
  }
  return null;
}
function ue({
  rows: e,
  columns: t,
  onEndReached: n,
  onSelectionChange: i,
  onSortChange: o,
  showSelectionCheckboxes: u = !0,
  classNames: r,
  variant: d = "unstyled",
  isLoading: f = !1,
  childrenProps: a,
  ...g
}) {
  const {
    isAllChecked: S,
    sortConfig: x,
    handleSelectionChange: p,
    handleSelectAll: k,
    handleSortChange: c,
    isChecked: b,
    selectedRows: C,
    handelSelectRow: h
  } = Q({
    rows: e,
    onSelectionChange: i,
    onSortChange: o
  }), { inView: y } = ee({
    threshold: 0.5,
    rootMargin: "100px"
  });
  if (B(() => {
    y && (n == null || n());
  }, [y, n]), f)
    return /* @__PURE__ */ s.jsx(
      X,
      {
        columns: t.length,
        checkboxSelection: u,
        variant: d,
        rows: e.length
      }
    );
  const m = F[d], R = [
    ...u === !0 ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...t.map((l, j) => ({
      ...l,
      key: typeof l.field == "string" ? String(l.field) : String(j),
      label: l.header
    }))
  ], U = (l) => {
    const j = t.find(
      (_) => typeof _.field == "string" && _.field.length > 0 && String(_.field) === l.key
    ), w = j == null ? void 0 : j.field;
    w != null && w !== "actions" && c(
      w,
      x.direction === "asc" ? "desc" : "asc"
    );
  };
  return /* @__PURE__ */ s.jsxs(G, { "aria-label": "data-grid", "aria-labelledby": "data-grid", ...g, children: [
    /* @__PURE__ */ s.jsx(
      M,
      {
        "aria-label": "data-grid-header",
        "aria-labelledby": "data-grid-header",
        columns: R,
        className: v(m.header),
        ...a == null ? void 0 : a.tableHeaderProps,
        children: (l) => /* @__PURE__ */ s.jsx(
          L,
          {
            "aria-labelledby": l.key,
            "aria-label": te(l),
            className: v(m.column),
            ...a == null ? void 0 : a.tableColumnProps,
            children: l.key === "checkbox" && u ? /* @__PURE__ */ s.jsx(
              $,
              {
                isSelected: S,
                onValueChange: k,
                "aria-label": "Select all rows",
                className: r == null ? void 0 : r.checkbox
              }
            ) : /* @__PURE__ */ s.jsxs("div", { className: v("flex items-center gap-2"), children: [
              l.label,
              l.sortable === !0 && /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: v(
                    "relative size-4 cursor-pointer",
                    r == null ? void 0 : r.sortIcon
                  ),
                  onClick: () => U(l),
                  role: "button",
                  "aria-label": re(l.label),
                  children: [
                    /* @__PURE__ */ s.jsx(
                      W,
                      {
                        size: 16,
                        className: v(
                          "absolute -top-1",
                          x.key === l.key && x.direction === "asc" ? "opacity-100" : "opacity-30"
                        )
                      }
                    ),
                    /* @__PURE__ */ s.jsx(
                      q,
                      {
                        size: 16,
                        className: v(
                          "absolute top-1",
                          x.key === l.key && x.direction === "desc" ? "opacity-100" : "opacity-30"
                        )
                      }
                    )
                  ]
                }
              )
            ] })
          },
          l.key
        )
      }
    ),
    /* @__PURE__ */ s.jsx(O, { items: e, ...a == null ? void 0 : a.tableBodyProps, children: (l) => /* @__PURE__ */ s.jsx(
      H,
      {
        "aria-label": `Row ${l.id}`,
        "aria-labelledby": `Row ${l.id}`,
        className: v(m.row),
        ...a == null ? void 0 : a.tableRowProps,
        children: (j) => /* @__PURE__ */ s.jsx(E, { ...a == null ? void 0 : a.tableCellProps, children: j === "checkbox" && u ? /* @__PURE__ */ s.jsx(
          $,
          {
            checked: b,
            isSelected: C.length === e.length,
            onChange: () => {
              p(l), h(l);
            },
            "aria-label": `Select row ${l.id}`,
            className: r == null ? void 0 : r.checkbox
          }
        ) : /* @__PURE__ */ s.jsx("div", { className: r == null ? void 0 : r.cellContent, children: ne(j, l, t) }) })
      },
      l.id
    ) })
  ] });
}
export {
  ue as DataGrid
};
