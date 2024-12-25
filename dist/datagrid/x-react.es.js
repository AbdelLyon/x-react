/* empty css                */
import { j as s } from "../jsx-runtime-Dx-03ztt.js";
import * as C from "react";
import { useState as I, useEffect as z } from "react";
import { cn as v } from "../utils/x-react.es.js";
import { Table as G, TableHeader as M, TableColumn as L, Skeleton as T, TableBody as O, TableRow as H, TableCell as E, Checkbox as D } from "@nextui-org/react";
import { IconChevronUp as U, IconChevronDown as W } from "@tabler/icons-react";
const q = {
  key: null,
  direction: "asc"
}, J = ({
  rows: e,
  onSelectionChange: t,
  onSortChange: n
}) => {
  const [i, o] = I([]), [u, r] = I(!1), [d, f] = I(!1), [a, y] = I(q);
  z(() => {
    const c = i.length === e.length && e.length > 0;
    r(c);
  }, [i, e]);
  const j = (c) => {
    o((b) => {
      const h = b.some((g) => g.id === c.id) ? b.filter((g) => g.id !== c.id) : [...b, c];
      return t == null || t(h), h;
    });
  }, x = (c) => {
    const b = c ? [...e] : [];
    o(b), f(c), t == null || t(b);
  }, p = (c, b) => {
    y({ key: c, direction: b }), n == null || n(c, b);
  };
  return z(() => {
    const c = i.length > 0;
    f(c);
  }, [i]), {
    selectedRows: i,
    isAllChecked: u,
    sortConfig: a,
    handleSelectionChange: j,
    handleSelectAll: x,
    handleSortChange: p,
    handelSelectRow: (c) => {
      const b = i.some((k) => k.id === c.id);
      f(b);
    },
    isChecked: d
  };
}, Q = ({
  columns: e = 5,
  rows: t = 5,
  checkboxSelection: n = !0,
  variant: i = "unstyled",
  className: o
}) => {
  const u = F[i], r = n ? e + 1 : e;
  return /* @__PURE__ */ s.jsxs(G, { radius: "sm", "aria-label": "Loading data", className: o, children: [
    /* @__PURE__ */ s.jsx(M, { className: v(u.header), children: Array(r).fill(null).map((d, f) => /* @__PURE__ */ s.jsx(L, { className: v(u.column), children: f === 0 && n ? /* @__PURE__ */ s.jsx(T, { className: "size-4 rounded-md" }) : /* @__PURE__ */ s.jsx(T, { className: "h-4 w-24 rounded-md" }) }, f)) }),
    /* @__PURE__ */ s.jsx(O, { children: Array(t).fill(null).map((d, f) => /* @__PURE__ */ s.jsx(H, { className: v(u.row), children: Array(r).fill(null).map((a, y) => /* @__PURE__ */ s.jsx(E, { children: y === 0 && n ? /* @__PURE__ */ s.jsx(T, { className: "size-4 rounded-md" }) : /* @__PURE__ */ s.jsx(T, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, y)) }, f)) })
  ] });
};
var $ = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new WeakMap(), B = 0, X = void 0;
function Y(e) {
  return e ? (V.has(e) || (B += 1, V.set(e, B.toString())), V.get(e)) : "0";
}
function Z(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? Y(e.root) : e[t]}`).toString();
}
function K(e) {
  const t = Z(e);
  let n = $.get(t);
  if (!n) {
    const i = /* @__PURE__ */ new Map();
    let o;
    const u = new IntersectionObserver((r) => {
      r.forEach((d) => {
        var f;
        const a = d.isIntersecting && o.some((y) => d.intersectionRatio >= y);
        e.trackVisibility && typeof d.isVisible > "u" && (d.isVisible = a), (f = i.get(d.target)) == null || f.forEach((y) => {
          y(a, d);
        });
      });
    }, e);
    o = u.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
      id: t,
      observer: u,
      elements: i
    }, $.set(t, n);
  }
  return n;
}
function N(e, t, n = {}, i = X) {
  if (typeof window.IntersectionObserver > "u" && i !== void 0) {
    const f = e.getBoundingClientRect();
    return t(i, {
      isIntersecting: i,
      target: e,
      intersectionRatio: typeof n.threshold == "number" ? n.threshold : 0,
      time: 0,
      boundingClientRect: f,
      intersectionRect: f,
      rootBounds: f
    }), () => {
    };
  }
  const { id: o, observer: u, elements: r } = K(n), d = r.get(e) || [];
  return r.has(e) || r.set(e, d), d.push(t), u.observe(e), function() {
    d.splice(d.indexOf(t), 1), d.length === 0 && (r.delete(e), u.unobserve(e)), r.size === 0 && (u.disconnect(), $.delete(o));
  };
}
function P({
  threshold: e,
  delay: t,
  trackVisibility: n,
  rootMargin: i,
  root: o,
  triggerOnce: u,
  skip: r,
  initialInView: d,
  fallbackInView: f,
  onChange: a
} = {}) {
  var y;
  const [j, x] = C.useState(null), p = C.useRef(a), [m, c] = C.useState({
    inView: !!d,
    entry: void 0
  });
  p.current = a, C.useEffect(
    () => {
      if (r || !j) return;
      let g;
      return g = N(
        j,
        (A, R) => {
          c({
            inView: A,
            entry: R
          }), p.current && p.current(A, R), R.isIntersecting && u && g && (g(), g = void 0);
        },
        {
          root: o,
          rootMargin: i,
          threshold: e,
          // @ts-ignore
          trackVisibility: n,
          // @ts-ignore
          delay: t
        },
        f
      ), () => {
        g && g();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(e) ? e.toString() : e,
      j,
      o,
      i,
      u,
      r,
      n,
      f,
      t
    ]
  );
  const b = (y = m.entry) == null ? void 0 : y.target, k = C.useRef(void 0);
  !j && b && !u && !r && k.current !== b && (k.current = b, c({
    inView: !!d,
    entry: void 0
  }));
  const h = [x, m.inView, m.entry];
  return h.ref = h[0], h.inView = h[1], h.entry = h[2], h;
}
const F = {
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
function ee(e) {
  return typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column";
}
function te(e) {
  return typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column";
}
function re(e, t, n) {
  const i = n.find(
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
function oe({
  rows: e,
  columns: t,
  onEndReached: n,
  onSelectionChange: i,
  onSortChange: o,
  showSelectionCheckboxes: u = !0,
  classNames: r,
  variant: d = "unstyled",
  isLoading: f = !1,
  childrenProps: a,
  ...y
}) {
  const {
    isAllChecked: j,
    sortConfig: x,
    handleSelectionChange: p,
    handleSelectAll: m,
    handleSortChange: c,
    isChecked: b,
    handelSelectRow: k
  } = J({
    rows: e,
    onSelectionChange: i,
    onSortChange: o
  }), { inView: h } = P({
    threshold: 0.5,
    rootMargin: "100px"
  });
  if (z(() => {
    h && (n == null || n());
  }, [h, n]), f)
    return /* @__PURE__ */ s.jsx(
      Q,
      {
        columns: t.length,
        checkboxSelection: u,
        variant: d,
        rows: e.length
      }
    );
  const g = F[d], A = [
    ...u === !0 ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...t.map((l, S) => ({
      ...l,
      key: typeof l.field == "string" ? String(l.field) : String(S),
      label: l.header
    }))
  ], R = (l) => {
    const S = t.find(
      (_) => typeof _.field == "string" && _.field.length > 0 && String(_.field) === l.key
    ), w = S == null ? void 0 : S.field;
    w != null && w !== "actions" && c(
      w,
      x.direction === "asc" ? "desc" : "asc"
    );
  };
  return /* @__PURE__ */ s.jsxs(G, { "aria-label": "data-grid", "aria-labelledby": "data-grid", ...y, children: [
    /* @__PURE__ */ s.jsx(
      M,
      {
        "aria-label": "data-grid-header",
        "aria-labelledby": "data-grid-header",
        columns: A,
        className: v(g.header),
        ...a == null ? void 0 : a.tableHeaderProps,
        children: (l) => /* @__PURE__ */ s.jsx(
          L,
          {
            "aria-labelledby": l.key,
            "aria-label": ee(l),
            className: v(g.column),
            ...a == null ? void 0 : a.tableColumnProps,
            children: l.key === "checkbox" && u ? /* @__PURE__ */ s.jsx(
              D,
              {
                isSelected: j,
                onValueChange: m,
                "aria-label": "Select all rows",
                className: r == null ? void 0 : r.checkbox
              }
            ) : /* @__PURE__ */ s.jsxs("div", { className: v("flex items-center gap-2"), children: [
              l.label,
              l.sortable === !0 && /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: v(
                    "relative size-4 cursor-pointer",
                    r == null ? void 0 : r.sortIcon
                  ),
                  onClick: () => R(l),
                  role: "button",
                  "aria-label": te(l.label),
                  children: [
                    /* @__PURE__ */ s.jsx(
                      U,
                      {
                        size: 16,
                        className: v(
                          "absolute -top-1",
                          x.key === l.key && x.direction === "asc" ? "opacity-100" : "opacity-30"
                        )
                      }
                    ),
                    /* @__PURE__ */ s.jsx(
                      W,
                      {
                        size: 16,
                        className: v(
                          "absolute top-1",
                          x.key === l.key && x.direction === "desc" ? "opacity-100" : "opacity-30"
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
    /* @__PURE__ */ s.jsx(O, { items: e, ...a == null ? void 0 : a.tableBodyProps, children: (l) => /* @__PURE__ */ s.jsx(
      H,
      {
        "aria-label": `Row ${l.id}`,
        "aria-labelledby": `Row ${l.id}`,
        className: v(g.row),
        ...a == null ? void 0 : a.tableRowProps,
        children: (S) => /* @__PURE__ */ s.jsx(E, { ...a == null ? void 0 : a.tableCellProps, children: S === "checkbox" && u ? /* @__PURE__ */ s.jsx(
          D,
          {
            checked: b,
            onChange: () => {
              p(l), k(l);
            },
            "aria-label": `Select row ${l.id}`,
            className: r == null ? void 0 : r.checkbox
          }
        ) : /* @__PURE__ */ s.jsx("div", { className: r == null ? void 0 : r.cellContent, children: re(S, l, t) }) })
      },
      l.id
    ) })
  ] });
}
export {
  oe as DataGrid
};
