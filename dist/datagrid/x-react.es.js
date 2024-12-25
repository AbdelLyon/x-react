/* empty css                */
import { j as d } from "../jsx-runtime-Dx-03ztt.js";
import * as A from "react";
import { useState as z, useEffect as B } from "react";
import { cn as g } from "../utils/x-react.es.js";
import { Table as D, TableHeader as G, TableColumn as M, Skeleton as I, TableBody as L, TableRow as O, TableCell as H, Checkbox as _ } from "@nextui-org/react";
import { IconChevronUp as F, IconChevronDown as U } from "@tabler/icons-react";
const W = ({
  rows: e,
  onSelectionChange: t
}) => {
  const [n, a] = z(/* @__PURE__ */ new Set()), [o, s] = z(!1);
  return B(() => {
    s(n.size === e.length);
  }, [n, e]), {
    selectedRows: n,
    isAllSelected: o,
    handleRowSelect: (u) => {
      a((l) => {
        const b = new Set(l);
        return b.has(u) ? b.delete(u) : b.add(u), t == null || t(Array.from(b)), b;
      });
    },
    handleSelectAll: (u) => {
      const l = u ? new Set(e) : /* @__PURE__ */ new Set();
      a(l), t == null || t(Array.from(l));
    }
  };
}, q = ({
  onSortChange: e
}) => {
  const [t, n] = z({
    key: null,
    direction: "asc"
  });
  return { sortConfig: t, handleSort: (o, s) => {
    n({ key: o, direction: s }), e == null || e(o, s);
  } };
}, J = (e) => ({
  ...W(e),
  ...q(e)
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
}, Q = ({
  columns: e = 5,
  rows: t = 5,
  checkboxSelection: n = !0,
  variant: a = "unstyled",
  className: o
}) => {
  const s = E[a], i = n ? e + 1 : e;
  return /* @__PURE__ */ d.jsxs(D, { radius: "sm", "aria-label": "Loading data", className: o, children: [
    /* @__PURE__ */ d.jsx(G, { className: g(s.header), children: Array(i).fill(null).map((f, u) => /* @__PURE__ */ d.jsx(M, { className: g(s.column), children: u === 0 && n ? /* @__PURE__ */ d.jsx(I, { className: "size-4 rounded-md" }) : /* @__PURE__ */ d.jsx(I, { className: "h-4 w-24 rounded-md" }) }, u)) }),
    /* @__PURE__ */ d.jsx(L, { children: Array(t).fill(null).map((f, u) => /* @__PURE__ */ d.jsx(O, { className: g(s.row), children: Array(i).fill(null).map((l, b) => /* @__PURE__ */ d.jsx(H, { children: b === 0 && n ? /* @__PURE__ */ d.jsx(I, { className: "size-4 rounded-md" }) : /* @__PURE__ */ d.jsx(I, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, b)) }, u)) })
  ] });
};
var C = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new WeakMap(), $ = 0, X = void 0;
function Y(e) {
  return e ? (T.has(e) || ($ += 1, T.set(e, $.toString())), T.get(e)) : "0";
}
function Z(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? Y(e.root) : e[t]}`).toString();
}
function K(e) {
  const t = Z(e);
  let n = C.get(t);
  if (!n) {
    const a = /* @__PURE__ */ new Map();
    let o;
    const s = new IntersectionObserver((i) => {
      i.forEach((f) => {
        var u;
        const l = f.isIntersecting && o.some((b) => f.intersectionRatio >= b);
        e.trackVisibility && typeof f.isVisible > "u" && (f.isVisible = l), (u = a.get(f.target)) == null || u.forEach((b) => {
          b(l, f);
        });
      });
    }, e);
    o = s.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
      id: t,
      observer: s,
      elements: a
    }, C.set(t, n);
  }
  return n;
}
function N(e, t, n = {}, a = X) {
  if (typeof window.IntersectionObserver > "u" && a !== void 0) {
    const u = e.getBoundingClientRect();
    return t(a, {
      isIntersecting: a,
      target: e,
      intersectionRatio: typeof n.threshold == "number" ? n.threshold : 0,
      time: 0,
      boundingClientRect: u,
      intersectionRect: u,
      rootBounds: u
    }), () => {
    };
  }
  const { id: o, observer: s, elements: i } = K(n), f = i.get(e) || [];
  return i.has(e) || i.set(e, f), f.push(t), s.observe(e), function() {
    f.splice(f.indexOf(t), 1), f.length === 0 && (i.delete(e), s.unobserve(e)), i.size === 0 && (s.disconnect(), C.delete(o));
  };
}
function P({
  threshold: e,
  delay: t,
  trackVisibility: n,
  rootMargin: a,
  root: o,
  triggerOnce: s,
  skip: i,
  initialInView: f,
  fallbackInView: u,
  onChange: l
} = {}) {
  var b;
  const [y, j] = A.useState(null), S = A.useRef(l), [p, k] = A.useState({
    inView: !!f,
    entry: void 0
  });
  S.current = l, A.useEffect(
    () => {
      if (i || !y) return;
      let v;
      return v = N(
        y,
        (R, r) => {
          k({
            inView: R,
            entry: r
          }), S.current && S.current(R, r), r.isIntersecting && s && v && (v(), v = void 0);
        },
        {
          root: o,
          rootMargin: a,
          threshold: e,
          // @ts-ignore
          trackVisibility: n,
          // @ts-ignore
          delay: t
        },
        u
      ), () => {
        v && v();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(e) ? e.toString() : e,
      y,
      o,
      a,
      s,
      i,
      n,
      u,
      t
    ]
  );
  const h = (b = p.entry) == null ? void 0 : b.target, m = A.useRef(void 0);
  !y && h && !s && !i && m.current !== h && (m.current = h, k({
    inView: !!f,
    entry: void 0
  }));
  const c = [j, p.inView, p.entry];
  return c.ref = c[0], c.inView = c[1], c.entry = c[2], c;
}
function ee(e) {
  return typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column";
}
function te(e) {
  return typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column";
}
function re(e, t, n) {
  const a = n.find(
    (o) => typeof o.field == "string" && String(o.field) === String(e)
  );
  if (a === void 0)
    return null;
  if (a.cell !== void 0)
    return a.cell(t);
  if (typeof a.field == "string" && a.field.length > 0 && a.field in t) {
    const o = t[a.field];
    return typeof o == "string" || typeof o == "number" ? String(o) : null;
  }
  return null;
}
function oe({
  rows: e,
  columns: t,
  onEndReached: n,
  onSelectionChange: a,
  onSortChange: o,
  showSelectionCheckboxes: s = !0,
  classNames: i,
  variant: f = "unstyled",
  isLoading: u = !1,
  childrenProps: l,
  ...b
}) {
  const {
    sortConfig: y,
    handleRowSelect: j,
    handleSort: S,
    handleSelectAll: p,
    isAllSelected: k,
    selectedRows: h
  } = J({
    rows: e,
    onSelectionChange: a,
    onSortChange: o
  }), { inView: m } = P({
    threshold: 0.5,
    rootMargin: "100px"
  });
  if (B(() => {
    m && (n == null || n());
  }, [m, n]), u)
    return /* @__PURE__ */ d.jsx(
      Q,
      {
        columns: t.length,
        checkboxSelection: s,
        variant: f,
        rows: e.length
      }
    );
  const c = E[f], v = [
    ...s === !0 ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...t.map((r, x) => ({
      ...r,
      key: typeof r.field == "string" ? String(r.field) : String(x),
      label: r.header
    }))
  ], R = (r) => {
    const x = t.find(
      (V) => typeof V.field == "string" && V.field.length > 0 && String(V.field) === r.key
    ), w = x == null ? void 0 : x.field;
    w != null && w !== "actions" && S(w, y.direction === "asc" ? "desc" : "asc");
  };
  return /* @__PURE__ */ d.jsxs(D, { "aria-label": "data-grid", "aria-labelledby": "data-grid", ...b, children: [
    /* @__PURE__ */ d.jsx(
      G,
      {
        "aria-label": "data-grid-header",
        "aria-labelledby": "data-grid-header",
        columns: v,
        className: g(c.header),
        ...l == null ? void 0 : l.tableHeaderProps,
        children: (r) => /* @__PURE__ */ d.jsx(
          M,
          {
            "aria-labelledby": r.key,
            "aria-label": ee(r),
            className: g(c.column),
            ...l == null ? void 0 : l.tableColumnProps,
            children: r.key === "checkbox" && s ? /* @__PURE__ */ d.jsx(
              _,
              {
                isSelected: k,
                onValueChange: p,
                "aria-label": "Select all rows",
                className: i == null ? void 0 : i.checkbox
              }
            ) : /* @__PURE__ */ d.jsxs("div", { className: g("flex items-center gap-2"), children: [
              r.label,
              r.sortable === !0 && /* @__PURE__ */ d.jsxs(
                "div",
                {
                  className: g(
                    "relative size-4 cursor-pointer",
                    i == null ? void 0 : i.sortIcon
                  ),
                  onClick: () => R(r),
                  role: "button",
                  "aria-label": te(r.label),
                  children: [
                    /* @__PURE__ */ d.jsx(
                      F,
                      {
                        size: 16,
                        className: g(
                          "absolute -top-1",
                          y.key === r.key && y.direction === "asc" ? "opacity-100" : "opacity-30"
                        )
                      }
                    ),
                    /* @__PURE__ */ d.jsx(
                      U,
                      {
                        size: 16,
                        className: g(
                          "absolute top-1",
                          y.key === r.key && y.direction === "desc" ? "opacity-100" : "opacity-30"
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
    /* @__PURE__ */ d.jsx(L, { items: e, ...l == null ? void 0 : l.tableBodyProps, children: (r) => /* @__PURE__ */ d.jsx(
      O,
      {
        "aria-label": `Row ${r.id}`,
        "aria-labelledby": `Row ${r.id}`,
        className: g(c.row),
        ...l == null ? void 0 : l.tableRowProps,
        children: (x) => /* @__PURE__ */ d.jsx(H, { ...l == null ? void 0 : l.tableCellProps, children: x === "checkbox" && s ? /* @__PURE__ */ d.jsx(
          _,
          {
            isSelected: h == null ? void 0 : h.has(r),
            onValueChange: () => j == null ? void 0 : j(r),
            "aria-label": `Select row ${r.id}`,
            className: i == null ? void 0 : i.checkbox
          }
        ) : /* @__PURE__ */ d.jsx("div", { className: i == null ? void 0 : i.cellContent, children: re(x, r, t) }) })
      },
      r.id
    ) })
  ] });
}
export {
  oe as DataGrid
};
