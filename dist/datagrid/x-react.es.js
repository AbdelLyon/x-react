/* empty css                */
import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import * as k from "react";
import { useState as V, useEffect as D } from "react";
import { cn as g } from "../utils/x-react.es.js";
import { Table as B, TableHeader as G, TableColumn as M, Skeleton as I, TableBody as L, TableRow as O, TableCell as H, Checkbox as _ } from "@nextui-org/react";
import { IconChevronUp as F, IconChevronDown as U } from "@tabler/icons-react";
const W = ({
  rows: e,
  onSelectionChange: t
}) => {
  const [r, l] = V(/* @__PURE__ */ new Set()), [d, s] = V(!1);
  return D(() => {
    s(r.size === e.length);
  }, [r, e]), {
    isAllChecked: d,
    checkedRows: r,
    handleSelectionChange: (u, a) => {
      l((b) => (a ? b.delete(u) : b.add(u), t == null || t(Array.from(b)), b));
    },
    handleSelectAll: (u) => {
      const a = u ? new Set(e) : /* @__PURE__ */ new Set();
      l(a), t == null || t(Array.from(a));
    }
  };
}, q = { key: null, direction: "asc" }, J = ({
  onSortChange: e
}) => {
  const [t, r] = V(q);
  return { sortConfig: t, handleSortChange: (d, s) => {
    r({ key: d, direction: s }), e == null || e(d, s);
  } };
}, Q = ({
  rows: e,
  onSelectionChange: t,
  onSortChange: r
}) => ({
  ...W({ rows: e, onSelectionChange: t }),
  ...J({ onSortChange: r })
}), E = {
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
}, X = ({
  columns: e = 5,
  rows: t = 5,
  checkboxSelection: r = !0,
  variant: l = "unstyled",
  className: d
}) => {
  const s = E[l], i = r ? e + 1 : e;
  return /* @__PURE__ */ o.jsxs(B, { radius: "sm", "aria-label": "Loading data", className: d, children: [
    /* @__PURE__ */ o.jsx(G, { className: g(s.header), children: Array(i).fill(null).map((f, u) => /* @__PURE__ */ o.jsx(M, { className: g(s.column), children: u === 0 && r ? /* @__PURE__ */ o.jsx(I, { className: "size-4 rounded-md" }) : /* @__PURE__ */ o.jsx(I, { className: "h-4 w-24 rounded-md" }) }, u)) }),
    /* @__PURE__ */ o.jsx(L, { children: Array(t).fill(null).map((f, u) => /* @__PURE__ */ o.jsx(O, { className: g(s.row), children: Array(i).fill(null).map((a, b) => /* @__PURE__ */ o.jsx(H, { children: b === 0 && r ? /* @__PURE__ */ o.jsx(I, { className: "size-4 rounded-md" }) : /* @__PURE__ */ o.jsx(I, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, b)) }, u)) })
  ] });
};
var z = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new WeakMap(), $ = 0, Y = void 0;
function Z(e) {
  return e ? (R.has(e) || ($ += 1, R.set(e, $.toString())), R.get(e)) : "0";
}
function K(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? Z(e.root) : e[t]}`).toString();
}
function N(e) {
  const t = K(e);
  let r = z.get(t);
  if (!r) {
    const l = /* @__PURE__ */ new Map();
    let d;
    const s = new IntersectionObserver((i) => {
      i.forEach((f) => {
        var u;
        const a = f.isIntersecting && d.some((b) => f.intersectionRatio >= b);
        e.trackVisibility && typeof f.isVisible > "u" && (f.isVisible = a), (u = l.get(f.target)) == null || u.forEach((b) => {
          b(a, f);
        });
      });
    }, e);
    d = s.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = {
      id: t,
      observer: s,
      elements: l
    }, z.set(t, r);
  }
  return r;
}
function P(e, t, r = {}, l = Y) {
  if (typeof window.IntersectionObserver > "u" && l !== void 0) {
    const u = e.getBoundingClientRect();
    return t(l, {
      isIntersecting: l,
      target: e,
      intersectionRatio: typeof r.threshold == "number" ? r.threshold : 0,
      time: 0,
      boundingClientRect: u,
      intersectionRect: u,
      rootBounds: u
    }), () => {
    };
  }
  const { id: d, observer: s, elements: i } = N(r), f = i.get(e) || [];
  return i.has(e) || i.set(e, f), f.push(t), s.observe(e), function() {
    f.splice(f.indexOf(t), 1), f.length === 0 && (i.delete(e), s.unobserve(e)), i.size === 0 && (s.disconnect(), z.delete(d));
  };
}
function ee({
  threshold: e,
  delay: t,
  trackVisibility: r,
  rootMargin: l,
  root: d,
  triggerOnce: s,
  skip: i,
  initialInView: f,
  fallbackInView: u,
  onChange: a
} = {}) {
  var b;
  const [j, T] = k.useState(null), y = k.useRef(a), [S, A] = k.useState({
    inView: !!f,
    entry: void 0
  });
  y.current = a, k.useEffect(
    () => {
      if (i || !j) return;
      let h;
      return h = P(
        j,
        (C, n) => {
          A({
            inView: C,
            entry: n
          }), y.current && y.current(C, n), n.isIntersecting && s && h && (h(), h = void 0);
        },
        {
          root: d,
          rootMargin: l,
          threshold: e,
          // @ts-ignore
          trackVisibility: r,
          // @ts-ignore
          delay: t
        },
        u
      ), () => {
        h && h();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(e) ? e.toString() : e,
      j,
      d,
      l,
      s,
      i,
      r,
      u,
      t
    ]
  );
  const p = (b = S.entry) == null ? void 0 : b.target, m = k.useRef(void 0);
  !j && p && !s && !i && m.current !== p && (m.current = p, A({
    inView: !!f,
    entry: void 0
  }));
  const c = [T, S.inView, S.entry];
  return c.ref = c[0], c.inView = c[1], c.entry = c[2], c;
}
function te(e) {
  return typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column";
}
function re(e) {
  return typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column";
}
function ne(e, t, r) {
  const l = r.find(
    (d) => typeof d.field == "string" && String(d.field) === String(e)
  );
  if (l === void 0)
    return null;
  if (l.cell !== void 0)
    return l.cell(t);
  if (typeof l.field == "string" && l.field.length > 0 && l.field in t) {
    const d = t[l.field];
    return typeof d == "string" || typeof d == "number" ? String(d) : null;
  }
  return null;
}
function ue({
  rows: e,
  columns: t,
  onEndReached: r,
  onSelectionChange: l,
  onSortChange: d,
  showSelectionCheckboxes: s = !0,
  classNames: i,
  variant: f = "unstyled",
  isLoading: u = !1,
  childrenProps: a,
  selectedRows: b,
  ...j
}) {
  const {
    isAllChecked: T,
    sortConfig: y,
    handleSelectionChange: S,
    handleSelectAll: A,
    handleSortChange: p
  } = Q({
    rows: e,
    onSelectionChange: l,
    onSortChange: d
  }), { inView: m } = ee({
    threshold: 0.5,
    rootMargin: "100px"
  });
  if (D(() => {
    m && (r == null || r());
  }, [m, r]), u)
    return /* @__PURE__ */ o.jsx(
      X,
      {
        columns: t.length,
        checkboxSelection: s,
        variant: f,
        rows: e.length
      }
    );
  const c = E[f], h = [
    ...s === !0 ? [
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
  ], C = (n) => {
    const v = t.find(
      (w) => typeof w.field == "string" && w.field.length > 0 && String(w.field) === n.key
    ), x = v == null ? void 0 : v.field;
    x != null && x !== "actions" && p(
      x,
      y.direction === "asc" ? "desc" : "asc"
    );
  };
  return console.log(b), /* @__PURE__ */ o.jsxs(B, { "aria-label": "data-grid", "aria-labelledby": "data-grid", ...j, children: [
    /* @__PURE__ */ o.jsx(
      G,
      {
        "aria-label": "data-grid-header",
        "aria-labelledby": "data-grid-header",
        columns: h,
        className: g(c.header),
        ...a == null ? void 0 : a.tableHeaderProps,
        children: (n) => /* @__PURE__ */ o.jsx(
          M,
          {
            "aria-labelledby": n.key,
            "aria-label": te(n),
            className: g(c.column),
            ...a == null ? void 0 : a.tableColumnProps,
            children: n.key === "checkbox" && s ? /* @__PURE__ */ o.jsx(
              _,
              {
                isSelected: T,
                onValueChange: A,
                "aria-label": "Select all rows",
                className: i == null ? void 0 : i.checkbox
              }
            ) : /* @__PURE__ */ o.jsxs("div", { className: g("flex items-center gap-2"), children: [
              n.label,
              n.sortable === !0 && /* @__PURE__ */ o.jsxs(
                "div",
                {
                  className: g(
                    "relative size-4 cursor-pointer",
                    i == null ? void 0 : i.sortIcon
                  ),
                  onClick: () => C(n),
                  role: "button",
                  "aria-label": re(n.label),
                  children: [
                    /* @__PURE__ */ o.jsx(
                      F,
                      {
                        size: 16,
                        className: g(
                          "absolute -top-1",
                          y.key === n.key && y.direction === "asc" ? "opacity-100" : "opacity-30"
                        )
                      }
                    ),
                    /* @__PURE__ */ o.jsx(
                      U,
                      {
                        size: 16,
                        className: g(
                          "absolute top-1",
                          y.key === n.key && y.direction === "desc" ? "opacity-100" : "opacity-30"
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
    /* @__PURE__ */ o.jsx(L, { items: e, ...a == null ? void 0 : a.tableBodyProps, children: (n) => /* @__PURE__ */ o.jsx(
      O,
      {
        "aria-label": `Row ${n.id}`,
        "aria-labelledby": `Row ${n.id}`,
        className: g(c.row),
        ...a == null ? void 0 : a.tableRowProps,
        children: (v) => /* @__PURE__ */ o.jsx(H, { ...a == null ? void 0 : a.tableCellProps, children: v === "checkbox" && s ? /* @__PURE__ */ o.jsx(
          _,
          {
            isSelected: b == null ? void 0 : b.includes(n),
            onValueChange: (x) => {
              x && S(n, x);
            },
            "aria-label": `Select row ${n.id}`,
            className: i == null ? void 0 : i.checkbox
          }
        ) : /* @__PURE__ */ o.jsx("div", { className: i == null ? void 0 : i.cellContent, children: ne(v, n, t) }) })
      },
      n.id
    ) })
  ] });
}
export {
  ue as DataGrid
};
