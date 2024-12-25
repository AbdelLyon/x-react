/* empty css                */
import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import * as C from "react";
import { useState as D, useEffect as B } from "react";
import { cn as y } from "../utils/x-react.es.js";
import { Table as G, TableHeader as M, TableColumn as L, Skeleton as I, TableBody as O, TableRow as H, TableCell as E, Checkbox as z } from "@nextui-org/react";
import { IconChevronUp as U, IconChevronDown as W } from "@tabler/icons-react";
const q = ({
  rows: e,
  onSelectionChange: t
}) => {
  const [n, s] = D({
    selectedRows: [],
    isAllChecked: !1,
    isChecked: !1
  });
  return B(() => {
    const r = n.selectedRows.length === e.length && e.length > 0;
    s((i) => ({
      ...i,
      isAllChecked: r,
      isChecked: r
    }));
  }, [n.selectedRows, e]), { ...n, handleSelectionChange: (r) => {
    s((i) => {
      const l = i.selectedRows.some((f) => f.id === r.id) ? i.selectedRows.filter((f) => f.id !== r.id) : [...i.selectedRows, r];
      return t == null || t(l), { ...i, selectedRows: l };
    });
  }, handleSelectAll: (r) => {
    const i = r ? [...e] : [];
    s((l) => ({
      ...l,
      selectedRows: i,
      isChecked: r
    })), t == null || t(i);
  }, handelSelectRow: (r) => {
    s((i) => ({
      ...i,
      isChecked: i.selectedRows.some((l) => l.id === r.id)
    }));
  } };
}, J = { key: null, direction: "asc" }, Q = ({
  onSortChange: e
}) => {
  const [t, n] = D(J);
  return { sortConfig: t, handleSortChange: (c, u) => {
    n({ key: c, direction: u }), e == null || e(c, u);
  } };
}, X = ({
  rows: e,
  onSelectionChange: t,
  onSortChange: n
}) => ({
  ...q({ rows: e, onSelectionChange: t }),
  ...Q({ onSortChange: n })
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
}, Y = ({
  columns: e = 5,
  rows: t = 5,
  checkboxSelection: n = !0,
  variant: s = "unstyled",
  className: c
}) => {
  const u = F[s], a = n ? e + 1 : e;
  return /* @__PURE__ */ o.jsxs(G, { radius: "sm", "aria-label": "Loading data", className: c, children: [
    /* @__PURE__ */ o.jsx(M, { className: y(u.header), children: Array(a).fill(null).map((r, i) => /* @__PURE__ */ o.jsx(L, { className: y(u.column), children: i === 0 && n ? /* @__PURE__ */ o.jsx(I, { className: "size-4 rounded-md" }) : /* @__PURE__ */ o.jsx(I, { className: "h-4 w-24 rounded-md" }) }, i)) }),
    /* @__PURE__ */ o.jsx(O, { children: Array(t).fill(null).map((r, i) => /* @__PURE__ */ o.jsx(H, { className: y(u.row), children: Array(a).fill(null).map((l, f) => /* @__PURE__ */ o.jsx(E, { children: f === 0 && n ? /* @__PURE__ */ o.jsx(I, { className: "size-4 rounded-md" }) : /* @__PURE__ */ o.jsx(I, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, f)) }, i)) })
  ] });
};
var _ = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new WeakMap(), $ = 0, Z = void 0;
function K(e) {
  return e ? (T.has(e) || ($ += 1, T.set(e, $.toString())), T.get(e)) : "0";
}
function N(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? K(e.root) : e[t]}`).toString();
}
function P(e) {
  const t = N(e);
  let n = _.get(t);
  if (!n) {
    const s = /* @__PURE__ */ new Map();
    let c;
    const u = new IntersectionObserver((a) => {
      a.forEach((r) => {
        var i;
        const l = r.isIntersecting && c.some((f) => r.intersectionRatio >= f);
        e.trackVisibility && typeof r.isVisible > "u" && (r.isVisible = l), (i = s.get(r.target)) == null || i.forEach((f) => {
          f(l, r);
        });
      });
    }, e);
    c = u.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
      id: t,
      observer: u,
      elements: s
    }, _.set(t, n);
  }
  return n;
}
function ee(e, t, n = {}, s = Z) {
  if (typeof window.IntersectionObserver > "u" && s !== void 0) {
    const i = e.getBoundingClientRect();
    return t(s, {
      isIntersecting: s,
      target: e,
      intersectionRatio: typeof n.threshold == "number" ? n.threshold : 0,
      time: 0,
      boundingClientRect: i,
      intersectionRect: i,
      rootBounds: i
    }), () => {
    };
  }
  const { id: c, observer: u, elements: a } = P(n), r = a.get(e) || [];
  return a.has(e) || a.set(e, r), r.push(t), u.observe(e), function() {
    r.splice(r.indexOf(t), 1), r.length === 0 && (a.delete(e), u.unobserve(e)), a.size === 0 && (u.disconnect(), _.delete(c));
  };
}
function te({
  threshold: e,
  delay: t,
  trackVisibility: n,
  rootMargin: s,
  root: c,
  triggerOnce: u,
  skip: a,
  initialInView: r,
  fallbackInView: i,
  onChange: l
} = {}) {
  var f;
  const [x, v] = C.useState(null), j = C.useRef(l), [R, w] = C.useState({
    inView: !!r,
    entry: void 0
  });
  j.current = l, C.useEffect(
    () => {
      if (a || !x) return;
      let g;
      return g = ee(
        x,
        (p, k) => {
          w({
            inView: p,
            entry: k
          }), j.current && j.current(p, k), k.isIntersecting && u && g && (g(), g = void 0);
        },
        {
          root: c,
          rootMargin: s,
          threshold: e,
          // @ts-ignore
          trackVisibility: n,
          // @ts-ignore
          delay: t
        },
        i
      ), () => {
        g && g();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(e) ? e.toString() : e,
      x,
      c,
      s,
      u,
      a,
      n,
      i,
      t
    ]
  );
  const S = (f = R.entry) == null ? void 0 : f.target, m = C.useRef(void 0);
  !x && S && !u && !a && m.current !== S && (m.current = S, w({
    inView: !!r,
    entry: void 0
  }));
  const b = [v, R.inView, R.entry];
  return b.ref = b[0], b.inView = b[1], b.entry = b[2], b;
}
function re(e) {
  return typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column";
}
function ne(e) {
  return typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column";
}
function ie(e, t, n) {
  const s = n.find(
    (c) => typeof c.field == "string" && String(c.field) === String(e)
  );
  if (s === void 0)
    return null;
  if (s.cell !== void 0)
    return s.cell(t);
  if (typeof s.field == "string" && s.field.length > 0 && s.field in t) {
    const c = t[s.field];
    return typeof c == "string" || typeof c == "number" ? String(c) : null;
  }
  return null;
}
function ce({
  rows: e,
  columns: t,
  onEndReached: n,
  onSelectionChange: s,
  onSortChange: c,
  showSelectionCheckboxes: u = !0,
  classNames: a,
  variant: r = "unstyled",
  isLoading: i = !1,
  childrenProps: l,
  ...f
}) {
  const {
    isAllChecked: x,
    sortConfig: v,
    handleSelectionChange: j,
    handleSelectAll: R,
    handleSortChange: w,
    isChecked: S,
    handelSelectRow: m
  } = X({
    rows: e,
    onSelectionChange: s,
    onSortChange: c
  }), { inView: b } = te({
    threshold: 0.5,
    rootMargin: "100px"
  });
  if (B(() => {
    b && (n == null || n());
  }, [b, n]), i)
    return /* @__PURE__ */ o.jsx(
      Y,
      {
        columns: t.length,
        checkboxSelection: u,
        variant: r,
        rows: e.length
      }
    );
  const g = F[r], p = [
    ...u === !0 ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...t.map((d, h) => ({
      ...d,
      key: typeof d.field == "string" ? String(d.field) : String(h),
      label: d.header
    }))
  ], k = (d) => {
    const h = t.find(
      (V) => typeof V.field == "string" && V.field.length > 0 && String(V.field) === d.key
    ), A = h == null ? void 0 : h.field;
    A != null && A !== "actions" && w(
      A,
      v.direction === "asc" ? "desc" : "asc"
    );
  };
  return /* @__PURE__ */ o.jsxs(G, { "aria-label": "data-grid", "aria-labelledby": "data-grid", ...f, children: [
    /* @__PURE__ */ o.jsx(
      M,
      {
        "aria-label": "data-grid-header",
        "aria-labelledby": "data-grid-header",
        columns: p,
        className: y(g.header),
        ...l == null ? void 0 : l.tableHeaderProps,
        children: (d) => /* @__PURE__ */ o.jsx(
          L,
          {
            "aria-labelledby": d.key,
            "aria-label": re(d),
            className: y(g.column),
            ...l == null ? void 0 : l.tableColumnProps,
            children: d.key === "checkbox" && u ? /* @__PURE__ */ o.jsx(
              z,
              {
                isSelected: x,
                onValueChange: R,
                "aria-label": "Select all rows",
                className: a == null ? void 0 : a.checkbox
              }
            ) : /* @__PURE__ */ o.jsxs("div", { className: y("flex items-center gap-2"), children: [
              d.label,
              d.sortable === !0 && /* @__PURE__ */ o.jsxs(
                "div",
                {
                  className: y(
                    "relative size-4 cursor-pointer",
                    a == null ? void 0 : a.sortIcon
                  ),
                  onClick: () => k(d),
                  role: "button",
                  "aria-label": ne(d.label),
                  children: [
                    /* @__PURE__ */ o.jsx(
                      U,
                      {
                        size: 16,
                        className: y(
                          "absolute -top-1",
                          v.key === d.key && v.direction === "asc" ? "opacity-100" : "opacity-30"
                        )
                      }
                    ),
                    /* @__PURE__ */ o.jsx(
                      W,
                      {
                        size: 16,
                        className: y(
                          "absolute top-1",
                          v.key === d.key && v.direction === "desc" ? "opacity-100" : "opacity-30"
                        )
                      }
                    )
                  ]
                }
              )
            ] })
          },
          d.key
        )
      }
    ),
    /* @__PURE__ */ o.jsx(O, { items: e, ...l == null ? void 0 : l.tableBodyProps, children: (d) => /* @__PURE__ */ o.jsx(
      H,
      {
        "aria-label": `Row ${d.id}`,
        "aria-labelledby": `Row ${d.id}`,
        className: y(g.row),
        ...l == null ? void 0 : l.tableRowProps,
        children: (h) => /* @__PURE__ */ o.jsx(E, { ...l == null ? void 0 : l.tableCellProps, children: h === "checkbox" && u ? /* @__PURE__ */ o.jsx(
          z,
          {
            checked: S,
            onChange: () => {
              j(d), m(d);
            },
            "aria-label": `Select row ${d.id}`,
            className: a == null ? void 0 : a.checkbox
          }
        ) : /* @__PURE__ */ o.jsx("div", { className: a == null ? void 0 : a.cellContent, children: ie(h, d, t) }) })
      },
      d.id
    ) })
  ] });
}
export {
  ce as DataGrid
};
