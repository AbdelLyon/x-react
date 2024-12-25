/* empty css                */
import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import * as p from "react";
import { useState as z, useEffect as $ } from "react";
import { cn as g } from "../utils/x-react.es.js";
import { Table as D, TableHeader as B, TableColumn as G, Skeleton as w, TableBody as M, TableRow as L, TableCell as O, Checkbox as V } from "@nextui-org/react";
import { IconChevronUp as E, IconChevronDown as F } from "@tabler/icons-react";
const U = ({
  rows: e,
  onSelectionChange: t
}) => {
  const [n, d] = z({
    selectedRows: [],
    isAllChecked: !1
  });
  return $(() => {
    const r = n.selectedRows.length === e.length && e.length > 0;
    d((i) => ({
      ...i,
      isAllChecked: r,
      isChecked: r
    }));
  }, [n.selectedRows, e]), { ...n, handleSelectionChange: (r) => {
    d((i) => {
      const s = i.selectedRows.some((c) => c.id === r.id) ? i.selectedRows.filter((c) => c.id !== r.id) : [...i.selectedRows, r];
      return t == null || t(s), { ...i, selectedRows: s };
    });
  }, handleSelectAll: (r) => {
    const i = r ? [...e] : [];
    d((s) => ({
      ...s,
      selectedRows: i,
      isChecked: r
    })), t == null || t(i);
  }, isChecked: (r) => n.selectedRows.some((i) => i.id === r.id) };
}, W = { key: null, direction: "asc" }, q = ({
  onSortChange: e
}) => {
  const [t, n] = z(W);
  return { sortConfig: t, handleSortChange: (f, u) => {
    n({ key: f, direction: u }), e == null || e(f, u);
  } };
}, J = ({
  rows: e,
  onSelectionChange: t,
  onSortChange: n
}) => ({
  ...U({ rows: e, onSelectionChange: t }),
  ...q({ onSortChange: n })
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
}, Q = ({
  columns: e = 5,
  rows: t = 5,
  checkboxSelection: n = !0,
  variant: d = "unstyled",
  className: f
}) => {
  const u = H[d], l = n ? e + 1 : e;
  return /* @__PURE__ */ o.jsxs(D, { radius: "sm", "aria-label": "Loading data", className: f, children: [
    /* @__PURE__ */ o.jsx(B, { className: g(u.header), children: Array(l).fill(null).map((r, i) => /* @__PURE__ */ o.jsx(G, { className: g(u.column), children: i === 0 && n ? /* @__PURE__ */ o.jsx(w, { className: "size-4 rounded-md" }) : /* @__PURE__ */ o.jsx(w, { className: "h-4 w-24 rounded-md" }) }, i)) }),
    /* @__PURE__ */ o.jsx(M, { children: Array(t).fill(null).map((r, i) => /* @__PURE__ */ o.jsx(L, { className: g(u.row), children: Array(l).fill(null).map((s, c) => /* @__PURE__ */ o.jsx(O, { children: c === 0 && n ? /* @__PURE__ */ o.jsx(w, { className: "size-4 rounded-md" }) : /* @__PURE__ */ o.jsx(w, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, c)) }, i)) })
  ] });
};
var T = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new WeakMap(), _ = 0, X = void 0;
function Y(e) {
  return e ? (A.has(e) || (_ += 1, A.set(e, _.toString())), A.get(e)) : "0";
}
function Z(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? Y(e.root) : e[t]}`).toString();
}
function K(e) {
  const t = Z(e);
  let n = T.get(t);
  if (!n) {
    const d = /* @__PURE__ */ new Map();
    let f;
    const u = new IntersectionObserver((l) => {
      l.forEach((r) => {
        var i;
        const s = r.isIntersecting && f.some((c) => r.intersectionRatio >= c);
        e.trackVisibility && typeof r.isVisible > "u" && (r.isVisible = s), (i = d.get(r.target)) == null || i.forEach((c) => {
          c(s, r);
        });
      });
    }, e);
    f = u.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
      id: t,
      observer: u,
      elements: d
    }, T.set(t, n);
  }
  return n;
}
function N(e, t, n = {}, d = X) {
  if (typeof window.IntersectionObserver > "u" && d !== void 0) {
    const i = e.getBoundingClientRect();
    return t(d, {
      isIntersecting: d,
      target: e,
      intersectionRatio: typeof n.threshold == "number" ? n.threshold : 0,
      time: 0,
      boundingClientRect: i,
      intersectionRect: i,
      rootBounds: i
    }), () => {
    };
  }
  const { id: f, observer: u, elements: l } = K(n), r = l.get(e) || [];
  return l.has(e) || l.set(e, r), r.push(t), u.observe(e), function() {
    r.splice(r.indexOf(t), 1), r.length === 0 && (l.delete(e), u.unobserve(e)), l.size === 0 && (u.disconnect(), T.delete(f));
  };
}
function P({
  threshold: e,
  delay: t,
  trackVisibility: n,
  rootMargin: d,
  root: f,
  triggerOnce: u,
  skip: l,
  initialInView: r,
  fallbackInView: i,
  onChange: s
} = {}) {
  var c;
  const [x, v] = p.useState(null), S = p.useRef(s), [k, C] = p.useState({
    inView: !!r,
    entry: void 0
  });
  S.current = s, p.useEffect(
    () => {
      if (l || !x) return;
      let h;
      return h = N(
        x,
        (a, b) => {
          C({
            inView: a,
            entry: b
          }), S.current && S.current(a, b), b.isIntersecting && u && h && (h(), h = void 0);
        },
        {
          root: f,
          rootMargin: d,
          threshold: e,
          // @ts-ignore
          trackVisibility: n,
          // @ts-ignore
          delay: t
        },
        i
      ), () => {
        h && h();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(e) ? e.toString() : e,
      x,
      f,
      d,
      u,
      l,
      n,
      i,
      t
    ]
  );
  const j = (c = k.entry) == null ? void 0 : c.target, R = p.useRef(void 0);
  !x && j && !u && !l && R.current !== j && (R.current = j, C({
    inView: !!r,
    entry: void 0
  }));
  const y = [v, k.inView, k.entry];
  return y.ref = y[0], y.inView = y[1], y.entry = y[2], y;
}
function ee(e) {
  return typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column";
}
function te(e) {
  return typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column";
}
function re(e, t, n) {
  const d = n.find(
    (f) => typeof f.field == "string" && String(f.field) === String(e)
  );
  if (d === void 0)
    return null;
  if (d.cell !== void 0)
    return d.cell(t);
  if (typeof d.field == "string" && d.field.length > 0 && d.field in t) {
    const f = t[d.field];
    return typeof f == "string" || typeof f == "number" ? String(f) : null;
  }
  return null;
}
function oe({
  rows: e,
  columns: t,
  onEndReached: n,
  onSelectionChange: d,
  onSortChange: f,
  showSelectionCheckboxes: u = !0,
  classNames: l,
  variant: r = "unstyled",
  isLoading: i = !1,
  childrenProps: s,
  ...c
}) {
  const {
    isAllChecked: x,
    sortConfig: v,
    handleSelectionChange: S,
    handleSelectAll: k,
    handleSortChange: C
  } = J({
    rows: e,
    onSelectionChange: d,
    onSortChange: f
  }), { inView: j } = P({
    threshold: 0.5,
    rootMargin: "100px"
  });
  if ($(() => {
    j && (n == null || n());
  }, [j, n]), i)
    return /* @__PURE__ */ o.jsx(
      Q,
      {
        columns: t.length,
        checkboxSelection: u,
        variant: r,
        rows: e.length
      }
    );
  const R = H[r], y = [
    ...u === !0 ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...t.map((a, b) => ({
      ...a,
      key: typeof a.field == "string" ? String(a.field) : String(b),
      label: a.header
    }))
  ], h = (a) => {
    const b = t.find(
      (I) => typeof I.field == "string" && I.field.length > 0 && String(I.field) === a.key
    ), m = b == null ? void 0 : b.field;
    m != null && m !== "actions" && C(
      m,
      v.direction === "asc" ? "desc" : "asc"
    );
  };
  return /* @__PURE__ */ o.jsxs(D, { "aria-label": "data-grid", "aria-labelledby": "data-grid", ...c, children: [
    /* @__PURE__ */ o.jsx(
      B,
      {
        "aria-label": "data-grid-header",
        "aria-labelledby": "data-grid-header",
        columns: y,
        className: g(R.header),
        ...s == null ? void 0 : s.tableHeaderProps,
        children: (a) => /* @__PURE__ */ o.jsx(
          G,
          {
            "aria-labelledby": a.key,
            "aria-label": ee(a),
            className: g(R.column),
            ...s == null ? void 0 : s.tableColumnProps,
            children: a.key === "checkbox" && u ? /* @__PURE__ */ o.jsx(
              V,
              {
                isSelected: x,
                onValueChange: k,
                "aria-label": "Select all rows",
                className: l == null ? void 0 : l.checkbox
              }
            ) : /* @__PURE__ */ o.jsxs("div", { className: g("flex items-center gap-2"), children: [
              a.label,
              a.sortable === !0 && /* @__PURE__ */ o.jsxs(
                "div",
                {
                  className: g(
                    "relative size-4 cursor-pointer",
                    l == null ? void 0 : l.sortIcon
                  ),
                  onClick: () => h(a),
                  role: "button",
                  "aria-label": te(a.label),
                  children: [
                    /* @__PURE__ */ o.jsx(
                      E,
                      {
                        size: 16,
                        className: g(
                          "absolute -top-1",
                          v.key === a.key && v.direction === "asc" ? "opacity-100" : "opacity-30"
                        )
                      }
                    ),
                    /* @__PURE__ */ o.jsx(
                      F,
                      {
                        size: 16,
                        className: g(
                          "absolute top-1",
                          v.key === a.key && v.direction === "desc" ? "opacity-100" : "opacity-30"
                        )
                      }
                    )
                  ]
                }
              )
            ] })
          },
          a.key
        )
      }
    ),
    /* @__PURE__ */ o.jsx(M, { items: e, ...s == null ? void 0 : s.tableBodyProps, children: (a) => /* @__PURE__ */ o.jsx(
      L,
      {
        "aria-label": `Row ${a.id}`,
        "aria-labelledby": `Row ${a.id}`,
        className: g(R.row),
        ...s == null ? void 0 : s.tableRowProps,
        children: (b) => /* @__PURE__ */ o.jsx(O, { ...s == null ? void 0 : s.tableCellProps, children: b === "checkbox" && u ? /* @__PURE__ */ o.jsx(
          V,
          {
            onChange: () => {
              S(a);
            },
            "aria-label": `Select row ${a.id}`,
            className: l == null ? void 0 : l.checkbox
          }
        ) : /* @__PURE__ */ o.jsx("div", { className: l == null ? void 0 : l.cellContent, children: re(b, a, t) }) })
      },
      a.id
    ) })
  ] });
}
export {
  oe as DataGrid
};
