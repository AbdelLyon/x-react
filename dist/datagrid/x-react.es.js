/* empty css                */
import { j as a } from "../jsx-runtime-Dx-03ztt.js";
import * as C from "react";
import { useState as V, useEffect as D } from "react";
import { cn as v } from "../utils/x-react.es.js";
import { Table as B, TableHeader as G, TableColumn as M, Skeleton as R, TableBody as L, TableRow as O, TableCell as H, Checkbox as z } from "@nextui-org/react";
import { IconChevronUp as F, IconChevronDown as U } from "@tabler/icons-react";
const W = {
  key: null,
  direction: "asc"
}, q = ({
  rows: e,
  onCheckedRowsChange: t,
  onSort: l
}) => {
  const [r, d] = V([]), [u, i] = V(!1), [o, f] = V(W);
  return D(() => {
    i(r.length === e.length && e.length > 0);
  }, [r, e]), {
    selectedRows: r,
    isAllChecked: u,
    sortConfig: o,
    handleCheckboxChange: (c) => {
      const m = r.some((h) => h.id === c.id) ? r.filter((h) => h.id !== c.id) : [...r, c];
      d(m), t == null || t(m);
    },
    handleSelectAll: (c) => {
      const b = c ? [...e] : [];
      d(b), t == null || t(b);
    },
    handleSort: (c, b) => {
      f({ key: c, direction: b }), l == null || l(c, b);
    },
    isRowSelected: (c) => r.some((b) => b.id === c.id)
  };
}, J = ({
  columns: e = 5,
  rows: t = 5,
  checkboxSelection: l = !0,
  variant: r = "unstyled",
  className: d
}) => {
  const u = E[r], i = l ? e + 1 : e;
  return /* @__PURE__ */ a.jsxs(B, { radius: "sm", "aria-label": "Loading data", className: d, children: [
    /* @__PURE__ */ a.jsx(G, { className: v(u.header), children: Array(i).fill(null).map((o, f) => /* @__PURE__ */ a.jsx(M, { className: v(u.column), children: f === 0 && l ? /* @__PURE__ */ a.jsx(R, { className: "size-4 rounded-md" }) : /* @__PURE__ */ a.jsx(R, { className: "h-4 w-24 rounded-md" }) }, f)) }),
    /* @__PURE__ */ a.jsx(L, { children: Array(t).fill(null).map((o, f) => /* @__PURE__ */ a.jsx(O, { className: v(u.row), children: Array(i).fill(null).map((s, g) => /* @__PURE__ */ a.jsx(H, { children: g === 0 && l ? /* @__PURE__ */ a.jsx(R, { className: "size-4 rounded-md" }) : /* @__PURE__ */ a.jsx(R, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, g)) }, f)) })
  ] });
};
var _ = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new WeakMap(), $ = 0, Q = void 0;
function X(e) {
  return e ? (T.has(e) || ($ += 1, T.set(e, $.toString())), T.get(e)) : "0";
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
    const r = /* @__PURE__ */ new Map();
    let d;
    const u = new IntersectionObserver((i) => {
      i.forEach((o) => {
        var f;
        const s = o.isIntersecting && d.some((g) => o.intersectionRatio >= g);
        e.trackVisibility && typeof o.isVisible > "u" && (o.isVisible = s), (f = r.get(o.target)) == null || f.forEach((g) => {
          g(s, o);
        });
      });
    }, e);
    d = u.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), l = {
      id: t,
      observer: u,
      elements: r
    }, _.set(t, l);
  }
  return l;
}
function K(e, t, l = {}, r = Q) {
  if (typeof window.IntersectionObserver > "u" && r !== void 0) {
    const f = e.getBoundingClientRect();
    return t(r, {
      isIntersecting: r,
      target: e,
      intersectionRatio: typeof l.threshold == "number" ? l.threshold : 0,
      time: 0,
      boundingClientRect: f,
      intersectionRect: f,
      rootBounds: f
    }), () => {
    };
  }
  const { id: d, observer: u, elements: i } = Z(l), o = i.get(e) || [];
  return i.has(e) || i.set(e, o), o.push(t), u.observe(e), function() {
    o.splice(o.indexOf(t), 1), o.length === 0 && (i.delete(e), u.unobserve(e)), i.size === 0 && (u.disconnect(), _.delete(d));
  };
}
function N({
  threshold: e,
  delay: t,
  trackVisibility: l,
  rootMargin: r,
  root: d,
  triggerOnce: u,
  skip: i,
  initialInView: o,
  fallbackInView: f,
  onChange: s
} = {}) {
  var g;
  const [p, x] = C.useState(null), c = C.useRef(s), [b, m] = C.useState({
    inView: !!o,
    entry: void 0
  });
  c.current = s, C.useEffect(
    () => {
      if (i || !p) return;
      let S;
      return S = K(
        p,
        (k, n) => {
          m({
            inView: k,
            entry: n
          }), c.current && c.current(k, n), n.isIntersecting && u && S && (S(), S = void 0);
        },
        {
          root: d,
          rootMargin: r,
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
      p,
      d,
      r,
      u,
      i,
      l,
      f,
      t
    ]
  );
  const h = (g = b.entry) == null ? void 0 : g.target, A = C.useRef(void 0);
  !p && h && !u && !i && A.current !== h && (A.current = h, m({
    inView: !!o,
    entry: void 0
  }));
  const y = [x, b.inView, b.entry];
  return y.ref = y[0], y.inView = y[1], y.entry = y[2], y;
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
  const r = l.find(
    (d) => typeof d.field == "string" && String(d.field) === String(e)
  );
  if (r === void 0)
    return null;
  if (r.cell !== void 0)
    return r.cell(t);
  if (typeof r.field == "string" && r.field.length > 0 && r.field in t) {
    const d = t[r.field];
    return typeof d == "string" || typeof d == "number" ? String(d) : null;
  }
  return null;
}
function oe({
  rows: e,
  columns: t,
  onEndReached: l,
  onCheckedRowsChange: r,
  onSort: d,
  checkboxSelection: u = !0,
  classNames: i,
  variant: o = "unstyled",
  isLoading: f = !1,
  childrenProps: s,
  ...g
}) {
  const {
    isAllChecked: p,
    sortConfig: x,
    handleCheckboxChange: c,
    handleSelectAll: b,
    handleSort: m,
    isRowSelected: h
  } = q({
    rows: e,
    onCheckedRowsChange: r,
    onSort: d
  }), { inView: A } = N({
    threshold: 0.5,
    rootMargin: "100px"
  });
  if (D(() => {
    A && (l == null || l());
  }, [A, l]), f)
    return /* @__PURE__ */ a.jsx(
      J,
      {
        columns: t.length,
        checkboxSelection: u,
        variant: o,
        rows: e.length
      }
    );
  const y = E[o], S = [
    ...u === !0 ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...t.map((n, j) => ({
      ...n,
      key: typeof n.field == "string" ? String(n.field) : String(j),
      label: n.header
    }))
  ], k = (n) => {
    const j = t.find(
      (w) => typeof w.field == "string" && w.field.length > 0 && String(w.field) === n.key
    ), I = j == null ? void 0 : j.field;
    I != null && I !== "actions" && m(I, x.direction === "asc" ? "desc" : "asc");
  };
  return /* @__PURE__ */ a.jsxs(B, { "aria-label": "data-grid", "aria-labelledby": "data-grid", ...g, children: [
    /* @__PURE__ */ a.jsx(
      G,
      {
        "aria-label": "data-grid-header",
        "aria-labelledby": "data-grid-header",
        columns: S,
        className: v(y.header),
        ...s == null ? void 0 : s.tableHeaderProps,
        children: (n) => /* @__PURE__ */ a.jsx(
          M,
          {
            "aria-labelledby": n.key,
            "aria-label": P(n),
            className: v(y.column),
            ...s == null ? void 0 : s.tableColumnProps,
            children: n.key === "checkbox" ? /* @__PURE__ */ a.jsx(
              z,
              {
                isSelected: p,
                onValueChange: b,
                "aria-label": "Select all rows",
                className: i == null ? void 0 : i.checkbox
              }
            ) : /* @__PURE__ */ a.jsxs("div", { className: v("flex items-center gap-2"), children: [
              n.label,
              n.sortable === !0 && /* @__PURE__ */ a.jsxs(
                "div",
                {
                  className: v(
                    "relative size-4 cursor-pointer",
                    i == null ? void 0 : i.sortIcon
                  ),
                  onClick: () => k(n),
                  role: "button",
                  "aria-label": ee(n.label),
                  children: [
                    /* @__PURE__ */ a.jsx(
                      F,
                      {
                        size: 16,
                        className: v(
                          "absolute -top-1",
                          x.key === n.key && x.direction === "asc" ? "opacity-100" : "opacity-30"
                        )
                      }
                    ),
                    /* @__PURE__ */ a.jsx(
                      U,
                      {
                        size: 16,
                        className: v(
                          "absolute top-1",
                          x.key === n.key && x.direction === "desc" ? "opacity-100" : "opacity-30"
                        )
                      }
                    )
                  ]
                }
              )
            ] })
          },
          n.key
        )
      }
    ),
    /* @__PURE__ */ a.jsx(L, { items: e, ...s == null ? void 0 : s.tableBodyProps, children: (n) => /* @__PURE__ */ a.jsx(
      O,
      {
        "aria-label": `Row ${n.id}`,
        "aria-labelledby": `Row ${n.id}`,
        className: v(y.row),
        ...s == null ? void 0 : s.tableRowProps,
        children: (j) => /* @__PURE__ */ a.jsx(H, { ...s == null ? void 0 : s.tableCellProps, children: j === "checkbox" ? /* @__PURE__ */ a.jsx(
          z,
          {
            isSelected: h(n),
            onValueChange: () => c(n),
            "aria-label": `Select row ${n.id}`,
            className: i == null ? void 0 : i.checkbox
          }
        ) : /* @__PURE__ */ a.jsx("div", { className: i == null ? void 0 : i.cellContent, children: te(j, n, t) }) })
      },
      n.id
    ) })
  ] });
}
export {
  oe as DataGrid
};
