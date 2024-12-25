/* empty css                */
import { j as a } from "../jsx-runtime-Dx-03ztt.js";
import * as k from "react";
import { useState as V, useEffect as D } from "react";
import { cn as v } from "../utils/x-react.es.js";
import { Table as B, TableHeader as G, TableColumn as M, Skeleton as C, TableBody as L, TableRow as O, TableCell as H, Checkbox as z } from "@nextui-org/react";
import { IconChevronUp as F, IconChevronDown as U } from "@tabler/icons-react";
const W = {
  key: null,
  direction: "asc"
}, q = ({
  rows: e,
  onSelectionChange: t,
  onSortChange: l
}) => {
  const [i, o] = V([]), [u, n] = V(!1), [d, f] = V(W);
  return D(() => {
    n(i.length === e.length && e.length > 0);
  }, [i, e]), {
    selectedRows: i,
    isAllChecked: u,
    sortConfig: d,
    handleSelectionChange: (g) => {
      const { row: c, isSelected: R } = g, x = i.some((b) => b.id === c.id), j = R === !0 || R !== !1 && !x ? [...i.filter((b) => b.id !== c.id), c] : i.filter((b) => b.id !== c.id);
      o(j), t == null || t(j);
    },
    handleSelectAll: (g) => {
      const c = g ? [...e] : [];
      o(c), t == null || t(c);
    },
    handleSortChange: (g, c) => {
      f({ key: g, direction: c }), l == null || l(g, c);
    },
    isRowSelected: (g) => i.some((c) => c.id === g.id)
  };
}, J = ({
  columns: e = 5,
  rows: t = 5,
  checkboxSelection: l = !0,
  variant: i = "unstyled",
  className: o
}) => {
  const u = E[i], n = l ? e + 1 : e;
  return /* @__PURE__ */ a.jsxs(B, { radius: "sm", "aria-label": "Loading data", className: o, children: [
    /* @__PURE__ */ a.jsx(G, { className: v(u.header), children: Array(n).fill(null).map((d, f) => /* @__PURE__ */ a.jsx(M, { className: v(u.column), children: f === 0 && l ? /* @__PURE__ */ a.jsx(C, { className: "size-4 rounded-md" }) : /* @__PURE__ */ a.jsx(C, { className: "h-4 w-24 rounded-md" }) }, f)) }),
    /* @__PURE__ */ a.jsx(L, { children: Array(t).fill(null).map((d, f) => /* @__PURE__ */ a.jsx(O, { className: v(u.row), children: Array(n).fill(null).map((s, y) => /* @__PURE__ */ a.jsx(H, { children: y === 0 && l ? /* @__PURE__ */ a.jsx(C, { className: "size-4 rounded-md" }) : /* @__PURE__ */ a.jsx(C, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, y)) }, f)) })
  ] });
};
var _ = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new WeakMap(), $ = 0, Q = void 0;
function X(e) {
  return e ? (I.has(e) || ($ += 1, I.set(e, $.toString())), I.get(e)) : "0";
}
function Y(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? X(e.root) : e[t]}`).toString();
}
function Z(e) {
  const t = Y(e);
  let l = _.get(t);
  if (!l) {
    const i = /* @__PURE__ */ new Map();
    let o;
    const u = new IntersectionObserver((n) => {
      n.forEach((d) => {
        var f;
        const s = d.isIntersecting && o.some((y) => d.intersectionRatio >= y);
        e.trackVisibility && typeof d.isVisible > "u" && (d.isVisible = s), (f = i.get(d.target)) == null || f.forEach((y) => {
          y(s, d);
        });
      });
    }, e);
    o = u.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), l = {
      id: t,
      observer: u,
      elements: i
    }, _.set(t, l);
  }
  return l;
}
function K(e, t, l = {}, i = Q) {
  if (typeof window.IntersectionObserver > "u" && i !== void 0) {
    const f = e.getBoundingClientRect();
    return t(i, {
      isIntersecting: i,
      target: e,
      intersectionRatio: typeof l.threshold == "number" ? l.threshold : 0,
      time: 0,
      boundingClientRect: f,
      intersectionRect: f,
      rootBounds: f
    }), () => {
    };
  }
  const { id: o, observer: u, elements: n } = Z(l), d = n.get(e) || [];
  return n.has(e) || n.set(e, d), d.push(t), u.observe(e), function() {
    d.splice(d.indexOf(t), 1), d.length === 0 && (n.delete(e), u.unobserve(e)), n.size === 0 && (u.disconnect(), _.delete(o));
  };
}
function N({
  threshold: e,
  delay: t,
  trackVisibility: l,
  rootMargin: i,
  root: o,
  triggerOnce: u,
  skip: n,
  initialInView: d,
  fallbackInView: f,
  onChange: s
} = {}) {
  var y;
  const [m, h] = k.useState(null), g = k.useRef(s), [c, R] = k.useState({
    inView: !!d,
    entry: void 0
  });
  g.current = s, k.useEffect(
    () => {
      if (n || !m) return;
      let S;
      return S = K(
        m,
        (w, r) => {
          R({
            inView: w,
            entry: r
          }), g.current && g.current(w, r), r.isIntersecting && u && S && (S(), S = void 0);
        },
        {
          root: o,
          rootMargin: i,
          threshold: e,
          // @ts-ignore
          trackVisibility: l,
          // @ts-ignore
          delay: t
        },
        f
      ), () => {
        S && S();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(e) ? e.toString() : e,
      m,
      o,
      i,
      u,
      n,
      l,
      f,
      t
    ]
  );
  const x = (y = c.entry) == null ? void 0 : y.target, j = k.useRef(void 0);
  !m && x && !u && !n && j.current !== x && (j.current = x, R({
    inView: !!d,
    entry: void 0
  }));
  const b = [h, c.inView, c.entry];
  return b.ref = b[0], b.inView = b[1], b.entry = b[2], b;
}
const E = {
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
function P(e) {
  return typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column";
}
function ee(e) {
  return typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column";
}
function te(e, t, l) {
  const i = l.find(
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
function de({
  rows: e,
  columns: t,
  onEndReached: l,
  onSelectionChange: i,
  onSortChange: o,
  showSelectionCheckboxes: u = !0,
  classNames: n,
  variant: d = "unstyled",
  isLoading: f = !1,
  childrenProps: s,
  ...y
}) {
  const {
    isAllChecked: m,
    sortConfig: h,
    handleSelectionChange: g,
    handleSelectAll: c,
    handleSortChange: R,
    isRowSelected: x
  } = q({
    rows: e,
    onSelectionChange: i,
    onSortChange: o
  }), { inView: j } = N({
    threshold: 0.5,
    rootMargin: "100px"
  });
  if (D(() => {
    j && (l == null || l());
  }, [j, l]), f)
    return /* @__PURE__ */ a.jsx(
      J,
      {
        columns: t.length,
        checkboxSelection: u,
        variant: d,
        rows: e.length
      }
    );
  const b = E[d], S = [
    ...u === !0 ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...t.map((r, p) => ({
      ...r,
      key: typeof r.field == "string" ? String(r.field) : String(p),
      label: r.header
    }))
  ], w = (r) => {
    const p = t.find(
      (T) => typeof T.field == "string" && T.field.length > 0 && String(T.field) === r.key
    ), A = p == null ? void 0 : p.field;
    A != null && A !== "actions" && R(
      A,
      h.direction === "asc" ? "desc" : "asc"
    );
  };
  return /* @__PURE__ */ a.jsxs(B, { "aria-label": "data-grid", "aria-labelledby": "data-grid", ...y, children: [
    /* @__PURE__ */ a.jsx(
      G,
      {
        "aria-label": "data-grid-header",
        "aria-labelledby": "data-grid-header",
        columns: S,
        className: v(b.header),
        ...s == null ? void 0 : s.tableHeaderProps,
        children: (r) => /* @__PURE__ */ a.jsx(
          M,
          {
            "aria-labelledby": r.key,
            "aria-label": P(r),
            className: v(b.column),
            ...s == null ? void 0 : s.tableColumnProps,
            children: r.key === "checkbox" && u ? /* @__PURE__ */ a.jsx(
              z,
              {
                isSelected: m,
                onValueChange: c,
                "aria-label": "Select all rows",
                className: n == null ? void 0 : n.checkbox
              }
            ) : /* @__PURE__ */ a.jsxs("div", { className: v("flex items-center gap-2"), children: [
              r.label,
              r.sortable === !0 && /* @__PURE__ */ a.jsxs(
                "div",
                {
                  className: v(
                    "relative size-4 cursor-pointer",
                    n == null ? void 0 : n.sortIcon
                  ),
                  onClick: () => w(r),
                  role: "button",
                  "aria-label": ee(r.label),
                  children: [
                    /* @__PURE__ */ a.jsx(
                      F,
                      {
                        size: 16,
                        className: v(
                          "absolute -top-1",
                          h.key === r.key && h.direction === "asc" ? "opacity-100" : "opacity-30"
                        )
                      }
                    ),
                    /* @__PURE__ */ a.jsx(
                      U,
                      {
                        size: 16,
                        className: v(
                          "absolute top-1",
                          h.key === r.key && h.direction === "desc" ? "opacity-100" : "opacity-30"
                        )
                      }
                    )
                  ]
                }
              )
            ] })
          },
          r.key
        )
      }
    ),
    /* @__PURE__ */ a.jsx(L, { items: e, ...s == null ? void 0 : s.tableBodyProps, children: (r) => /* @__PURE__ */ a.jsx(
      O,
      {
        "aria-label": `Row ${r.id}`,
        "aria-labelledby": `Row ${r.id}`,
        className: v(b.row),
        ...s == null ? void 0 : s.tableRowProps,
        children: (p) => /* @__PURE__ */ a.jsx(H, { ...s == null ? void 0 : s.tableCellProps, children: p === "checkbox" && u ? /* @__PURE__ */ a.jsx(
          z,
          {
            checked: x(r),
            onValueChange: () => g({
              row: r,
              isSelected: !x(r)
            }),
            "aria-label": `Select row ${r.id}`,
            className: n == null ? void 0 : n.checkbox
          }
        ) : /* @__PURE__ */ a.jsx("div", { className: n == null ? void 0 : n.cellContent, children: te(p, r, t) }) })
      },
      r.id
    ) })
  ] });
}
export {
  de as DataGrid
};
