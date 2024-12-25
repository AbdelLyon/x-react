/* empty css                */
import { j as a } from "../jsx-runtime-Dx-03ztt.js";
import * as k from "react";
import { useState as V, useEffect as D } from "react";
import { cn as h } from "../utils/x-react.es.js";
import { Table as B, TableHeader as G, TableColumn as M, Skeleton as w, TableBody as L, TableRow as O, TableCell as H, Checkbox as z } from "@nextui-org/react";
import { IconChevronUp as F, IconChevronDown as U } from "@tabler/icons-react";
const W = {
  key: null,
  direction: "asc"
}, q = ({
  rows: e,
  onSelectionChange: t,
  onSortChange: l
}) => {
  const [r, o] = V([]), [u, i] = V(!1), [d, f] = V(W);
  return D(() => {
    i(r.length === e.length && e.length > 0);
  }, [r, e]), {
    selectedRows: r,
    isAllChecked: u,
    sortConfig: d,
    handleSelectionChange: (b) => {
      let c;
      r.some((y) => y.id === b.id) ? c = r.filter((y) => y.id !== b.id) : c = [
        ...e.filter((y) => r.some((m) => m.id === y.id)),
        b
      ], o(c), t == null || t(c);
    },
    handleSelectAll: (b) => {
      const c = b ? [...e] : [];
      o(c), t == null || t(c);
    },
    handleSortChange: (b, c) => {
      f({ key: b, direction: c }), l == null || l(b, c);
    },
    isRowSelected: (b) => r.some((c) => c.id === b.id)
  };
}, J = ({
  columns: e = 5,
  rows: t = 5,
  checkboxSelection: l = !0,
  variant: r = "unstyled",
  className: o
}) => {
  const u = E[r], i = l ? e + 1 : e;
  return /* @__PURE__ */ a.jsxs(B, { radius: "sm", "aria-label": "Loading data", className: o, children: [
    /* @__PURE__ */ a.jsx(G, { className: h(u.header), children: Array(i).fill(null).map((d, f) => /* @__PURE__ */ a.jsx(M, { className: h(u.column), children: f === 0 && l ? /* @__PURE__ */ a.jsx(w, { className: "size-4 rounded-md" }) : /* @__PURE__ */ a.jsx(w, { className: "h-4 w-24 rounded-md" }) }, f)) }),
    /* @__PURE__ */ a.jsx(L, { children: Array(t).fill(null).map((d, f) => /* @__PURE__ */ a.jsx(O, { className: h(u.row), children: Array(i).fill(null).map((s, g) => /* @__PURE__ */ a.jsx(H, { children: g === 0 && l ? /* @__PURE__ */ a.jsx(w, { className: "size-4 rounded-md" }) : /* @__PURE__ */ a.jsx(w, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, g)) }, f)) })
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
    const r = /* @__PURE__ */ new Map();
    let o;
    const u = new IntersectionObserver((i) => {
      i.forEach((d) => {
        var f;
        const s = d.isIntersecting && o.some((g) => d.intersectionRatio >= g);
        e.trackVisibility && typeof d.isVisible > "u" && (d.isVisible = s), (f = r.get(d.target)) == null || f.forEach((g) => {
          g(s, d);
        });
      });
    }, e);
    o = u.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), l = {
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
  const { id: o, observer: u, elements: i } = Z(l), d = i.get(e) || [];
  return i.has(e) || i.set(e, d), d.push(t), u.observe(e), function() {
    d.splice(d.indexOf(t), 1), d.length === 0 && (i.delete(e), u.unobserve(e)), i.size === 0 && (u.disconnect(), _.delete(o));
  };
}
function N({
  threshold: e,
  delay: t,
  trackVisibility: l,
  rootMargin: r,
  root: o,
  triggerOnce: u,
  skip: i,
  initialInView: d,
  fallbackInView: f,
  onChange: s
} = {}) {
  var g;
  const [p, x] = k.useState(null), b = k.useRef(s), [c, R] = k.useState({
    inView: !!d,
    entry: void 0
  });
  b.current = s, k.useEffect(
    () => {
      if (i || !p) return;
      let j;
      return j = K(
        p,
        (A, n) => {
          R({
            inView: A,
            entry: n
          }), b.current && b.current(A, n), n.isIntersecting && u && j && (j(), j = void 0);
        },
        {
          root: o,
          rootMargin: r,
          threshold: e,
          // @ts-ignore
          trackVisibility: l,
          // @ts-ignore
          delay: t
        },
        f
      ), () => {
        j && j();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(e) ? e.toString() : e,
      p,
      o,
      r,
      u,
      i,
      l,
      f,
      t
    ]
  );
  const y = (g = c.entry) == null ? void 0 : g.target, m = k.useRef(void 0);
  !p && y && !u && !i && m.current !== y && (m.current = y, R({
    inView: !!d,
    entry: void 0
  }));
  const v = [x, c.inView, c.entry];
  return v.ref = v[0], v.inView = v[1], v.entry = v[2], v;
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
    (o) => typeof o.field == "string" && String(o.field) === String(e)
  );
  if (r === void 0)
    return null;
  if (r.cell !== void 0)
    return r.cell(t);
  if (typeof r.field == "string" && r.field.length > 0 && r.field in t) {
    const o = t[r.field];
    return typeof o == "string" || typeof o == "number" ? String(o) : null;
  }
  return null;
}
function de({
  rows: e,
  columns: t,
  onEndReached: l,
  onSelectionChange: r,
  onSortChange: o,
  showSelectionCheckboxes: u = !0,
  classNames: i,
  variant: d = "unstyled",
  isLoading: f = !1,
  childrenProps: s,
  ...g
}) {
  const {
    isAllChecked: p,
    sortConfig: x,
    handleSelectionChange: b,
    handleSelectAll: c,
    handleSortChange: R,
    isRowSelected: y
  } = q({
    rows: e,
    onSelectionChange: r,
    onSortChange: o
  }), { inView: m } = N({
    threshold: 0.5,
    rootMargin: "100px"
  });
  if (D(() => {
    m && (l == null || l());
  }, [m, l]), f)
    return /* @__PURE__ */ a.jsx(
      J,
      {
        columns: t.length,
        checkboxSelection: u,
        variant: d,
        rows: e.length
      }
    );
  const v = E[d], j = [
    ...u === !0 ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...t.map((n, S) => ({
      ...n,
      key: typeof n.field == "string" ? String(n.field) : String(S),
      label: n.header
    }))
  ], A = (n) => {
    const S = t.find(
      (T) => typeof T.field == "string" && T.field.length > 0 && String(T.field) === n.key
    ), C = S == null ? void 0 : S.field;
    C != null && C !== "actions" && R(
      C,
      x.direction === "asc" ? "desc" : "asc"
    );
  };
  return /* @__PURE__ */ a.jsxs(B, { "aria-label": "data-grid", "aria-labelledby": "data-grid", ...g, children: [
    /* @__PURE__ */ a.jsx(
      G,
      {
        "aria-label": "data-grid-header",
        "aria-labelledby": "data-grid-header",
        columns: j,
        className: h(v.header),
        ...s == null ? void 0 : s.tableHeaderProps,
        children: (n) => /* @__PURE__ */ a.jsx(
          M,
          {
            "aria-labelledby": n.key,
            "aria-label": P(n),
            className: h(v.column),
            ...s == null ? void 0 : s.tableColumnProps,
            children: n.key === "checkbox" && u ? /* @__PURE__ */ a.jsx(
              z,
              {
                isSelected: p,
                onValueChange: c,
                "aria-label": "Select all rows",
                className: i == null ? void 0 : i.checkbox
              }
            ) : /* @__PURE__ */ a.jsxs("div", { className: h("flex items-center gap-2"), children: [
              n.label,
              n.sortable === !0 && /* @__PURE__ */ a.jsxs(
                "div",
                {
                  className: h(
                    "relative size-4 cursor-pointer",
                    i == null ? void 0 : i.sortIcon
                  ),
                  onClick: () => A(n),
                  role: "button",
                  "aria-label": ee(n.label),
                  children: [
                    /* @__PURE__ */ a.jsx(
                      F,
                      {
                        size: 16,
                        className: h(
                          "absolute -top-1",
                          x.key === n.key && x.direction === "asc" ? "opacity-100" : "opacity-30"
                        )
                      }
                    ),
                    /* @__PURE__ */ a.jsx(
                      U,
                      {
                        size: 16,
                        className: h(
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
        className: h(v.row),
        ...s == null ? void 0 : s.tableRowProps,
        children: (S) => /* @__PURE__ */ a.jsx(H, { ...s == null ? void 0 : s.tableCellProps, children: S === "checkbox" && u ? /* @__PURE__ */ a.jsx(
          z,
          {
            checked: y(n),
            onValueChange: () => b(n),
            "aria-label": `Select row ${n.id}`,
            className: i == null ? void 0 : i.checkbox
          }
        ) : /* @__PURE__ */ a.jsx("div", { className: i == null ? void 0 : i.cellContent, children: te(S, n, t) }) })
      },
      n.id
    ) })
  ] });
}
export {
  de as DataGrid
};
