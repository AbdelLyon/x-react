/* empty css                */
import { j as s } from "../jsx-runtime-Dx-03ztt.js";
import * as A from "react";
import { useState as B, useEffect as G } from "react";
import { cn as g } from "../utils/x-react.es.js";
import { Table as M, TableHeader as R, TableColumn as L, Skeleton as I, TableBody as O, TableRow as H, TableCell as E, Checkbox as $ } from "@nextui-org/react";
import { IconChevronUp as U, IconChevronDown as W } from "@tabler/icons-react";
const q = ({
  rows: e,
  onSelectionChange: t,
  selectedRows: r = []
}) => {
  const [l, u] = B(!1);
  return G(() => {
    u(r.length === e.length);
  }, [r, e]), {
    isAllChecked: l,
    handleSelectionChange: (a, f) => {
      f ? t == null || t([...r, a]) : t == null || t(r.filter((d) => d.id !== a.id));
    },
    handleSelectAll: (a) => {
      const f = a ? e : [];
      t == null || t(f);
    }
  };
}, w = { key: null, direction: "asc" }, J = ({
  onSortChange: e
}) => {
  const [t, r] = B(w);
  return { sortConfig: t, handleSortChange: (u, o) => {
    r({ key: u, direction: o }), e == null || e(u, o);
  } };
}, Q = ({
  rows: e,
  onSelectionChange: t,
  onSortChange: r
}) => ({
  ...q({ rows: e, onSelectionChange: t }),
  ...J({ onSortChange: r })
}), F = {
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
  className: u
}) => {
  const o = F[l], n = r ? e + 1 : e;
  return /* @__PURE__ */ s.jsxs(M, { radius: "sm", "aria-label": "Loading data", className: u, children: [
    /* @__PURE__ */ s.jsx(R, { className: g(o.header), children: Array(n).fill(null).map((a, f) => /* @__PURE__ */ s.jsx(L, { className: g(o.column), children: f === 0 && r ? /* @__PURE__ */ s.jsx(I, { className: "size-4 rounded-md" }) : /* @__PURE__ */ s.jsx(I, { className: "h-4 w-24 rounded-md" }) }, f)) }),
    /* @__PURE__ */ s.jsx(O, { children: Array(t).fill(null).map((a, f) => /* @__PURE__ */ s.jsx(H, { className: g(o.row), children: Array(n).fill(null).map((d, b) => /* @__PURE__ */ s.jsx(E, { children: b === 0 && r ? /* @__PURE__ */ s.jsx(I, { className: "size-4 rounded-md" }) : /* @__PURE__ */ s.jsx(I, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, b)) }, f)) })
  ] });
};
var z = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new WeakMap(), D = 0, Y = void 0;
function Z(e) {
  return e ? (T.has(e) || (D += 1, T.set(e, D.toString())), T.get(e)) : "0";
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
    let u;
    const o = new IntersectionObserver((n) => {
      n.forEach((a) => {
        var f;
        const d = a.isIntersecting && u.some((b) => a.intersectionRatio >= b);
        e.trackVisibility && typeof a.isVisible > "u" && (a.isVisible = d), (f = l.get(a.target)) == null || f.forEach((b) => {
          b(d, a);
        });
      });
    }, e);
    u = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = {
      id: t,
      observer: o,
      elements: l
    }, z.set(t, r);
  }
  return r;
}
function P(e, t, r = {}, l = Y) {
  if (typeof window.IntersectionObserver > "u" && l !== void 0) {
    const f = e.getBoundingClientRect();
    return t(l, {
      isIntersecting: l,
      target: e,
      intersectionRatio: typeof r.threshold == "number" ? r.threshold : 0,
      time: 0,
      boundingClientRect: f,
      intersectionRect: f,
      rootBounds: f
    }), () => {
    };
  }
  const { id: u, observer: o, elements: n } = N(r), a = n.get(e) || [];
  return n.has(e) || n.set(e, a), a.push(t), o.observe(e), function() {
    a.splice(a.indexOf(t), 1), a.length === 0 && (n.delete(e), o.unobserve(e)), n.size === 0 && (o.disconnect(), z.delete(u));
  };
}
function ee({
  threshold: e,
  delay: t,
  trackVisibility: r,
  rootMargin: l,
  root: u,
  triggerOnce: o,
  skip: n,
  initialInView: a,
  fallbackInView: f,
  onChange: d
} = {}) {
  var b;
  const [j, V] = A.useState(null), y = A.useRef(d), [p, S] = A.useState({
    inView: !!a,
    entry: void 0
  });
  y.current = d, A.useEffect(
    () => {
      if (n || !j) return;
      let v;
      return v = P(
        j,
        (C, i) => {
          S({
            inView: C,
            entry: i
          }), y.current && y.current(C, i), i.isIntersecting && o && v && (v(), v = void 0);
        },
        {
          root: u,
          rootMargin: l,
          threshold: e,
          // @ts-ignore
          trackVisibility: r,
          // @ts-ignore
          delay: t
        },
        f
      ), () => {
        v && v();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(e) ? e.toString() : e,
      j,
      u,
      l,
      o,
      n,
      r,
      f,
      t
    ]
  );
  const m = (b = p.entry) == null ? void 0 : b.target, k = A.useRef(void 0);
  !j && m && !o && !n && k.current !== m && (k.current = m, S({
    inView: !!a,
    entry: void 0
  }));
  const c = [V, p.inView, p.entry];
  return c.ref = c[0], c.inView = c[1], c.entry = c[2], c;
}
function te(e) {
  return typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column";
}
function re(e) {
  return typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column";
}
function ie(e, t, r) {
  const l = r.find(
    (u) => typeof u.field == "string" && String(u.field) === String(e)
  );
  if (l === void 0)
    return null;
  if (l.cell !== void 0)
    return l.cell(t);
  if (typeof l.field == "string" && l.field.length > 0 && l.field in t) {
    const u = t[l.field];
    return typeof u == "string" || typeof u == "number" ? String(u) : null;
  }
  return null;
}
function oe({
  rows: e,
  columns: t,
  onEndReached: r,
  onSelectionChange: l,
  onSortChange: u,
  showSelectionCheckboxes: o = !0,
  classNames: n,
  variant: a = "unstyled",
  isLoading: f = !1,
  childrenProps: d,
  selectedRows: b,
  ...j
}) {
  const {
    isAllChecked: V,
    sortConfig: y,
    handleSelectionChange: p,
    handleSelectAll: S,
    handleSortChange: m
  } = Q({
    rows: e,
    onSelectionChange: l,
    onSortChange: u,
    selectedRows: b
  }), { inView: k } = ee({
    threshold: 0.5,
    rootMargin: "100px"
  });
  if (G(() => {
    k && (r == null || r());
  }, [k, r]), f)
    return /* @__PURE__ */ s.jsx(
      X,
      {
        columns: t.length,
        checkboxSelection: o,
        variant: a,
        rows: e.length
      }
    );
  const c = F[a], v = [
    ...o === !0 ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...t.map((i, h) => ({
      ...i,
      key: typeof i.field == "string" ? String(i.field) : String(h),
      label: i.header
    }))
  ], C = (i) => {
    const h = t.find(
      (_) => typeof _.field == "string" && _.field.length > 0 && String(_.field) === i.key
    ), x = h == null ? void 0 : h.field;
    x != null && x !== "actions" && m(
      x,
      y.direction === "asc" ? "desc" : "asc"
    );
  };
  return console.log(b), /* @__PURE__ */ s.jsxs(M, { "aria-label": "data-grid", "aria-labelledby": "data-grid", ...j, children: [
    /* @__PURE__ */ s.jsx(
      R,
      {
        "aria-label": "data-grid-header",
        "aria-labelledby": "data-grid-header",
        columns: v,
        className: g(c.header),
        ...d == null ? void 0 : d.tableHeaderProps,
        children: (i) => /* @__PURE__ */ s.jsx(
          L,
          {
            "aria-labelledby": i.key,
            "aria-label": te(i),
            className: g(c.column),
            ...d == null ? void 0 : d.tableColumnProps,
            children: i.key === "checkbox" && o ? /* @__PURE__ */ s.jsx(
              $,
              {
                isSelected: V,
                onValueChange: S,
                "aria-label": "Select all rows",
                className: n == null ? void 0 : n.checkbox
              }
            ) : /* @__PURE__ */ s.jsxs("div", { className: g("flex items-center gap-2"), children: [
              i.label,
              i.sortable === !0 && /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: g(
                    "relative size-4 cursor-pointer",
                    n == null ? void 0 : n.sortIcon
                  ),
                  onClick: () => C(i),
                  role: "button",
                  "aria-label": re(i.label),
                  children: [
                    /* @__PURE__ */ s.jsx(
                      U,
                      {
                        size: 16,
                        className: g(
                          "absolute -top-1",
                          y.key === i.key && y.direction === "asc" ? "opacity-100" : "opacity-30"
                        )
                      }
                    ),
                    /* @__PURE__ */ s.jsx(
                      W,
                      {
                        size: 16,
                        className: g(
                          "absolute top-1",
                          y.key === i.key && y.direction === "desc" ? "opacity-100" : "opacity-30"
                        )
                      }
                    )
                  ]
                }
              )
            ] })
          },
          i.key
        )
      }
    ),
    /* @__PURE__ */ s.jsx(O, { items: e, ...d == null ? void 0 : d.tableBodyProps, children: (i) => /* @__PURE__ */ s.jsx(
      H,
      {
        "aria-label": `Row ${i.id}`,
        "aria-labelledby": `Row ${i.id}`,
        className: g(c.row),
        ...d == null ? void 0 : d.tableRowProps,
        children: (h) => /* @__PURE__ */ s.jsx(E, { ...d == null ? void 0 : d.tableCellProps, children: h === "checkbox" && o ? /* @__PURE__ */ s.jsx(
          $,
          {
            isSelected: b == null ? void 0 : b.includes(i),
            onValueChange: (x) => {
              x && p(i, x);
            },
            "aria-label": `Select row ${i.id}`,
            className: n == null ? void 0 : n.checkbox
          }
        ) : /* @__PURE__ */ s.jsx("div", { className: n == null ? void 0 : n.cellContent, children: ie(h, i, t) }) })
      },
      i.id
    ) })
  ] });
}
export {
  oe as DataGrid
};
