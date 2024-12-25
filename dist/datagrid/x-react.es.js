/* empty css                */
import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import * as R from "react";
import { useState as z, useEffect as B } from "react";
import { cn as g } from "../utils/x-react.es.js";
import { Table as G, TableHeader as M, TableColumn as N, Skeleton as T, TableBody as $, TableRow as L, TableCell as O, Checkbox as C } from "@nextui-org/react";
import { IconChevronUp as E, IconChevronDown as F } from "@tabler/icons-react";
const U = ({
  rows: e,
  onSelectionChange: t
}) => {
  const [r, i] = z(/* @__PURE__ */ new Set()), [d, a] = z(!1);
  return B(() => {
    a(r.size === e.length);
  }, [r, e]), {
    selectedRows: r,
    allRowsSelected: d,
    toggleRowSelection: (u) => {
      i((s) => {
        const c = new Set(s);
        return c.has(u) ? c.delete(u) : c.add(u), t == null || t(Array.from(c)), c;
      });
    },
    toggleAllRowsSelection: (u) => {
      const s = u ? new Set(e) : /* @__PURE__ */ new Set();
      i(s), t == null || t(Array.from(s));
    }
  };
}, W = ({
  onSortChange: e
}) => {
  const [t, r] = z({
    key: null,
    direction: "asc"
  });
  return { sortConfiguration: t, updateSort: (d, a) => {
    r({ key: d, direction: a }), e == null || e(d, a);
  } };
}, q = (e) => ({
  ...U(e),
  ...W(e)
}), H = {
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
}, J = ({
  columns: e = 5,
  rows: t = 5,
  checkboxSelection: r = !0,
  variant: i = "unstyled",
  className: d
}) => {
  const a = H[i], l = r ? e + 1 : e;
  return /* @__PURE__ */ o.jsxs(G, { radius: "sm", "aria-label": "Loading data", className: d, children: [
    /* @__PURE__ */ o.jsx(M, { className: g(a.header), children: Array(l).fill(null).map((f, u) => /* @__PURE__ */ o.jsx(N, { className: g(a.column), children: u === 0 && r ? /* @__PURE__ */ o.jsx(T, { className: "size-4 rounded-md" }) : /* @__PURE__ */ o.jsx(T, { className: "h-4 w-24 rounded-md" }) }, u)) }),
    /* @__PURE__ */ o.jsx($, { children: Array(t).fill(null).map((f, u) => /* @__PURE__ */ o.jsx(L, { className: g(a.row), children: Array(l).fill(null).map((s, c) => /* @__PURE__ */ o.jsx(O, { children: c === 0 && r ? /* @__PURE__ */ o.jsx(T, { className: "size-4 rounded-md" }) : /* @__PURE__ */ o.jsx(T, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, c)) }, u)) })
  ] });
};
var _ = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new WeakMap(), D = 0, Q = void 0;
function X(e) {
  return e ? (I.has(e) || (D += 1, I.set(e, D.toString())), I.get(e)) : "0";
}
function Y(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? X(e.root) : e[t]}`).toString();
}
function Z(e) {
  const t = Y(e);
  let r = _.get(t);
  if (!r) {
    const i = /* @__PURE__ */ new Map();
    let d;
    const a = new IntersectionObserver((l) => {
      l.forEach((f) => {
        var u;
        const s = f.isIntersecting && d.some((c) => f.intersectionRatio >= c);
        e.trackVisibility && typeof f.isVisible > "u" && (f.isVisible = s), (u = i.get(f.target)) == null || u.forEach((c) => {
          c(s, f);
        });
      });
    }, e);
    d = a.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = {
      id: t,
      observer: a,
      elements: i
    }, _.set(t, r);
  }
  return r;
}
function K(e, t, r = {}, i = Q) {
  if (typeof window.IntersectionObserver > "u" && i !== void 0) {
    const u = e.getBoundingClientRect();
    return t(i, {
      isIntersecting: i,
      target: e,
      intersectionRatio: typeof r.threshold == "number" ? r.threshold : 0,
      time: 0,
      boundingClientRect: u,
      intersectionRect: u,
      rootBounds: u
    }), () => {
    };
  }
  const { id: d, observer: a, elements: l } = Z(r), f = l.get(e) || [];
  return l.has(e) || l.set(e, f), f.push(t), a.observe(e), function() {
    f.splice(f.indexOf(t), 1), f.length === 0 && (l.delete(e), a.unobserve(e)), l.size === 0 && (a.disconnect(), _.delete(d));
  };
}
function P({
  threshold: e,
  delay: t,
  trackVisibility: r,
  rootMargin: i,
  root: d,
  triggerOnce: a,
  skip: l,
  initialInView: f,
  fallbackInView: u,
  onChange: s
} = {}) {
  var c;
  const [j, x] = R.useState(null), m = R.useRef(s), [S, h] = R.useState({
    inView: !!f,
    entry: void 0
  });
  m.current = s, R.useEffect(
    () => {
      if (l || !j) return;
      let y;
      return y = K(
        j,
        (A, n) => {
          h({
            inView: A,
            entry: n
          }), m.current && m.current(A, n), n.isIntersecting && a && y && (y(), y = void 0);
        },
        {
          root: d,
          rootMargin: i,
          threshold: e,
          // @ts-ignore
          trackVisibility: r,
          // @ts-ignore
          delay: t
        },
        u
      ), () => {
        y && y();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(e) ? e.toString() : e,
      j,
      d,
      i,
      a,
      l,
      r,
      u,
      t
    ]
  );
  const p = (c = S.entry) == null ? void 0 : c.target, w = R.useRef(void 0);
  !j && p && !a && !l && w.current !== p && (w.current = p, h({
    inView: !!f,
    entry: void 0
  }));
  const b = [x, S.inView, S.entry];
  return b.ref = b[0], b.inView = b[1], b.entry = b[2], b;
}
const ee = (e) => typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column", te = (e) => typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column", re = (e, t, r) => {
  const i = r.find(
    (d) => typeof d.field == "string" && String(d.field) === String(e)
  );
  if (i === void 0)
    return null;
  if (i.cell !== void 0)
    return i.cell(t);
  if (typeof i.field == "string" && i.field.length > 0 && i.field in t) {
    const d = t[i.field];
    return typeof d == "string" || typeof d == "number" ? String(d) : null;
  }
  return null;
};
function de({
  rows: e,
  columns: t,
  onEndReached: r,
  onSelectionChange: i,
  onSortChange: d,
  showSelectionCheckboxes: a = !0,
  classNames: l,
  variant: f = "unstyled",
  isLoading: u = !1,
  childrenProps: s,
  ...c
}) {
  const {
    allRowsSelected: j,
    sortConfiguration: x,
    toggleAllRowsSelection: m,
    toggleRowSelection: S,
    updateSort: h,
    selectedRows: p
  } = q({
    rows: e,
    onSelectionChange: i,
    onSortChange: d
  }), { inView: w } = P({ threshold: 0.5, rootMargin: "100px" });
  if (B(() => {
    w && (r == null || r());
  }, [w, r]), u)
    return /* @__PURE__ */ o.jsx(
      J,
      {
        columns: t.length,
        checkboxSelection: a,
        variant: f,
        rows: e.length
      }
    );
  const b = H[f], y = [
    ...a === !0 ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...t.map((n, v) => ({
      ...n,
      key: typeof n.field == "string" ? String(n.field) : String(v),
      label: n.header
    }))
  ], A = (n) => {
    const v = t.find(
      (V) => typeof V.field == "string" && V.field.length > 0 && String(V.field) === n.key
    ), k = v == null ? void 0 : v.field;
    k != null && k !== "actions" && h(
      k,
      x.direction === "asc" ? "desc" : "asc"
    );
  };
  return /* @__PURE__ */ o.jsxs(G, { "aria-label": "data-grid", ...c, children: [
    /* @__PURE__ */ o.jsx(
      M,
      {
        columns: y,
        className: g(b.header),
        ...s == null ? void 0 : s.tableHeaderProps,
        children: (n) => /* @__PURE__ */ o.jsx(
          N,
          {
            "aria-label": ee(n),
            className: g(b.column),
            ...s == null ? void 0 : s.tableColumnProps,
            children: n.key === "checkbox" && a ? /* @__PURE__ */ o.jsx(
              C,
              {
                isSelected: j,
                onValueChange: m,
                "aria-label": "Select all rows",
                className: l == null ? void 0 : l.checkbox
              }
            ) : /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2", children: [
              n.label,
              n.sortable !== !1 && /* @__PURE__ */ o.jsxs(
                "div",
                {
                  className: g("relative size-4 cursor-pointer"),
                  onClick: () => A(n),
                  role: "button",
                  "aria-label": te(n.label),
                  children: [
                    /* @__PURE__ */ o.jsx(
                      E,
                      {
                        size: 16,
                        className: g(
                          "absolute -top-1",
                          x.key === n.key && x.direction === "asc" ? "opacity-100" : "opacity-30"
                        )
                      }
                    ),
                    /* @__PURE__ */ o.jsx(
                      F,
                      {
                        size: 16,
                        className: g(
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
    /* @__PURE__ */ o.jsx($, { items: e, ...s == null ? void 0 : s.tableBodyProps, children: (n) => /* @__PURE__ */ o.jsx(
      L,
      {
        className: g(b.row),
        ...s == null ? void 0 : s.tableRowProps,
        children: (v) => /* @__PURE__ */ o.jsx(O, { ...s == null ? void 0 : s.tableCellProps, children: v === "checkbox" && a ? /* @__PURE__ */ o.jsx(
          C,
          {
            isSelected: p == null ? void 0 : p.has(n),
            onValueChange: () => S == null ? void 0 : S(n),
            "aria-label": `Select row ${n.id}`,
            className: l == null ? void 0 : l.checkbox
          }
        ) : /* @__PURE__ */ o.jsx("div", { className: l == null ? void 0 : l.cellContent, children: re(v, n, t) }) })
      },
      n.id
    ) })
  ] });
}
export {
  de as DataGrid
};
