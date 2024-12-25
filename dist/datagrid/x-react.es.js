/* empty css                */
import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import * as S from "react";
import { useState as $, useEffect as D } from "react";
import { cn as g } from "../utils/x-react.es.js";
import { Table as B, TableHeader as G, TableColumn as M, Skeleton as A, TableBody as L, TableRow as O, TableCell as H, Checkbox as _ } from "@nextui-org/react";
import { IconChevronUp as F, IconChevronDown as U } from "@tabler/icons-react";
const W = ({
  rows: e,
  onSelectionChange: t
}) => {
  const [i, d] = $({
    selectedRows: [],
    isAllChecked: !1
  });
  return D(() => {
    const r = i.selectedRows.length === e.length && e.length > 0;
    d((n) => ({
      ...n,
      isAllChecked: r,
      isChecked: r
    }));
  }, [i.selectedRows, e]), { ...i, handleSelectionChange: (r) => {
    d((n) => {
      const a = n.selectedRows.some((f) => f.id === r.id) ? n.selectedRows.filter((f) => f.id !== r.id) : [...n.selectedRows, r];
      return t == null || t(a), { ...n, selectedRows: a };
    });
  }, handleSelectAll: (r) => {
    const n = r ? [...e] : [];
    d((a) => ({
      ...a,
      selectedRows: n,
      isChecked: r
    })), t == null || t(n);
  }, isChecked: (r) => i.selectedRows.some((n) => n.id === r.id) };
}, q = { key: null, direction: "asc" }, J = ({
  onSortChange: e
}) => {
  const [t, i] = $(q);
  return { sortConfig: t, handleSortChange: (c, u) => {
    i({ key: c, direction: u }), e == null || e(c, u);
  } };
}, Q = ({
  rows: e,
  onSelectionChange: t,
  onSortChange: i
}) => ({
  ...W({ rows: e, onSelectionChange: t }),
  ...J({ onSortChange: i })
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
  checkboxSelection: i = !0,
  variant: d = "unstyled",
  className: c
}) => {
  const u = E[d], s = i ? e + 1 : e;
  return /* @__PURE__ */ o.jsxs(B, { radius: "sm", "aria-label": "Loading data", className: c, children: [
    /* @__PURE__ */ o.jsx(G, { className: g(u.header), children: Array(s).fill(null).map((r, n) => /* @__PURE__ */ o.jsx(M, { className: g(u.column), children: n === 0 && i ? /* @__PURE__ */ o.jsx(A, { className: "size-4 rounded-md" }) : /* @__PURE__ */ o.jsx(A, { className: "h-4 w-24 rounded-md" }) }, n)) }),
    /* @__PURE__ */ o.jsx(L, { children: Array(t).fill(null).map((r, n) => /* @__PURE__ */ o.jsx(O, { className: g(u.row), children: Array(s).fill(null).map((a, f) => /* @__PURE__ */ o.jsx(H, { children: f === 0 && i ? /* @__PURE__ */ o.jsx(A, { className: "size-4 rounded-md" }) : /* @__PURE__ */ o.jsx(A, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, f)) }, n)) })
  ] });
};
var V = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new WeakMap(), z = 0, Y = void 0;
function Z(e) {
  return e ? (I.has(e) || (z += 1, I.set(e, z.toString())), I.get(e)) : "0";
}
function K(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? Z(e.root) : e[t]}`).toString();
}
function N(e) {
  const t = K(e);
  let i = V.get(t);
  if (!i) {
    const d = /* @__PURE__ */ new Map();
    let c;
    const u = new IntersectionObserver((s) => {
      s.forEach((r) => {
        var n;
        const a = r.isIntersecting && c.some((f) => r.intersectionRatio >= f);
        e.trackVisibility && typeof r.isVisible > "u" && (r.isVisible = a), (n = d.get(r.target)) == null || n.forEach((f) => {
          f(a, r);
        });
      });
    }, e);
    c = u.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), i = {
      id: t,
      observer: u,
      elements: d
    }, V.set(t, i);
  }
  return i;
}
function P(e, t, i = {}, d = Y) {
  if (typeof window.IntersectionObserver > "u" && d !== void 0) {
    const n = e.getBoundingClientRect();
    return t(d, {
      isIntersecting: d,
      target: e,
      intersectionRatio: typeof i.threshold == "number" ? i.threshold : 0,
      time: 0,
      boundingClientRect: n,
      intersectionRect: n,
      rootBounds: n
    }), () => {
    };
  }
  const { id: c, observer: u, elements: s } = N(i), r = s.get(e) || [];
  return s.has(e) || s.set(e, r), r.push(t), u.observe(e), function() {
    r.splice(r.indexOf(t), 1), r.length === 0 && (s.delete(e), u.unobserve(e)), s.size === 0 && (u.disconnect(), V.delete(c));
  };
}
function ee({
  threshold: e,
  delay: t,
  trackVisibility: i,
  rootMargin: d,
  root: c,
  triggerOnce: u,
  skip: s,
  initialInView: r,
  fallbackInView: n,
  onChange: a
} = {}) {
  var f;
  const [x, v] = S.useState(null), j = S.useRef(a), [k, p] = S.useState({
    inView: !!r,
    entry: void 0
  });
  j.current = a, S.useEffect(
    () => {
      if (s || !x) return;
      let y;
      return y = P(
        x,
        (m, l) => {
          p({
            inView: m,
            entry: l
          }), j.current && j.current(m, l), l.isIntersecting && u && y && (y(), y = void 0);
        },
        {
          root: c,
          rootMargin: d,
          threshold: e,
          // @ts-ignore
          trackVisibility: i,
          // @ts-ignore
          delay: t
        },
        n
      ), () => {
        y && y();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(e) ? e.toString() : e,
      x,
      c,
      d,
      u,
      s,
      i,
      n,
      t
    ]
  );
  const R = (f = k.entry) == null ? void 0 : f.target, C = S.useRef(void 0);
  !x && R && !u && !s && C.current !== R && (C.current = R, p({
    inView: !!r,
    entry: void 0
  }));
  const b = [v, k.inView, k.entry];
  return b.ref = b[0], b.inView = b[1], b.entry = b[2], b;
}
function te(e) {
  return typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column";
}
function re(e) {
  return typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column";
}
function ie(e, t, i) {
  const d = i.find(
    (c) => typeof c.field == "string" && String(c.field) === String(e)
  );
  if (d === void 0)
    return null;
  if (d.cell !== void 0)
    return d.cell(t);
  if (typeof d.field == "string" && d.field.length > 0 && d.field in t) {
    const c = t[d.field];
    return typeof c == "string" || typeof c == "number" ? String(c) : null;
  }
  return null;
}
function ue({
  rows: e,
  columns: t,
  onEndReached: i,
  onSelectionChange: d,
  onSortChange: c,
  showSelectionCheckboxes: u = !0,
  classNames: s,
  variant: r = "unstyled",
  isLoading: n = !1,
  childrenProps: a,
  ...f
}) {
  const {
    isAllChecked: x,
    sortConfig: v,
    handleSelectionChange: j,
    handleSelectAll: k,
    handleSortChange: p,
    isChecked: R
  } = Q({
    rows: e,
    onSelectionChange: d,
    onSortChange: c
  }), { inView: C } = ee({
    threshold: 0.5,
    rootMargin: "100px"
  });
  if (D(() => {
    C && (i == null || i());
  }, [C, i]), n)
    return /* @__PURE__ */ o.jsx(
      X,
      {
        columns: t.length,
        checkboxSelection: u,
        variant: r,
        rows: e.length
      }
    );
  const b = E[r], y = [
    ...u === !0 ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...t.map((l, h) => ({
      ...l,
      key: typeof l.field == "string" ? String(l.field) : String(h),
      label: l.header
    }))
  ], m = (l) => {
    const h = t.find(
      (T) => typeof T.field == "string" && T.field.length > 0 && String(T.field) === l.key
    ), w = h == null ? void 0 : h.field;
    w != null && w !== "actions" && p(
      w,
      v.direction === "asc" ? "desc" : "asc"
    );
  };
  return /* @__PURE__ */ o.jsxs(B, { "aria-label": "data-grid", "aria-labelledby": "data-grid", ...f, children: [
    /* @__PURE__ */ o.jsx(
      G,
      {
        "aria-label": "data-grid-header",
        "aria-labelledby": "data-grid-header",
        columns: y,
        className: g(b.header),
        ...a == null ? void 0 : a.tableHeaderProps,
        children: (l) => /* @__PURE__ */ o.jsx(
          M,
          {
            "aria-labelledby": l.key,
            "aria-label": te(l),
            className: g(b.column),
            ...a == null ? void 0 : a.tableColumnProps,
            children: l.key === "checkbox" && u ? /* @__PURE__ */ o.jsx(
              _,
              {
                isSelected: x,
                onValueChange: k,
                "aria-label": "Select all rows",
                className: s == null ? void 0 : s.checkbox
              }
            ) : /* @__PURE__ */ o.jsxs("div", { className: g("flex items-center gap-2"), children: [
              l.label,
              l.sortable === !0 && /* @__PURE__ */ o.jsxs(
                "div",
                {
                  className: g(
                    "relative size-4 cursor-pointer",
                    s == null ? void 0 : s.sortIcon
                  ),
                  onClick: () => m(l),
                  role: "button",
                  "aria-label": re(l.label),
                  children: [
                    /* @__PURE__ */ o.jsx(
                      F,
                      {
                        size: 16,
                        className: g(
                          "absolute -top-1",
                          v.key === l.key && v.direction === "asc" ? "opacity-100" : "opacity-30"
                        )
                      }
                    ),
                    /* @__PURE__ */ o.jsx(
                      U,
                      {
                        size: 16,
                        className: g(
                          "absolute top-1",
                          v.key === l.key && v.direction === "desc" ? "opacity-100" : "opacity-30"
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
    /* @__PURE__ */ o.jsx(L, { items: e, ...a == null ? void 0 : a.tableBodyProps, children: (l) => /* @__PURE__ */ o.jsx(
      O,
      {
        "aria-label": `Row ${l.id}`,
        "aria-labelledby": `Row ${l.id}`,
        className: g(b.row),
        ...a == null ? void 0 : a.tableRowProps,
        children: (h) => /* @__PURE__ */ o.jsx(H, { ...a == null ? void 0 : a.tableCellProps, children: h === "checkbox" && u ? /* @__PURE__ */ o.jsx(
          _,
          {
            checked: R(l),
            onChange: () => {
              j(l);
            },
            "aria-label": `Select row ${l.id}`,
            className: s == null ? void 0 : s.checkbox
          }
        ) : /* @__PURE__ */ o.jsx("div", { className: s == null ? void 0 : s.cellContent, children: ie(h, l, t) }) })
      },
      l.id
    ) })
  ] });
}
export {
  ue as DataGrid
};
