/* empty css                */
import { j as o } from "../jsx-runtime-Dx-03ztt.js";
import * as x from "react";
import { useState as N, useEffect as z } from "react";
import { cn as v } from "../utils/x-react.es.js";
import { Table as V, TableHeader as _, TableColumn as C, Skeleton as R, TableBody as D, TableRow as B, TableCell as G } from "@nextui-org/react";
import { IconChevronUp as L, IconChevronDown as O } from "@tabler/icons-react";
const $ = ({
  rows: e,
  onSelectionChange: r
}) => {
  const [s, n] = N(/* @__PURE__ */ new Set()), [i, a] = N(!1);
  return z(() => {
    a(s.size === e.length);
  }, [s, e]), {
    selectedRows: s,
    allRowsSelected: i,
    toggleRowSelection: (t) => {
      n((c) => {
        const d = new Set(c);
        return d.has(t) ? d.delete(t) : d.add(t), r == null || r(Array.from(d)), d;
      });
    },
    toggleAllRowsSelection: (t) => {
      const c = t ? new Set(e) : /* @__PURE__ */ new Set();
      n(c), r == null || r(Array.from(c));
    }
  };
}, H = ({
  onSortChange: e
}) => {
  const [r, s] = N({
    key: null,
    direction: "asc"
  });
  return { sortConfiguration: r, updateSort: (i, a) => {
    s({ key: i, direction: a }), e == null || e(i, a);
  } };
}, E = (e) => ({
  ...$(e),
  ...H(e)
}), M = {
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
}, F = ({
  columns: e = 5,
  rows: r = 5,
  checkboxSelection: s = !0,
  variant: n = "unstyled",
  className: i
}) => {
  const a = M[n], f = s ? e + 1 : e;
  return /* @__PURE__ */ o.jsxs(V, { radius: "sm", "aria-label": "Loading data", className: i, children: [
    /* @__PURE__ */ o.jsx(_, { className: v(a.header), children: Array(f).fill(null).map((u, t) => /* @__PURE__ */ o.jsx(C, { className: v(a.column), children: t === 0 && s ? /* @__PURE__ */ o.jsx(R, { className: "size-4 rounded-md" }) : /* @__PURE__ */ o.jsx(R, { className: "h-4 w-24 rounded-md" }) }, t)) }),
    /* @__PURE__ */ o.jsx(D, { children: Array(r).fill(null).map((u, t) => /* @__PURE__ */ o.jsx(B, { className: v(a.row), children: Array(f).fill(null).map((c, d) => /* @__PURE__ */ o.jsx(G, { children: d === 0 && s ? /* @__PURE__ */ o.jsx(R, { className: "size-4 rounded-md" }) : /* @__PURE__ */ o.jsx(R, { className: "h-4 w-full max-w-[200px] rounded-md" }) }, d)) }, t)) })
  ] });
};
var k = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new WeakMap(), I = 0, U = void 0;
function W(e) {
  return e ? (h.has(e) || (I += 1, h.set(e, I.toString())), h.get(e)) : "0";
}
function q(e) {
  return Object.keys(e).sort().filter(
    (r) => e[r] !== void 0
  ).map((r) => `${r}_${r === "root" ? W(e.root) : e[r]}`).toString();
}
function J(e) {
  const r = q(e);
  let s = k.get(r);
  if (!s) {
    const n = /* @__PURE__ */ new Map();
    let i;
    const a = new IntersectionObserver((f) => {
      f.forEach((u) => {
        var t;
        const c = u.isIntersecting && i.some((d) => u.intersectionRatio >= d);
        e.trackVisibility && typeof u.isVisible > "u" && (u.isVisible = c), (t = n.get(u.target)) == null || t.forEach((d) => {
          d(c, u);
        });
      });
    }, e);
    i = a.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), s = {
      id: r,
      observer: a,
      elements: n
    }, k.set(r, s);
  }
  return s;
}
function K(e, r, s = {}, n = U) {
  if (typeof window.IntersectionObserver > "u" && n !== void 0) {
    const t = e.getBoundingClientRect();
    return r(n, {
      isIntersecting: n,
      target: e,
      intersectionRatio: typeof s.threshold == "number" ? s.threshold : 0,
      time: 0,
      boundingClientRect: t,
      intersectionRect: t,
      rootBounds: t
    }), () => {
    };
  }
  const { id: i, observer: a, elements: f } = J(s), u = f.get(e) || [];
  return f.has(e) || f.set(e, u), u.push(r), a.observe(e), function() {
    u.splice(u.indexOf(r), 1), u.length === 0 && (f.delete(e), a.unobserve(e)), f.size === 0 && (a.disconnect(), k.delete(i));
  };
}
function Q({
  threshold: e,
  delay: r,
  trackVisibility: s,
  rootMargin: n,
  root: i,
  triggerOnce: a,
  skip: f,
  initialInView: u,
  fallbackInView: t,
  onChange: c
} = {}) {
  var d;
  const [p, j] = x.useState(null), m = x.useRef(c), [S, w] = x.useState({
    inView: !!u,
    entry: void 0
  });
  m.current = c, x.useEffect(
    () => {
      if (f || !p) return;
      let y;
      return y = K(
        p,
        (T, A) => {
          w({
            inView: T,
            entry: A
          }), m.current && m.current(T, A), A.isIntersecting && a && y && (y(), y = void 0);
        },
        {
          root: i,
          rootMargin: n,
          threshold: e,
          // @ts-ignore
          trackVisibility: s,
          // @ts-ignore
          delay: r
        },
        t
      ), () => {
        y && y();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(e) ? e.toString() : e,
      p,
      i,
      n,
      a,
      f,
      s,
      t,
      r
    ]
  );
  const l = (d = S.entry) == null ? void 0 : d.target, g = x.useRef(void 0);
  !p && l && !a && !f && g.current !== l && (g.current = l, w({
    inView: !!u,
    entry: void 0
  }));
  const b = [j, S.inView, S.entry];
  return b.ref = b[0], b.inView = b[1], b.entry = b[2], b;
}
const X = (e) => typeof e.label == "string" && e.label.length > 0 ? e.label : typeof e.key == "string" && e.key.length > 0 ? e.key : "Column", Y = (e) => typeof e == "string" && e.length > 0 ? `Sort by ${e}` : "Sort column", Z = (e, r, s) => {
  const n = s.find(
    (i) => typeof i.field == "string" && String(i.field) === String(e)
  );
  if (n === void 0)
    return null;
  if (n.cell !== void 0)
    return n.cell(r);
  if (typeof n.field == "string" && n.field.length > 0 && n.field in r) {
    const i = r[n.field];
    return typeof i == "string" || typeof i == "number" ? String(i) : null;
  }
  return null;
};
function ie({
  rows: e,
  columns: r,
  onEndReached: s,
  onSortChange: n,
  showSelectionCheckboxes: i = !0,
  classNames: a,
  variant: f = "unstyled",
  isLoading: u = !1,
  childrenProps: t,
  ...c
}) {
  const { sortConfiguration: d, updateSort: p } = E({
    rows: e,
    onSelectionChange: () => {
    },
    onSortChange: n
  }), { inView: j } = Q({ threshold: 0.5, rootMargin: "100px" });
  if (z(() => {
    j && (s == null || s());
  }, [j, s]), u)
    return /* @__PURE__ */ o.jsx(
      F,
      {
        columns: r.length,
        checkboxSelection: i,
        variant: f,
        rows: e.length
      }
    );
  const m = M[f], S = [
    ...i === !0 ? [
      {
        key: "checkbox",
        label: "",
        header: ""
      }
    ] : [],
    ...r.map((l, g) => ({
      ...l,
      key: typeof l.field == "string" ? String(l.field) : String(g),
      label: l.header
    }))
  ], w = (l) => {
    const g = r.find(
      (y) => typeof y.field == "string" && y.field.length > 0 && String(y.field) === l.key
    ), b = g == null ? void 0 : g.field;
    b != null && b !== "actions" && p(
      b,
      d.direction === "asc" ? "desc" : "asc"
    );
  };
  return /* @__PURE__ */ o.jsxs(V, { "aria-label": "data-grid", ...c, children: [
    /* @__PURE__ */ o.jsx(
      _,
      {
        columns: S,
        className: v(m.header),
        ...t == null ? void 0 : t.tableHeaderProps,
        children: (l) => /* @__PURE__ */ o.jsx(
          C,
          {
            "aria-label": X(l),
            className: v(m.column),
            ...t == null ? void 0 : t.tableColumnProps,
            children: /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2", children: [
              l.label,
              l.sortable !== !1 && /* @__PURE__ */ o.jsxs(
                "div",
                {
                  className: v("relative size-4 cursor-pointer"),
                  onClick: () => w(l),
                  role: "button",
                  "aria-label": Y(l.label),
                  children: [
                    /* @__PURE__ */ o.jsx(
                      L,
                      {
                        size: 16,
                        className: v(
                          "absolute -top-1",
                          d.key === l.key && d.direction === "asc" ? "opacity-100" : "opacity-30"
                        )
                      }
                    ),
                    /* @__PURE__ */ o.jsx(
                      O,
                      {
                        size: 16,
                        className: v(
                          "absolute top-1",
                          d.key === l.key && d.direction === "desc" ? "opacity-100" : "opacity-30"
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
    /* @__PURE__ */ o.jsx(D, { items: e, ...t == null ? void 0 : t.tableBodyProps, children: (l) => /* @__PURE__ */ o.jsx(
      B,
      {
        className: v(m.row),
        ...t == null ? void 0 : t.tableRowProps,
        children: (g) => /* @__PURE__ */ o.jsx(G, { ...t == null ? void 0 : t.tableCellProps, children: /* @__PURE__ */ o.jsx("div", { className: a == null ? void 0 : a.cellContent, children: Z(g, l, r) }) })
      },
      l.id
    ) })
  ] });
}
export {
  ie as DataGrid
};
